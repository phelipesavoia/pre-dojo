package models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import play.data.validation.Match;
import play.data.validation.Required;
import play.db.jpa.Blob;
import play.db.jpa.Model;

@Entity
public class ArquivoLog extends Model {
	
	public Date data;
	
	@Transient
	public String nome;
	
	@Transient
	public String dataFormatada;
	
	@Required
	@Transient
	public Blob arquivo;
	
}
