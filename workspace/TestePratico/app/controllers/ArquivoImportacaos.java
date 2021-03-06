package controllers;

import java.util.List;
import models.ArquivoImportacao;
import play.mvc.Controller;
import play.mvc.With;
import play.i18n.Messages;
import play.data.validation.Validation;
import play.data.validation.Valid;

@With(Secure.class)
public class ArquivoImportacaos extends Controller {
    public static void index() {
        List<ArquivoImportacao> entities = models.ArquivoImportacao.all().fetch();
        render(entities);
    }

    public static void create(ArquivoImportacao entity) {
        render(entity);
    }

    public static void show(java.lang.Long id) {
        ArquivoImportacao entity = ArquivoImportacao.findById(id);
        render(entity);
    }

    public static void edit(java.lang.Long id) {
        ArquivoImportacao entity = ArquivoImportacao.findById(id);
        render(entity);
    }

    public static void delete(java.lang.Long id) {
        ArquivoImportacao entity = ArquivoImportacao.findById(id);
        entity.delete();
        index();
    }
    
    public static void save(@Valid ArquivoImportacao entity) {
        if (validation.hasErrors()) {
            flash.error(Messages.get("scaffold.validation"));
            render("@create", entity);
        }
        entity.save();
        flash.success(Messages.get("scaffold.created", "ArquivoImportacao"));
        index();
    }

    public static void update(@Valid ArquivoImportacao entity) {
        if (validation.hasErrors()) {
            flash.error(Messages.get("scaffold.validation"));
            render("@edit", entity);
        }
        
              entity = entity.merge();
        
        entity.save();
        flash.success(Messages.get("scaffold.updated", "ArquivoImportacao"));
        index();
    }
}
