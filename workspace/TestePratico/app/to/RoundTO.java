package to;

import java.io.Serializable;
import java.util.Date;

public class RoundTO implements Serializable{

	public long identifier;
	public String dataInicial;
	public String dataFinal;	
	
	public Date dataInicialDate;
	public Date dataFinalDate;	
	
	public RoundTO(long identifier,String dataFinal, String dataInicial,Date dataInicialDate, Date dataFinalDate){
		this.identifier = identifier;
		this.dataFinal = dataFinal;
		this.dataInicial = dataInicial;
		this.dataFinalDate = dataFinalDate;
		this.dataInicialDate = dataInicialDate;
	}
}
