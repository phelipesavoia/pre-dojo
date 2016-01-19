package controllers;

import java.util.ArrayList;
import java.util.List;

import models.ControleAcao;
import models.Perfil;
import models.Usuario;
import play.data.validation.Valid;
import play.i18n.Messages;
import play.mvc.Controller;
import play.mvc.With;
import enums.Controle;

@With(Secure.class)
public class Perfis extends Controller {
    public static void index() {
        List<Perfil> entities = models.Perfil.all().fetch();
        render(entities);
    }

    public static void create(Perfil entity) {
    	List<ControleAcao> controles = new ArrayList<ControleAcao>();
    	
    	for (Controle controle : Controle.values()){
    		controles.add(new ControleAcao(controle));
    	}
    	entity.controles = controles;
        render(entity);
    }

    public static void show(java.lang.Long id) {
        Perfil entity = Perfil.findById(id);
        render(entity);
    }

    public static void edit(java.lang.Long id) {
        Perfil entity = Perfil.findById(id);
        render(entity);
    }
    
    public static void delete(java.lang.Long id) {
        Perfil entity = Perfil.findById(id);
        if(Usuario.findByPerfil(entity).isEmpty()){
        	entity.delete();
        }else{
        	flash.error("Não é possível excluir o perfil " + entity.nome + ", pois existem usuários relacionados a ele" );
        }
        index();
    }
    
    public static void save(@Valid Perfil entity) {
        if (validation.hasErrors()) {
            flash.error(Messages.get("scaffold.validation"));
            render("@create", entity);
        }
                
        entity.controles = new ArrayList<ControleAcao>();
        
        for(int x= 0;x < Controle.values().length ;x++){
        	boolean listar = params.get("listar_"+x) != null;
        	boolean criar = params.get("criar_"+x) != null;
        	boolean editar = params.get("editar_"+x) != null;
        	boolean excluir = params.get("excluir_"+x) != null;
        	boolean exibir = params.get("exibir_"+x) != null;
        	        	
        	ControleAcao controleAcao =  new ControleAcao(Controle.valueOf(params.get("controle_"+x)),listar,exibir,criar, editar, excluir);
        	controleAcao.perfil = entity;
        	entity.controles.add(controleAcao);
        }
        
        entity.save();
        
        flash.success(Messages.get("scaffold.created", "Perfil"));
        index();
    }

    public static void update(@Valid Perfil entity) {
        if (validation.hasErrors()) {
            flash.error(Messages.get("scaffold.validation"));
            render("@edit", entity);
        }
        entity = entity.merge();        
        for(int x= 0;x < Controle.values().length ;x++){
        	boolean listar = params.get("listar_"+x) != null;
        	boolean criar = params.get("criar_"+x) != null;
        	boolean editar = params.get("editar_"+x) != null;
        	boolean excluir = params.get("excluir_"+x) != null;
        	boolean exibir = params.get("exibir_"+x) != null;
        	
        	ControleAcao controleAcao= ControleAcao.findById(Long.parseLong(params.get("controleAcao_"+x)));
        	controleAcao.listar = listar;
        	controleAcao.criar = criar;
        	controleAcao.editar = editar;
        	controleAcao.excluir = excluir;
        	controleAcao.exibir = exibir;
        	controleAcao.controle = Controle.valueOf(params.get("controle_"+x));
        	controleAcao.merge();
        	controleAcao.save();
        }
        entity.save();
        flash.success(Messages.get("scaffold.updated", "Perfil"));
        index();
    }
}
