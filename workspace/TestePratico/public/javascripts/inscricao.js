var so;
$(document).ready(function (){
	
	checa($("#bus"));
	checaEvento($("#eve"));
	
	$("#tel").mask("(99)9999-9999");
    $("#cel").mask("(99)9999-9999");
    $("#endereco3").mask("99999-999");
    $("#datan").mask("99/99/9999");
    
    checa($("#bus"));
	$('#apartamentos').css('display','none');
});

function checa(tipo){
	if(tipo[0].value == ""){
		$("#btnpoltronas").attr('disabled', 'disabled');
		$("#pnum").val("");
	}else{
		$("#btnpoltronas").removeAttr('disabled', 'disabled');
	}
	carregaPoltronas(tipo[0]);
}

function destravaPoltronas(tipo){
	if(tipo.value == ""){
		$("#btnpoltronas").attr('disabled', 'disabled');
		$("#pnum").val("");
		$("#onb").css('display','none');
	}else{
		$("#btnpoltronas").removeAttr('disabled', 'disabled');
		$("#onb").css('display','block');
	}
}

function checaEvento(tipo){
	if(tipo[0].value == ""){
		$("#btnapartamentos").attr('disabled', 'disabled');
		$("#apnum").val("");
	}else{
		$("#btnapartamentos").removeAttr('disabled', 'disabled');
	}
	carregaApartamentos(tipo[0]);
}

function destravaApartamentos(tipo){
	if(tipo.value == ""){
		$("#btnapartamentos").attr('disabled', 'disabled');
		$("#apnum").val("");
	}else{
		$("#btnapartamentos").removeAttr('disabled', 'disabled');
	}
}

function carregaPoltronas(onibus){
	destravaPoltronas(onibus);
	$.ajax({
	      type: "POST",
	      url: "../BuscaGeral/buscaPoltronas",
	      data: {"onibus":onibus.value},
	      datatype: "json",
	      success: function(data){
	    	  var total = (data.length / 4);
	    	  var y = 1;
	    	  var potd = "";
	    	  var pote = "";
	    	  
	    	  if((data.length / 2) > 8){

		    	  for(var x = 0 ; x <= total; x ++){
		    		  
		    		  if(data[y-1].reservada == true){
		    			  var nome = data[y-1].inscricao.nomesocio;
		    			  if(data[y-1].inscricao.dependente != ""){
		    				  nome = data[y-1].inscricao.dependente+"(D)";
		    			  }
		    			  potd +="<tr>"+
				  			"<td><input type='button' value='"+y+"' id='p"+y+"'  class='button red' onmouseout='javascript:$(\"#acomodapo\").css(\"display\",\"none\");' onmouseover='visualizaPo(\""+nome+"\")'/></td>";
		    		  }else{
			    		  potd +="<tr>"+
						  			"<td><input type='button' value='"+y+"' id='p"+y+"' onclick=\"javascript:selecionaPoltrona(this);\"/></td>";
		    		  }
		    		  
		    		  y = y + 1;
		    		  
		    		  if(data[y-1].reservada == true){
		    			  var nome = data[y-1].inscricao.nomesocio;
		    			  if(data[y-1].inscricao.dependente != ""){
		    				  nome = data[y-1].inscricao.dependente+"(D)";
		    			  }
			    		  potd += 	"<td><input type='button' value='"+y+"' id='p"+y+"'  class='button red' onmouseout='javascript:$(\"#acomodapo\").css(\"display\",\"none\");' onmouseover='visualizaPo(\""+nome+"\")'/></td>"+
						  		  "</tr>";
		    		  }else{
		    			  potd += 	"<td><input type='button' value='"+y+"' id='p"+y+"' onclick=\"javascript:selecionaPoltrona(this);\"/></td>"+
				  		  "</tr>";
		    		  }
					  y = y + 2;
					  
					  if(y < 45){
						  if(data[y-1].reservada == true){
							  var nome = data[y-1].inscricao.nomesocio;
			    			  if(data[y-1].inscricao.dependente != ""){
			    				  nome = data[y-1].inscricao.dependente+"(D)";
			    			  }
				    		  pote +="<tr>"+
							  			"<td><input type='button' value='"+y+"'  class='button red' id='p"+y+"' onmouseout='javascript:$(\"#acomodapo\").css(\"display\",\"none\");' onmouseover='visualizaPo(\""+nome+"\")'/></td>";
						  }else{
							  pote +="<tr>"+
					  			"<td><input type='button' value='"+y+"' id='p"+y+"' onclick=\"javascript:selecionaPoltrona(this);\"/></td>";
						  }
			    		  y = y - 1;
			    		  
			    		  if(data[y-1].reservada == true){
			    			  var nome = data[y-1].inscricao.nomesocio;
			    			  if(data[y-1].inscricao.dependente != ""){
			    				  nome = data[y-1].inscricao.dependente+"(D)";
			    			  }
				    		  pote +=	"<td><input type='button' value='"+y+"' id='p"+y+"'  class='button red' onmouseout='javascript:$(\"#acomodapo\").css(\"display\",\"none\");' onmouseover='visualizaPo(\""+nome+"\")'/></td>"+
							  		"</tr>";
			    		  }else{
			    			  pote +=	"<td><input type='button' value='"+y+"' id='p"+y+"' onclick=\"javascript:selecionaPoltrona(this);\"/></td>"+
						  		"</tr>";
			    		  }
			    		  
			    		  y = y + 2;
					  }
		    		  
		    	  }
		    	  
	    	  }else{
	    		  
	    		  for(var x = 0 ; x <= total-1; x ++){
			    		
	    			  if(data[y-1].reservada == true){
	    				  var nome = data[y-1].inscricao.nomesocio;
		    			  if(data[y-1].inscricao.dependente != ""){
		    				  nome = data[y-1].inscricao.dependente+"(D)";
		    			  }
			    		  potd +="<tr>"+
						  			"<td><input type='button' value='"+y+"' id='p"+y+"'  class='button red' onmouseout='javascript:$(\"#acomodapo\").css(\"display\",\"none\");' onmouseover='visualizaPo(\""+nome+"\")'/></td>";
	    			  }else{
	    				  potd +="<tr>"+
				  			"<td><input type='button' value='"+y+"' id='p"+y+"' onclick=\"javascript:selecionaPoltrona(this);\"/></td>";
			    	  }
	    			  
		    		  y = y + 1;
		    		  
		    		  if(data[y-1].reservada == true){
		    			  var nome = data[y-1].inscricao.nomesocio;
		    			  if(data[y-1].inscricao.dependente != ""){
		    				  nome = data[y-1].inscricao.dependente+"(D)";
		    			  }
			    		  potd += 	"<td><input type='button' value='"+y+"' id='p"+y+"'  class='button red' onmouseout='javascript:$(\"#acomodapo\").css(\"display\",\"none\");' onmouseover='visualizaPo(\""+nome+"\")'/></td>"+
						  		  "</tr>";
		    		  }else{
		    			  potd += 	"<td><input type='button' value='"+y+"' id='p"+y+"'  onclick=\"javascript:selecionaPoltrona(this);\"/></td>"+
				  		  "</tr>";
			    	  }
		    		  
					  y = y + 2;
					  
					  if(data[y-1].reservada == true){
						  var nome = data[y-1].inscricao.nomesocio;
		    			  if(data[y-1].inscricao.dependente != ""){
		    				  nome = data[y-1].inscricao.dependente+"(D)";
		    			  }
				    	  pote +="<tr>"+
							  			"<td><input type='button' value='"+y+"' id='p"+y+"'  class='button red' onmouseout='javascript:$(\"#acomodapo\").css(\"display\",\"none\");' onmouseover='visualizaPo(\""+nome+"\")'/></td>";
					  }else{
						  pote +="<tr>"+
				  			"<td><input type='button' value='"+y+"' id='p"+y+"'  onclick=\"javascript:selecionaPoltrona(this);\"/></td>";
			    	  }
					  
			    	  y = y - 1;
			    	  
			    	  if(data[y-1].reservada == true){
			    		  var nome = data[y-1].inscricao.nomesocio;
		    			  if(data[y-1].inscricao.dependente != ""){
		    				  nome = data[y-1].inscricao.dependente+"(D)";
		    			  }
				    	  pote +=	"<td><input type='button' value='"+y+"' id='p"+y+"'  class='button red' onmouseout='javascript:$(\"#acomodapo\").css(\"display\",\"none\");' onmouseover='visualizaPo(\""+nome+"\")'/></td>"+
							  		"</tr>";
			    	  }else{
			    		  pote +=	"<td><input type='button' value='"+y+"' id='p"+y+"' onclick=\"javascript:selecionaPoltrona(this);\"/></td>"+
					  		"</tr>";
			    	  }
			    		  
			    	  y = y + 2;
				   }
		    		  
		       }
	    		
	    	  $("#potd").html(potd);
	    	  $("#pote").html(pote);
	    	  total = Math.ceil(total) -1;
	    	  total = (total * 40) + 59;
	    	  $("#pote").css("margin-top","-"+total+"px");
	      }
	});
	
}

function visualizaAc(socios){
	$("#acomoda").html(socios);
	$("#acomoda").css("display","block");
}

function visualizaPo(socios){
	$("#acomodapo").html(socios);
	$("#acomodapo").css("display","block");
}


function carregaApartamentos(evento){
	destravaApartamentos(evento);
	$.ajax({
	      type: "POST",
	      url: "../BuscaGeral/buscaApartamentos",
	      data: {"evento":evento.value},
	      datatype: "json",
	      success: function(data){
	    	  
	    	  var ap = "";
	    	  var y = 1;
	    	  ap += "<tr>";
	    	  for(var x = 0 ; x <= data.length -1 ; x++){
	    		  var socios = "Inscricoes no apartamento "+data[x].apartamento+"<br/><br/>";
	    		  
	    		  for(var z = 0 ; z <= data[x].inscricoes.length -1; z++){
	    			  socios += ""+data[x].inscricoes[z].nomesocio+"<br/>";
	    			  if(data[x].inscricoes[z].dependente != ""){
	    				  socios += ""+data[x].inscricoes[z].dependente+"(D)<br/>";
	    			  }
	    		  }
	    		  
	    		  if(data[x].inscricoes.length == data[x].capacidade){
	    			  ap +="<td bordercolor='#FFFFFF'><center><span id='ap"+data[x].id+"'>"+data[x].apartamento+"</span> <br/> <span id='oc"+data[x].id+"'>"+data[x].inscricoes.length+"</span> / <span id='ca"+data[x].id+"'>"+data[x].capacidade+"</span> <br/> <input type='button' value='Visualizar' onmouseout='javascript:$(\"#acomoda\").css(\"display\",\"none\");' onmouseover='visualizaAc(\""+socios+"\")'/> <br/> <input type='button' id='re"+data[x].id+"' onclick='javascript:selecionaApartamento("+data[x].id+","+data[x].apartamento+");' disabled='disabled' value='Reservar'/> </center></td>";
	    		  }else{
	    			  ap +="<td bordercolor='#FFFFFF'><center><span id='ap"+data[x].id+"'>"+data[x].apartamento+"</span> <br/> <span id='oc"+data[x].id+"'>"+data[x].inscricoes.length+"</span> / <span id='ca"+data[x].id+"'>"+data[x].capacidade+"</span> <br/> <input type='button' value='Visualizar' onmouseout='javascript:$(\"#acomoda\").css(\"display\",\"none\");' onmouseover='visualizaAc(\""+socios+"\")'/> <br/> <input type='button' id='re"+data[x].id+"' onclick='javascript:selecionaApartamento("+data[x].id+","+data[x].apartamento+");' class='button red'  value='Reservar'/> </center></td>";
	    		  }

	    		  if(y == 7){
	    			  ap +="</tr>";
	    			  ap +="<tr>";
					  y=0;
	    		  }
	    		  y++;
	    	  }   	  
	    	  $("#apart").html(ap);
	      }
	});
	
}

function selecionaPoltrona(opcao){
	$("#potronas").css("display","none");
	var poltrona = $("#pnum").val();
	$("#pnum").val(opcao.value);
	$("#p"+opcao.value+"").attr('disabled', 'disabled');
	if(poltrona != ""){
		$("#p"+poltrona+"").removeAttr('disabled', 'disabled');
	}
}

function selecionaApartamento(opcao,ap){
	$("#apartamentos").css("display","none");
	var apartamento = $("#apnum").val();
	$("#apnum").val(ap);
	$("#apid").val(opcao);
	$("#re"+opcao+"").attr('disabled', 'disabled');
	var oc = parseInt($("#oc"+opcao+"").html()) + 1;
	$("#oc"+opcao+"").html(oc);
	if(apartamento != ""){
		$("#re"+apartamento+"").removeAttr('disabled', 'disabled');
		var oc = parseInt($("#oc"+apartamento+"").html()) - 1;
		$("#oc"+apartamento+"").html(oc);
	}
	
}

function buscaSocio(nome,matricula){
	$.ajax({
	      type: "POST",
	      url: "../BuscaGeral/buscaSocios",
	      data: {"nome":nome,"matricula":matricula},
	      datatype: "json",
	      success: function(data){
	    	  var socios = "";
	    	  so = data;
	    	  for(var x =0 ; x <= data.length -1; x++){
	    		  socios += "<tr class=\"odd gradeA\">"+
								"<td>"+data[x].matricula+"</td>"+
								"<td>"+data[x].socio+"</td>"+
								"<td><a href='#' class='icon16_sprite i_checkmark' onclick='javascript:selecionaSocio("+x+");' ></a></td>"+
							"</tr>";
	    	  }
	    	  $("#registrosocios").html(socios);
	      }
	});
}

function selecionaSocio(y){
	$("#socios").css('display','none');
	for(var x = 0 ; x <= 1 ; x++){
		$('#matricula').val(so[y].matricula);
		$('#soid').val(so[y].id);
		$('#nmsocio').val(so[y].socio);
		$('#tel').val(so[y].residencial);
		$('#cel').val(so[y].celular);
		$('#rgsocio').val(so[y].rg);
		$('#datan').val(so[y].data);
		$('#endereco3').val(so[y].enderecosocio.cep);
		$('#endereco3logradouro').val(so[y].enderecosocio.logradouro);
		$('#endereco3bairro').val(so[y].enderecosocio.bairro);
		$('#endereco3cidade').val(so[y].enderecosocio.cidade);
		$('#complemento').val(so[y].enderecosocio.complemento);
		$('#numero').val(so[y].enderecosocio.numero);
		var id = "endereco3";
		for(var x = 0 ; x < document.getElementById(id+"estado").length ; x++){
  		  if(document.getElementById(id+"estado")[x].value == so[y].enderecosocio.estado){
  			 $($('#'+id+'estado option').get(x)).attr('selected', 'selected');
  			 $('#'+id+'estado_chzn a.chzn-single').html("<span>"+document.getElementById(id+"estado")[x].innerHTML+"</span><div><b></b></div>");
  			 $('#'+id+'estado_chzn .chzn-drop .chzn-results li.active-result.result-selected').removeClass("result-selected");
  			 $('#'+id+'estado_chzn .chzn-drop .chzn-results #'+id+'estado_chzn_o_'+x+'').addClass("result-selected");
  		  }
  	  }
	}
	
}