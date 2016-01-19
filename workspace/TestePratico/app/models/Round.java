package models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

import play.data.validation.Required;
import play.db.jpa.Model;

@Entity
@Table(name="Round")
public class Round extends Model {

	@Required 
	public Date data;
	
	@Required
	public long identifier;
	
	@Required
	public Boolean status;
}
