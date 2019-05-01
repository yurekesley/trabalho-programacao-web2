package cidadesui.model;

import java.util.List;

public class Jogo {
	
	private Integer codigo;
	private List<Integer> numeros;
	
	public Jogo () {}
	
	public Jogo(Integer codigo, List<Integer> numeros ) {
			this.codigo = codigo;
			this.numeros = numeros;
	}
	
	public Integer getCodigo() {
		return codigo;
	}
	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public List<Integer> getNumeros() {
		return numeros;
	}

	public void setNumeros(List<Integer> numeros) {
		this.numeros = numeros;
	}
	
	
	
	

}
