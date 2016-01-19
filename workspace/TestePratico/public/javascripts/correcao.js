	
	var tp = "";
	var tpc = "";

	$(document).ready(function (){
		opcaoLoad($("#tipo"));
		tipoCalculoLoad($("#tipocalc"));
		
		$("#various4").fancybox({
			'width'				: '75%',
			'height'			: '50%',
	        'autoScale'     	: false,
	        'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'type'				: 'iframe'
		});
		
	});
	
	function descontoSel(opcao){
		if(opcao.checked == true){
			$("#desconto").removeAttr("disabled","disabled");
			$("#desconto").val("0.0");
		}else{
			$("#desconto").attr("disabled","disabled");
			$("#desconto").val("0.0");
			if($("#valor").val() != null && $("#valor").val() != undefined){
				calculaJurosTotal($("#valor").val());
			}
		}
	}
	
	function tipoCalculoLoad(opcao){
		tpc =opcao[0].value
		if(opcao[0].value == "AUTOMATICO"){
			$("#automatico").css("display","block");
			$("#manual").css("display","none");
			$("#total").val("0.0");
			$("#valor").val("0.0");
		}else if(opcao[0].value == "MANUAL"){
			$("#automatico").css("display","none");
			$("#manual").css("display","block");
			$("#total").val("0.0");
			$("#valor").val("0.0");
		}
	}
	
	function tipoCalculo(opcao){
		tpc =opcao.value
		if(opcao.value == "AUTOMATICO"){
			$("#automatico").css("display","block");
			$("#manual").css("display","none");
			$("#total").val("0.0");
			$("#valor").val("0.0");
		}else if(opcao.value == "MANUAL"){
			$("#automatico").css("display","none");
			$("#manual").css("display","block");
			$("#total").val("0.0");
			$("#valor").val("0.0");
		}
	}
	
	function calculoDesconto(desconto){
		desconto = parseFloat(desconto);
		var valor = parseFloat($("#valor").val());
		if(tp == "SINDICAL"){
			//multa juros
			var multa = parseFloat($("#multa").val());
			var juros = parseFloat($("#juros").val());
			
			multa = (valor/100) * multa;
			var multaax = (multa/100) * desconto;
			multa = multa - multaax;
			
			juros = (valor/100) * juros;
			var jurosax = (juros/100) * desconto;
			juros = juros - jurosax;
			
			valor = valor + multa + juros;
			$("#dm").val(multa.toFixed(2));
			$("#dj").val(juros.toFixed(2));
		}else if(tp == "NEGOCIAL"){
			//multan jurosn
			var multa = parseFloat($("#multan").val());
			var juros = parseFloat($("#jurosn").val());

			multa = (valor/100) * multa;
			var multaax = (multa/100) * desconto;
			multa = multa - multaax;
			
			juros = (valor/100) * juros;
			var jurosax = (juros/100) * desconto;
			juros = juros - jurosax;
			
			valor = parseFloat(valor) + multa + juros;
			$("#dm").val(multa.toFixed(2));
			$("#dj").val(juros.toFixed(2));
		}
		$("#total").val(valor.toFixed(2));		
	}
	
	function calculaJurosTotal(valor){
		valor = parseFloat(valor);
		if(tpc == "AUTOMATICO"){
			if(tp == "SINDICAL"){
				//multa juros
				var multa = parseFloat($("#multa").val());
				var juros = parseFloat($("#juros").val());
				multa = (valor/100) * multa;
				juros = (valor/100) * juros;
				valor = valor + multa + juros;
				$("#dm").val(multa.toFixed(2));
				$("#dj").val(juros.toFixed(2));
			}else if(tp == "NEGOCIAL"){
				//multan jurosn
				var multa = parseFloat($("#multan").val());
				var juros = parseFloat($("#jurosn").val());
				multa = (valor/100) * multa;
				juros = (valor/100) * juros;
				valor = parseFloat(valor) + multa + juros;
				$("#dm").val(multa.toFixed(2));
				$("#dj").val(juros.toFixed(2));
			}
			$("#total").val(valor.toFixed(2));
		}
	}
	
	function calculaCorrecao(correcao){
		correcao = parseFloat(correcao);
		var valor = parseFloat($("#valor").val());
		valor = valor + correcao;
		$("#total").val(valor.toFixed(2));		
	}
	
	function opcaoLoad(op){
		tp = op[0].value;
		if(op[0].value == "SINDICAL"){
			$("#sindicalm").css("display","block");
			$("#negocialm").css("display","none");
			$("#sindicalmn").css("display","block");
			$("#negocialmn").css("display","none");
		}else if(op[0].value == "NEGOCIAL"){
			$("#sindicalm").css("display","none");
			$("#negocialm").css("display","block");
			$("#sindicalmn").css("display","none");
			$("#negocialmn").css("display","block");
		}
		
	}
	
	function opcao(op){
		tp =op.value
		if(op.value == "SINDICAL"){
			$("#sindicalm").css("display","block");
			$("#negocialm").css("display","none");
			$("#sindicalmn").css("display","block");
			$("#negocialmn").css("display","none");
		}else if(op.value == "NEGOCIAL"){
			$("#sindicalm").css("display","none");
			$("#negocialm").css("display","block");
			$("#sindicalmn").css("display","none");
			$("#negocialmn").css("display","block");
		}
		$("#valor").val("0.0");
		$("#dm").val("");
		$("#dj").val("");
		$("#dsel")[0].checked = false;
		$("#uniform-dsel span").removeClass("checked");
		$("#desconto").val("0.0");
		$("#desconto").attr("readonly","readonly");
		$("#total").val("0.0");
	}