package controllers;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

import models.Action;
import models.Round;
import models.Usuario;
import play.db.jpa.JPA;
import play.mvc.With;
import to.RoundTO;
import to.rounddetails.GunPreferedTO;
import to.rounddetails.RankingTO;
import to.rounddetails.RoundDetailsTO;

@With(Secure.class)
public class Rounds extends ProtectedController {

    public static void index() {
    	SimpleDateFormat out = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss"); 
    	
        List<Object[]> rounds = JPA.em().createNativeQuery("select "
        		+ "r.data as dataInicial, "
        		+ "(select r1.data from Round r1 where r1.identifier = r.identifier AND r1.status = 0) as datafinal , "
        		+ "r.identifier as identifier "
        		+ "from Round r "
        		+ "group by r.identifier").getResultList();
        
        List<RoundTO> entities = new ArrayList<RoundTO>();
        
        for (Object[] objects : rounds) {
        	entities.add(new RoundTO(Long.parseLong(objects[2].toString()), out.format((Date)objects[0]), out.format((Date)objects[1]),(Date)objects[1],(Date)objects[0]));
        }
        
        render(entities);
    }

    public static void show(java.lang.Long id) {
    	SimpleDateFormat out = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
    	SimpleDateFormat out2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	
        List<Object[]> rounds = JPA.em().createNativeQuery(" select "
        		+ " r.data as dataInicial, "
        		+ " (select r1.data from Round r1 where r1.identifier = r.identifier AND r1.status = 0) as datafinal , "
        		+ " r.identifier as identifier "
        		+ " from Round r Where r.identifier = :identifier "
        		+ " group by r.identifier").setParameter("identifier", id).getResultList();
        
        List<RoundTO> entities = new ArrayList<RoundTO>();
        
        for (Object[] objects : rounds) {
        	entities.add(new RoundTO(Long.parseLong(objects[2].toString()), out.format((Date)objects[0]), out.format((Date)objects[1]),(Date)objects[0],(Date)objects[1]));
        }
    	
        RoundTO round = entities.get(0);
        
        String datainicial = out2.format(round.dataInicialDate);
        String datafinal = out2.format(round.dataFinalDate);
        
        List<Object[]> rankings = JPA.em().createNativeQuery(""+
        		 " select " +
					" (select count(a1.action) "+
					" from TestePratico.action a1 where a1.userAction = a.userAction "+
					" AND data BETWEEN :datainicial AND :datafinal) as qtdAssasins, "+
					" a.userAction as user, "+
					" (select count(a1.action) "+
					" from TestePratico.action a1 where a1.userReceptedAction = a.userAction "+ 
					" AND data BETWEEN :datainicial AND :datafinal) as qtdDies "+
				" from "+ 
					" TestePratico.action a "+
				" where data BETWEEN :datainicial AND :datafinal "+
				" group by "+ 
					" a.userAction "+
				" UNION ( "+ 
					" select "+
						" (select count(a1.action) "+
						" from TestePratico.action a1 where a1.userAction = a.userReceptedAction "+ 
						" AND data BETWEEN :datainicial AND :datafinal) as qtdAssasins, "+
						" a.userReceptedAction as user, "+
						" (select count(a1.action) "+
						" from TestePratico.action a1 where a1.userReceptedAction = a.userReceptedAction "+ 
						" AND data BETWEEN :datainicial AND :datafinal) as qtdDies "+ 
					" from "+
						" TestePratico.action a "+
				    " where data BETWEEN :datainicial AND :datafinal "+
				    " group by "+
				    " a.userReceptedAction Order by qtdAssasins DESC) "+
        			" Order by qtdAssasins DESC").setParameter("datainicial", datainicial).setParameter("datafinal", datafinal).getResultList();
        
        List<RankingTO> rankingList = new ArrayList<RankingTO>();
        
        for (Object[] objects : rankings) {
        	
        	if(((String) objects[1]).equals("<WORLD>"))
        		continue;
        	
        	RankingTO rank = new RankingTO();
        	rank.user = (String) objects[1];
        	rank.quantityDie = Integer.parseInt(objects[2].toString());
        	rank.quantityKill = Integer.parseInt(objects[0].toString());
        	rankingList.add(rank);
        }
        
        String user = "";
        
        if(rankingList.size() > 0)
        	user = rankingList.get(0).user;
        	
        
        List<Object[]> gun = JPA.em().createNativeQuery(""
        		+ "select "
        			+ "count(a.gun) as qtd,"
        			+ "a.userAction as user, "
        			+" a.gun "
        		+ "from "
        			+ " action a "
        		+ "where "
        			+ "a.userAction <> '<WORLD>' and a.userAction = :user AND "
        			+ "a.data BETWEEN :datainicial AND :datafinal "
        		+ "group by "
        			+ "a.userAction "
        		+ "order by a.gun DESC LIMIT 1").setParameter("user", user).setParameter("datainicial", datainicial).setParameter("datafinal", datafinal).getResultList();
        
        GunPreferedTO gunPreferedTO = new GunPreferedTO();
                
        for (Object[] objects : gun) {
        	gunPreferedTO.user = (String) objects[1];
        	gunPreferedTO.qtd = Integer.parseInt(objects[0].toString());
        	gunPreferedTO.gun = (String) objects[2];
        }
        
        RoundDetailsTO details = new RoundDetailsTO();
        details.round = round;
        details.rankings = rankingList;
        details.gun = gunPreferedTO;
                
        render(details);
    }
}
