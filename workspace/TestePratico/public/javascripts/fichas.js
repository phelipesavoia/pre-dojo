var so;


$(document).ready(function (){
	$("#contribuinte").mask("99.999.999/9999-99");
	$("#contribuinte2").mask("99.999.999/9999-99");
});

function buscaContrib(){
	
	var tpcontrib = $("#tipocontrib").val();
	var ano = $("#ano").val();
	var parcela = $("#parcela").val();
	var contribuinte = $("#idc").val();
	var esccontabil = $("#nome2").val();
	var categoria = $("#categoria").val();
	
	if(contribuinte != ""){
		$.ajax({
		      type: "POST",
		      url: "../BuscaGeral/buscaContribC",
		      data: {"contribuinte":contribuinte,"parcela":parcela,"ano":ano,"tpcontrib":tpcontrib},
		      datatype: "json",
		      success: function(data){
		    	  var contribuintes = "";
		    	  if(data.codigo != undefined){
		    		  contribuintes += "<tr class=\"odd gradeA\">"+
		    		  				"<td><input type='checkbox' name='contribs' value='"+data.id+';'+data.idcontrib+"' /></td>"+
									"<td>"+data.codigo+"</td>"+
									"<td>"+data.sequencia+"</td>"+
									"<td>"+data.razaoSocial+"</td>"+
								"</tr>";
		    	  }
		    	  $("#contribuinteslista").html(contribuintes);
		      }
		});
		
	}else{
		$.ajax({
	      type: "POST",
	      url: "../BuscaGeral/buscaContrib",
	      data: {"tpcontrib":tpcontrib,"ano":ano,"parcela":parcela,"contribuinte":contribuinte,"esccontabil":esccontabil,"categoria":categoria},
	      datatype: "json",
	      success: function(data){
	    	  var contribuintes = "";
	    	  for(var x =0 ; x <= data.length -1; x++){
	    		  contribuintes += "<tr class=\"odd gradeA\">"+
					  				"<td><input type='checkbox' name='contribs' value='"+data[x].id+';'+data[x].idcontrib+"' /></td>"+
									"<td>"+data[x].codigo+"</td>"+
									"<td>"+data[x].sequencia+"</td>"+
									"<td>"+data[x].razaoSocial+"</td>"+
								"</tr>";
	    	  }
	    	  $("#contribuinteslista").html(contribuintes);
	      }
		});
		
	}

}

function buscaContribUm(){
	
	$.ajax({
	      type: "POST",
	      url: "../BuscaGeral/buscaContribUm",
	      data: {"contribuinte":$("#contribuinte").val()},
	      datatype: "json",
	      success: function(data){
	    	  var contribuintes = data;
	    	  if(contribuintes.razaoSocial != undefined){
		    	  $("#contrib").css("display","none");
		    	  $("#nomecontrib").html(contribuintes.razaoSocial);
		    	  $("#idc").val(contribuintes.codigo);
		    	  $("#sequencia").html(contribuintes.sequencia);
		    	  $("#contrib").css("display","block");
	    	  }else{
	    		  $("#contrib").css("display","none");
	    	  }

	      }
	});
}

function buscaContribImpressao(){
	
	var tpcontrib = $("#tipocontrib").val();
	var de = $("#de").val();
	var ate = $("#ate").val();
	var es = document.getElementsByName("es");
	var contribuinte = $("#idc2").val();
	var tipo = "";
	
	for(var x = 0; x <= es.length -1 ; x++){
		if(es[x].checked == true){
			tipo += es[x].value;
		}
	}
	
	if(contribuinte != ""){
		$.ajax({
		      type: "POST",
		      url: "../BuscaGeral/buscaFichasC",
		      data: {"contribuinte":contribuinte,"tpcontrib":tpcontrib},
		      datatype: "json",
		      success: function(data){
		    	  var contribuintes = "";
		    	  if(data.codigo != undefined){
		    		  contribuintes += "<tr class=\"odd gradeA\">"+
		    		  				"<td><input type='checkbox' name='contribs2' value='"+data.id+';'+data.idcontrib+';'+data.idcontribuinte+"' /></td>"+
									"<td>"+data.id+"</td>"+
									"<td>"+data.codigo+"</td>"+
									"<td>"+data.sequencia+"</td>"+
									"<td>"+data.razaoSocial+"</td>"+
									"<td>"+data.ano+"</td>"+
								"</tr>";
		    	  }
		    	  $("#contribuinteslistaimp").html(contribuintes);
		      }
		});
		
	}else{
		$.ajax({
	      type: "POST",
	      url: "../BuscaGeral/buscaFichas",
	      data: {"tpcontrib":tpcontrib,"contribuinte":contribuinte,"de":de,"ate":ate,"es":tipo},
	      datatype: "json",
	      success: function(data){
	    	  var contribuintes = "";
	    	  for(var x =0 ; x <= data.length -1; x++){
	    		  contribuintes += "<tr class=\"odd gradeA\">"+
					  				"<td><input type='checkbox' name='contribs2' value='"+data[x].id+';'+data[x].idcontrib+';'+data[x].idcontribuinte+"' /></td>"+
									"<td>"+data[x].id+"</td>"+
									"<td>"+data[x].codigo+"</td>"+
									"<td>"+data[x].sequencia+"</td>"+
									"<td>"+data[x].razaoSocial+"</td>"+
									"<td>"+data[x].ano+"</td>"+
								"</tr>";
	    	  }
	    	  $("#contribuinteslistaimp").html(contribuintes);
	      }
		});
		
	}
	
}

function buscaContribUmD(){
	
	$.ajax({
	      type: "POST",
	      url: "../BuscaGeral/buscaContribUm",
	      data: {"contribuinte":$("#contribuinte2").val()},
	      datatype: "json",
	      success: function(data){
	    	  var contribuintes = data;
	    	  if(contribuintes.razaoSocial != undefined){
		    	  $("#contrib2").css("display","none");
		    	  $("#nomecontrib2").html(contribuintes.razaoSocial);
		    	  $("#idc2").val(contribuintes.codigo);
		    	  $("#sequencia2").html(contribuintes.sequencia);
		    	  $("#contrib2").css("display","block");
	    	  }else{
	    		  $("#contrib2").css("display","none");
	    	  }

	      }
	});
}


function buscaEscritorioUm(){
	
	$.ajax({
	      type: "POST",
	      url: "../BuscaGeral/buscaEscritorioUm",
	      data: {"contribuinte":$("#nome2").val()},
	      datatype: "json",
	      success: function(data){
	    	 var contribuintes = data;
	    	 if(contribuintes.contato != undefined){
		    	 $("#escritorios").css("display","none");
			     $("#nomeesc").html(contribuintes.razaoSocial);
			     $("#idesc").val(contribuintes.contato);
			     $("#escritorios").css("display","block");
	    	 }else{
	    		 $("#escritorios").css("display","none");
	    	 }
	      }
	});
}


function gerar(){
	
	var tpcontrib = $("#tipocontrib").val();
	var ano = $("#ano").val();
	var parcela = $("#parcela").val();
	var carteira = $("#carteira").val();
	
	var contribs = document.getElementsByName("contribs");
	var dados = tpcontrib+","+ano+","+parcela+","+carteira+",";
	for(var x =0 ; x <= contribs.length -1; x++){
		if(contribs[x].checked == true){
			if(x != contribs.length -1){
				dados += contribs[x].value+",";
			}else{
				dados += contribs[x].value;
			}
		}
	}
	
	$.ajax({
	      type: "POST",
	      url: "../BuscaGeral/GerarDocumento",
	      data: {"dados":dados},
	      datatype: "json",
	      success: function(data){
	    	  alert("Fichas geradas com sucesso! Vá para aba de impressão");
	      }
	});
	
}

function email(){
	alert("Boletos enviados com sucesso!");
}

function visualizar(){
	
	var sel = document.getElementsByName("contribs2");
	var contribuicao = "";
	
	for(var x =0 ; x <= sel.length -1 ; x++){
		if(sel[x].checked == true){
			contribuicao = sel[x].value; 
		}
	}
	
	$.ajax({
	      type: "POST",
	      url: "../BuscaGeral/GerarBoleto",
	      data: {"contribuicao":contribuicao},
	      datatype: "text",
	      success: function(data){
	    	  var a = document.createElement('a');
	    	  a.href= 'http://localhost:8080/boletos/boleto_itau.php?dados='+data;
	    	  a.target = '_blank';
	    	  document.body.appendChild(a);
	    	  a.click();
	      }
	});
	
}

