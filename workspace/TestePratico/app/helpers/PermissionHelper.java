package helpers;

import java.util.ArrayList;
import java.util.List;

import enums.Modulo;

import models.ControleAcao;
import models.Perfil;
import models.Usuario;

public class PermissionHelper {
	public static boolean hasPermission(Usuario usuario, String url){
		
		String []conjunto = url.split("\\.");
		if (conjunto.length<2)
			return false;
		
		String controle = conjunto[0].toLowerCase();
		String acao = conjunto[1].toLowerCase();
		
		List<ControleAcao> controles = new ArrayList<ControleAcao>(); 
		controles = usuario.perfil.controles;

		for (ControleAcao controleAcao : controles){
			String modulo = controleAcao.controle.getModulo().getModulo();
			
			if(controle.equalsIgnoreCase(modulo)){
				return true;
			}
			if(controle.equalsIgnoreCase(controleAcao.controle.getControle()) && checkAction(controleAcao, acao)){
				return true;
			}
		}
		return false;
	}

	
	private static boolean checkAction(ControleAcao controleAcao, String acao){
		if(acao.contains("index") && controleAcao.listar)
			return true;
		
		if(acao.contains("show") && controleAcao.exibir)
			return true;
		
		if(acao.contains("delete") && controleAcao.excluir)
			return true;
		
		if((acao.contains("create") || acao.contains("save")) && controleAcao.criar)
			return true;
		
		if((acao.contains("edit") || acao.contains("update")) && controleAcao.editar)
			return true;
		
		return false;
	}
}

