package cidadesui.service;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.enterprise.context.ApplicationScoped;

import cidadesui.model.Jogada;
import cidadesui.model.Jogo;

@Startup
@Singleton
@ApplicationScoped
public class LoteriaService {
		
	private List<Jogo> jogos = null;
		
	public List<Jogo> gerarBilhete(Jogada jogada) {
		this.jogos = new ArrayList<Jogo>();
				
		for (int i = 1; i <= jogada.getNumeroDeJogos(); i++) {
			Jogo jogo =  montarJogo(i,jogada.getNumeroDeDezenas());
			this.jogos.add(jogo);
		}
		return this.jogos;
	}

	private Jogo montarJogo(Integer codigo, Integer numeroDezenas) {
		
		Jogo jogo = new Jogo();
		
		List<Integer> numeroDojogo = new ArrayList<Integer>();
		
		for (int i = 1; i <= numeroDezenas; i++) {
			numeroDojogo.add(this.gerarNumero());
		}
		
		jogo.setCodigo(codigo);
		jogo.setNumeros(numeroDojogo);

		return jogo;
	}
	
	
	private Integer gerarNumero() {
		return  (int) (Math.random()*60+1);
	}
	
	
	
}
