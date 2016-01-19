package controllers;


import models.Usuario;
import play.mvc.With;

@With(Secure.class)
public class Security extends Secure.Security{
	
	public static boolean authentify(String username, String password){
		Usuario u = Usuario.getByLogin(username);
		return u != null && u.checkPassword(password);
	}
}
