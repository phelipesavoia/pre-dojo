package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import play.db.jpa.Blob;
import play.db.jpa.Model;

@Entity
public class ArquivoImportacao extends Model {
		
	@OneToOne
	@PrimaryKeyJoinColumn
	public ArquivoLog arquivoLog;
	
	public String nome;
	
	public String mimeType;
	
	public Blob conteudo;
	
}
