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
	
	public Cidade getByID(Long id) {
		return this.repository.getCidadeByID(id);
	}
	
	

}
