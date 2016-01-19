package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import enums.Controle;

import play.db.jpa.Model;

@Entity
@Table(name="controle_acoes")
public class ControleAcao extends Model {
	
	@ManyToOne
	public Perfil perfil;
	
	@Enumerated(EnumType.STRING)
	public Controle controle;
	
	public boolean listar;
	
	public boolean exibir;
	
	public boolean criar;
	
	public boolean editar;

	public boolean excluir;
	
	public ControleAcao(){
		
	}
	
	public ControleAcao(Controle controle){
		this.controle = controle;
	}

	public ControleAcao(Controle controle, boolean listar,
			boolean exibir, boolean criar, boolean editar, boolean excluir) {
		this.controle = controle;
		this.listar = listar;
		this.exibir = exibir;
		this.criar = criar;
		this.editar = editar;
		this.excluir = excluir;
	}
	
}
