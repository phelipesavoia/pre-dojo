$(document).ready(function (){
	$("#qtde").change(function (){
		renderParcelas($("#qtde").val());
	});
	$("#add").click(function (){
		add();
	});
	if($("#valororiginal").length){
 	   $("#valororiginal").maskMoney({precision:2, showSymbol:true, symbol:"R$", decimal:".", thousands:""});
    }
	if($("#valorcredito").length){
	   $("#valorcredito").maskMoney({precision:2, showSymbol:true, symbol:"R$", decimal:".", thousands:""});
	}
	if($("#atualmonet").length){
	   $("#atualmonet").maskMoney({precision:2, showSymbol:true, symbol:"R$", decimal:".", thousands:""});
	}
	if($("#multa").length){
	   $("#multa").maskMoney({precision:2, showSymbol:true, symbol:"R$", decimal:".", thousands:""});
	}
	$("#arquivo").change(function (){
		$("#nome").val($("#arquivo").val());
	});
});
function renderParcelas(qtde){
	$("#parcela_title").css("display","block");
	$("#parcelas").html("");
	$("#parcelas").append('<tr><td></td><td>Vencimento</td><td>Ano Seguinte</td></tr>');
	for(x=1;x <=qtde; x++){
		$("#parcelas").append('<tr><td>Parcela '+ x + '</td><td><input name=\'vencimento_' + x + '\' /></td><td><input type=\'checkbox\' name=\'anoSeguinte_' + x + '\' /></td></tr>');
	}
}
function add(){
	var x = $("#qtde").val();
	x++;
	$("#parcelas").append('<tr><td>Parcela '+ x + '</td><td><input name=\'vencimento_' + x + '\' /></td><td><input type=\'checkbox\' name=\'anoSeguinte_' + x + '\' /></td></tr>');
	$("#qtde").val(x);
}
function buscaCep(id){
	var cep = $("#"+id).val();
	$.ajax({
	      type: "POST",
	      url: "../buscaenderecos/buscaCep",
	      data: {"cep":cep},
	      datatype: "json",
	      success: function(data){
	    	  $("#"+id+"logradouro").val(data.logradouro);
	    	  $("#"+id+"bairro").val(data.bairro);
	    	  $("#"+id+"cidade").val(data.cidade); 
	    	  for(var x = 0 ; x < document.getElementById(id+"estado").length ; x++){
	    		  if(document.getElementById(id+"estado")[x].value == data.estado){
	    			 $($('#'+id+'estado option').get(x)).attr('selected', 'selected');
	    			 $('#'+id+'estado_chzn a.chzn-single').html("<span>"+document.getElementById(id+"estado")[x].innerHTML+"</span><div><b></b></div>");
	    			 $('#'+id+'estado_chzn .chzn-drop .chzn-results li.active-result.result-selected').removeClass("result-selected");
	    			 $('#'+id+'estado_chzn .chzn-drop .chzn-results #'+id+'estado_chzn_o_'+x+'').addClass("result-selected");
	    		  }
	    	  }
	    	  
	    	  try{
	    		  for(var i = 0 ; i < document.getElementById(id+"classificacao").length ; i++){
		    		  if(document.getElementById(id+"classificacao")[i].value == data.classificacao){
		    			 $($('#'+id+'classificacao option').get(i)).attr('selected', 'selected');
		    			 $('#'+id+'classificacao_chzn a.chzn-single').html("<span>"+document.getElementById(id+"classificacao")[i].innerHTML+"</span><div><b></b></div>");
		    			 $('#'+id+'classificacao_chzn .chzn-drop .chzn-results li.active-result.result-selected').removeClass("result-selected");
		    			 $('#'+id+'classificacao_chzn .chzn-drop .chzn-results #'+id+'classificacao_chzn_o_'+i+'').addClass("result-selected");
		    		  }
		    	  }
	    	  }catch (e) { }
	      }
	});
}
