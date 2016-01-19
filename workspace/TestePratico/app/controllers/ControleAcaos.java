package controllers;

import java.util.List;
import models.ControleAcao;
import play.mvc.Controller;
import play.mvc.With;
import play.i18n.Messages;
import play.data.validation.Validation;
import play.data.validation.Valid;

@With(Secure.class)
public class ControleAcaos extends Controller {
    public static void index() {
        List<ControleAcao> entities = models.ControleAcao.all().fetch();
        render(entities);
    }

    public static void create(ControleAcao entity) {
        render(entity);
    }

    public static void show(java.lang.Long id) {
        ControleAcao entity = ControleAcao.findById(id);
        render(entity);
    }

    public static void edit(java.lang.Long id) {
        ControleAcao entity = ControleAcao.findById(id);
        render(entity);
    }

    public static void delete(java.lang.Long id) {
        ControleAcao entity = ControleAcao.findById(id);
        entity.delete();
        index();
    }
    
    public static void save(@Valid ControleAcao entity) {
        if (validation.hasErrors()) {
            flash.error(Messages.get("scaffold.validation"));
            render("@create", entity);
        }
        entity.save();
        flash.success(Messages.get("scaffold.created", "ControleAcao"));
        index();
    }

    public static void update(@Valid ControleAcao entity) {
        if (validation.hasErrors()) {
            flash.error(Messages.get("scaffold.validation"));
            render("@edit", entity);
        }
        
              entity = entity.merge();
        
        entity.save();
        flash.success(Messages.get("scaffold.updated", "ControleAcao"));
        index();
    }
}
