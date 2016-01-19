package controllers;

import play.mvc.With;

@With(Secure.class)
public class ModuloTI extends ProtectedController{
	public static void index(){
		render();
	}
}
