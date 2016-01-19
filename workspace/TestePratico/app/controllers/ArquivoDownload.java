package controllers;

import java.io.FileInputStream;

import com.sun.xml.internal.messaging.saaj.util.ByteInputStream;

import models.ArquivoImportacao;
import play.mvc.Controller;
import play.mvc.With;

@With(Secure.class)
public class ArquivoDownload extends Controller {
	public static void download(Long id){
		ArquivoImportacao arquivo = models.ArquivoImportacao.findById(id);
		response.setContentTypeIfNotSet(arquivo.mimeType);
		
		renderBinary(arquivo.conteudo.get(),arquivo.nome);
	}

}
