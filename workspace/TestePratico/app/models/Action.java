package models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

import play.data.validation.Required;
import play.db.jpa.Model;

@Entity
@Table(name="action")
public class Action extends Model {

	@Required
	public Date data;
	
	@Required
	public String action;
	
	@Required 
	public String userAction;
	
	@Required
	public String userReceptedAction;
	
	@Required
	public String gun;
}
