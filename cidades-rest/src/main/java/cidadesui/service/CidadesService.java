package cidadesui.service;

import java.util.List;

import javax.ejb.Stateful;
import javax.enterprise.context.SessionScoped;
import javax.inject.Inject;

import cidadesui.model.Cidade;
import cidadesui.repository.CidadesRepository;

@Stateful
@SessionScoped
public class CidadesService {
	
	@Inject
	private CidadesRepository repository;
	
	public List<Cidade> getCidades() {
		return this.repository.getCidades();
	}
	
	public Cidade buscarPorID(Long id) {
		return this.repository.buscarPorID(id);
	}

	public void salvar(Cidade cidade) {
		 this.repository.addCidade(cidade);		
	}
	
	public void deletar(Long id) {
		this.repository.deletar(id);
	}

	public void atualizar(Cidade cidade) {
		this.repository.atualizar(cidade);
	}

}
