package cidadesui.resource;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import cidadesui.model.Jogada;
import cidadesui.service.LoteriaService;

@Path("/loteria")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class LoteriaResource {
	
	@Inject
	private LoteriaService service;
	
	@POST
	@Path("/gerar-bilhete")
	public Response gerarBilhete(Jogada jogada) {
		return Response.status(200).entity(this.service.gerarBilhete(jogada)).build();
	}
	
	@GET
	@Path("/jogar")
	public Response jogar(Jogada jogada) {
		return Response.status(200).entity(jogada).build();
	}
	
	

}
