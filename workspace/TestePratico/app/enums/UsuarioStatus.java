package enums;

public enum UsuarioStatus {
	ATIVO("Ativo"),
	INATIVO("Inativo");
	
	private String key;
	
	private UsuarioStatus(String key){
		this.key = key;
	}
	
	public String getKey(){
		return key;
	}

}
