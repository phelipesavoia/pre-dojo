package helpers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Calendar;
import java.util.Date;

import models.Action;
import models.Round;

public class ArquiveImportHelper {

	public static void TratarLinhasImportacao(InputStream inputStream) throws IOException{
		
		BufferedReader in = new BufferedReader(new InputStreamReader(inputStream));
		String line = null;

		/*
		 	23/04/2013 15:34:22 - New match 11348965 has started
			23/04/2013 15:36:04 - Roman killed Nick using M16
			23/04/2013 15:36:33 - <WORLD> killed Nick by DROWN
			23/04/2013 15:39:22 - Match 11348965 has ended  
		 */
		
		while((line = in.readLine()) != null) {
		    String[] linha = line.split("-");
		    
		    String dataSeparacao[] = linha[0].split(" ");
		    
		    String dataSplit[] = dataSeparacao[0].split("/");		    
		    String HoraSplit[] = dataSeparacao[1].split(":");
		    
		    Calendar calendar = Calendar.getInstance();
		    System.out.println(ConvertInt(dataSplit[2])+"");
		    calendar.set(ConvertInt(dataSplit[2]),ConvertInt(dataSplit[1]),ConvertInt(dataSplit[0]),ConvertInt(HoraSplit[0]),ConvertInt(HoraSplit[1]),ConvertInt(HoraSplit[2]));
		    
			Date data = new Date(calendar.getTimeInMillis()); 
		    
		    if(linha[1].contains("has started")){
		    	Round round = new Round();
		    	round.data = data;
		    	round.identifier = Long.parseLong(linha[1].split(" ")[3]);
		    	round.status = true;
		    	round.save();
		    }
		    
		    if(linha[1].contains("has ended")){
		    	Round round = new Round();
		    	round.data = data;
		    	round.identifier = Long.parseLong(linha[1].split(" ")[2]);
		    	round.status = false;
		    	round.save();
		    }
		    
		    if(linha[1].contains("using") || linha[1].contains("by")){
		    	String linhaSplit[] = linha[1].split(" ");
		    	Action action = new Action();
		    	action.data = data;
		    	action.userAction = linhaSplit[1].trim();
		    	action.action = linhaSplit[2].trim();
		    	action.userReceptedAction = linhaSplit[3].trim();
		    	action.gun = linhaSplit[5].trim();
		    	action.save();
		    }
		}
	}
	
	public static int ConvertInt(String text){
		return Integer.parseInt(text);
	}
}
