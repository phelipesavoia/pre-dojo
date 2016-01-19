package enums;

public enum Controle {
	
	ArquivoLogs(Modulo.RELATORIO, "Arquivo de Logs","arquivologs"),
	ROUNDS(Modulo.RELATORIO, "Rounds","rounds"),
	STATUSS(Modulo.RELATORIO, "Status","statuss"),
	PERFIS(Modulo.TI, "Cadastro de Perfis", "perfis"),
	USUARIOS(Modulo.TI, "Cadastro de Usuários", "usuarios");
	
	private Modulo modulo;
	private String nome;
	private String controle;
	
	private Controle(Modulo modulo, String nome, String controle){
		this.modulo = modulo;
		this.nome = nome;
		this.controle = controle;
	}

	public Modulo getModulo() {
		return modulo;
	}

	public String getNome() {
		return nome;
	}
	
	public String getControle(){
		return controle;
	}
	
}
