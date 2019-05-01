package cidadesui.repository;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.enterprise.context.ApplicationScoped;

import cidadesui.model.Cidade;

@Startup
@Singleton
@ApplicationScoped
public class CidadesRepository {

	private List<Cidade> cidades = new ArrayList<Cidade>();

	@PostConstruct
	public void init() {
		Cidade fortaleza = new Cidade(1l, "Fortaleza", "CE", new Date(), new BigDecimal(5000.000),
				new BigDecimal(1000000.000));

		Cidade caucaia = new Cidade(2l, "Caucaia", "CE", new Date(), new BigDecimal(200.000),
				new BigDecimal(200.000));

		this.cidades.addAll(Arrays.asList(fortaleza, caucaia));
	}

	public List<Cidade> getCidades() {
		return this.cidades;
	}

	public void addCidade(Cidade cidade) {
		if (cidade != null && !this.cidades.contains(cidade)) {
			this.cidades.add(cidade);
		}
	}

	public Cidade getCidadeByID(Long id) {

		Cidade find = null;

		for (Cidade cidade : this.cidades) {
			if (cidade.getId().equals(id)) {
				find = cidade;
				break;
			}
		}

		return find;
	}

}
