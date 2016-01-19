package models;

import java.util.Arrays;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.exception.ConstraintViolationException;

import enums.Modulo;

import play.data.validation.Required;
import play.db.jpa.Model;

@Entity
@Table(name="perfis")
public class Perfil extends Model{
	
	@Required
	public String nome;

	@OneToMany(mappedBy = "perfil", fetch = FetchType.EAGER)
	@Cascade(value=CascadeType.ALL)
	public List<ControleAcao> controles;
}
