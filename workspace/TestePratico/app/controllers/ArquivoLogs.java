package controllers;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import helpers.ArquiveImportHelper;
import models.ArquivoImportacao;
import models.ArquivoLog;
import play.data.validation.Valid;
import play.i18n.Messages;
import play.libs.MimeTypes;
import play.mvc.With;

@With(Secure.class)
public class ArquivoLogs extends ProtectedController {
    public static void index() {
        List<ArquivoLogs> entities = models.ArquivoImportacao.all().fetch();
        render(entities);
    }

    public static void create(ArquivoLog entity) {
        render(entity);
    }

    public static void show(java.lang.Long id) {
    	ArquivoLog entity = ArquivoLog.findById(id);
        SimpleDateFormat out = new SimpleDateFormat("dd/MM/yyyy h:m:s");    
        entity.dataFormatada = out.format(entity.data);
        render(entity);
    }
    
    public static void save(@Valid ArquivoLog entity) {
        if (validation.hasErrors()) {
            flash.error(Messages.get("scaffold.validation"));
            render("@create", entity);
        }
        
        Date data = new Date();
        entity.data = data;
        
        ArquivoImportacao arquivo = new ArquivoImportacao();
        arquivo.conteudo = entity.arquivo;
        arquivo.nome = "log_"+data.getDate()+"_"+data.getMonth()+1+"_"+data.getYear();
        arquivo.mimeType = MimeTypes.getContentType(entity.arquivo.getFile().getName());
        
        arquivo.save();
        
        try {
			ArquiveImportHelper.TratarLinhasImportacao(entity.arquivo.get());
		} catch (IOException e) {
			e.printStackTrace();
		}
        
        entity.save();
        flash.success(Messages.get("scaffold.created", "ArquivoLog"));
        index();
    }
}
