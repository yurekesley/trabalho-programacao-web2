package cidadesui.model;

import java.math.BigDecimal;
import java.util.Date;

public class Cidade {

	private Long id;

	private String nome;
	private String uf;
	private Date dataCriacao;
	private BigDecimal populacao;
	private BigDecimal pib;

	public Cidade(Long id, String nome, String uf, Date dataCriacao, BigDecimal populacao, BigDecimal pib) {

		this.id = id;
		this.nome = nome;
		this.uf = uf;
		this.dataCriacao = dataCriacao;
		this.populacao = populacao;
		this.pib = pib;

	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public Date getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(Date dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public BigDecimal getPopulacao() {
		return populacao;
	}

	public void setPopulacao(BigDecimal populacao) {
		this.populacao = populacao;
	}

	public BigDecimal getPib() {
		return pib;
	}

	public void setPib(BigDecimal pib) {
		this.pib = pib;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}
