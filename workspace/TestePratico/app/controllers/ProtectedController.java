package controllers;

import helpers.PermissionHelper;

import java.util.List;

import models.Usuario;

import play.db.jpa.Model;
import play.mvc.Before;
import play.mvc.Controller;
import play.mvc.With;

@With(Secure.class)
public abstract class ProtectedController extends Controller {
	 
	@Before
	public static void checkPermission(){
		Usuario usuario = Usuario.getByLogin(session.get("username"));
		
		String acao = request.action;
		if(PermissionHelper.hasPermission(usuario, acao)){
			String url = request.action;
			if(PermissionHelper.hasPermission(usuario, url))
				 return;
		}else{
			Home.index();
		}
	}
}
