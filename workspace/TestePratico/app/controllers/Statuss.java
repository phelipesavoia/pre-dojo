package controllers;

import java.util.List;

import models.Status;
import play.data.validation.Valid;
import play.i18n.Messages;
import play.mvc.Controller;
import play.mvc.With;

@With(Secure.class)
public class Statuss extends ProtectedController {
    public static void index() {
        List<Status> entities = models.Status.all().fetch();
        render(entities);
    }

    public static void create(Status entity) {
        render(entity);
    }

    public static void show(java.lang.Long id) {
        Status entity = Status.findById(id);
        render(entity);
    }

    public static void edit(java.lang.Long id) {
        Status entity = Status.findById(id);
        render(entity);
    }

    public static void delete(java.lang.Long id) {
        Status entity = Status.findById(id);
        entity.delete();
        index();
    }
    
    public static void save(@Valid Status entity) {
        if (validation.hasErrors()) {
            flash.error(Messages.get("scaffold.validation"));
            render("@create", entity);
        }
        entity.save();
        flash.success(Messages.get("scaffold.created", "Status"));
        index();
    }

    public static void update(@Valid Status entity) {
        if (validation.hasErrors()) {
            flash.error(Messages.get("scaffold.validation"));
            render("@edit", entity);
        }
        
              entity = entity.merge();
        
        entity.save();
        flash.success(Messages.get("scaffold.updated", "Status"));
        index();
    }
}