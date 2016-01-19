package enums;

public enum Modulo{
	RELATORIO("Relatorios","ModuloRelatorios"),
	TI("TI","ModuloTI");
	
	private Modulo(String nome, String modulo){
		this.nome = nome;
		this.modulo = modulo;
	}
	
	private String nome;
	private String modulo;
	
	public String getNome(){
		return nome;
	}
	public String getModulo(){
		return modulo;
	}
}
