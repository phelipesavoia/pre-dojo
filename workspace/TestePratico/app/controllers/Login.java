package controllers;


import models.Usuario;
import play.mvc.Controller;

public class Login extends Controller{
	
	public static void index(){
		if(session.get("usuario")!=null)
			Home.index();
		
		Usuario entity = new Usuario();
		render(entity);
	}
	
	public static void login(Usuario entity){
		Usuario u = Usuario.getByLogin(entity.login);
		if(u == null || !u.checkPassword(entity.senha)){
			flash.error("Usuário e/ou senha inválido(s)", entity);
			index();
		}
		session.put("usuario", u);
		Home.index();
	}
	
	public static void logout(){
		session.all().clear();
		index();
	}
}
