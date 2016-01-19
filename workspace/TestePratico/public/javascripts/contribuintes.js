/*
 * Inicio pagina Create
 */

/*$(document).ready(function(){
	       $("input[name=cnpj]").mask("99.999.999/9999-99");
	       $("input[name=cpf]").mask("999.999.999-99");
	       $("input[name=dataNascimento]").mask("99/99/9999");
	       $("input[name=dataNascimentoResponsavel]").mask("99/99/9999");
	       $("input[name=dataContratacao]").mask("99/99/9999");
	       $("input[name=cep]").mask("99999-999");
	       $("input[name=telefone]").mask("(99)99999-9999");
	       $("input[name=telefone1]").mask("(99)9999-9999");
	       $("input[name=telefone2]").mask("(99)99999-9999");
	       if($("input[name=valor]").length){
	    	   $("input[name=valor]").maskMoney({precision:2, showSymbol:true, symbol:"R$", decimal:".", thousands:""});
	       }
		});*/

$(document).ready(function (){
	cpfCnpjLoad($("#cpfcnpjselect"));
    contribuinteCadastrado();
    
    $("#telefonerh").mask("(99)9999-9999");
    $("#faxrh").mask("(99)9999-9999");
    $("#endereco1").mask("99999-999");
    $("#endereco2").mask("99999-999");
    $("#endereco3").mask("99999-999");
    $("#inicioAtidades").mask("99/99/9999");
    
    if(document.getElementsByName("entity.mesmoEnderecoContribuinte")[0].checked == true){
    	$("#enderecocobranca").css("display","none");
    }else{
    	$("#enderecocobranca").css("display","block");
    }
        
    if(document.getElementsByName("entity.rhExterno")[0].checked == true){
    	$("#enderecorh").css("display","block");
		$("#enderecorhinterno").css("display","none");
	}else{
		$("#enderecorh").css("display","none");
		$("#enderecorhinterno").css("display","block");
	}
    
    if(document.getElementsByName("entity.contabilidadeExterna")[0].checked == true){
    	$("#contabil").css("display","block");
    }else{
    	$("#contabil").css("display","none");
    }
    
	$("#various4").fancybox({
		'width'				: '75%',
		'height'			: '75%',
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe'
	});
	
	$("#editvarious4").fancybox({
		'width'				: '75%',
		'height'			: '75%',
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe'
	});
    
	$("#various5").fancybox({
		'width'				: '75%',
		'height'			: '75%',
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe'
	});
	
	$("#editvarious5").fancybox({
		'width'				: '75%',
		'height'			: '75%',
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe'
	});
	
	$("#various6").fancybox({
		'width'				: '75%',
		'height'			: '75%',
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe'
	});
	
	$("#editvarious6").fancybox({
		'width'				: '75%',
		'height'			: '75%',
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe'
	});
	
	$("#various7").fancybox({
		'width'				: '75%',
		'height'			: '75%',
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe'
	});
	
	$("#editvarious7").fancybox({
		'width'				: '75%',
		'height'			: '75%',
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe'
	});
	
});

function cpfCnpjLoad(tipo){
	if(tipo[0].value == "F"){
		$("#cpfcnpjlabel").html("Cpf");
		$("#ceidiv").css("display","block");
	    $("#cpfcnpj").mask("999.999.999-99");
	    $("#sequencia").val("");
	}else{
		$("#cpfcnpjlabel").html("Cnpj");
		$("#ceidiv").css("display","none");
		$("#cpfcnpj").mask("99.999.999/9999-99");
		$("#sequencia").val("");
	}
}

function cpfCnpj(tipo){
		
	if(tipo.value == "F"){
		$("#cpfcnpjlabel").html("Cpf");
		$("#ceidiv").css("display","block");
	    $("#cpfcnpj").mask("999.999.999-99");
	    $("#sequencia").val("");
	}else{
		$("#cpfcnpjlabel").html("Cnpj");
		$("#ceidiv").css("display","none");
		$("#cpfcnpj").mask("99.999.999/9999-99");
		$("#sequencia").val("");
	}
	
}

function criaSequencia(cpfcnpj){
	if(cpfcnpj.value.length == 14){
		$("#sequencia").val("9999");
	}else if(cpfcnpj.value.length == 18){
		$("#sequencia").val(cpfcnpj.value.substring(11,15));
	}else{
		$("#sequencia").val("");
	}
}

function mesmoEndereco(opcao){
	if(opcao.checked == true){
		$("#enderecocobranca").css("display","none");
	}else if(opcao.checked == false){
		$("#enderecocobranca").css("display","block");
	}
}

function mudacontabil(opcao){
	if(opcao.checked == true){
		$("#contabil").css("display","block");
	}else if(opcao.checked == false){
		$("#contabil").css("display","none");
	}
}

function rhExterno(opcao){
	if(opcao.checked == true){
		$("#enderecorh").css("display","block");
		$("#enderecorhinterno").css("display","none");
	}else if(opcao.checked == false){
		$("#enderecorh").css("display","none");
		$("#enderecorhinterno").css("display","block");
	}	
}

function contribuinteCadastrado(){
	if($("#idcontribuinte").val() > 0){
		$("#various4").css("display","block");
		$("#various5").css("display","block");
		$("#various6").css("display","block");
		$("#various7").css("display","block");
	}else{
		$("#various4").css("display","none");
		$("#various5").css("display","none");
		$("#various6").css("display","none");
		$("#various7").css("display","none");
	}
}