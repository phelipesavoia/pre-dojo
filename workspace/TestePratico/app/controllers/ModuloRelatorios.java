package controllers;

import play.mvc.Controller;
import play.mvc.With;

@With(Secure.class)
public class ModuloRelatorios extends ProtectedController{
	public static void index(){
		render();
	}

}
