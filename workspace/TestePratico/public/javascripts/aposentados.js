

$(document).ready(function (){
	
	veiculo($("#tipo"));
	
});

function mudaVeiculo(opcao){
	
	if(opcao.value == "ON"){
		$("#onibus").css("display","block");
		$("#van").css("display","none");
	}else{
		$("#onibus").css("display","none");
		$("#van").css("display","block");
	}
	
}

function veiculo(tipo){
	if(tipo[0].value == "ON"){
		$("#onibus").css("display","block");
		$("#van").css("display","none");
	}else{
		$("#onibus").css("display","none");
		$("#van").css("display","block");
	}
}