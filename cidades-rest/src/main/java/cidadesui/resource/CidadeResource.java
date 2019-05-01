package cidadesui.resource;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import cidadesui.model.Cidade;
import cidadesui.service.CidadesService;

@Path("/cidades")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class CidadeResource {

	@Inject
	private CidadesService service;

	@GET
	public List<Cidade> list() {
		return this.service.getCidades();
	}

	@GET
	@Path("{id : \\d+}") 
	public Response getUserById(@PathParam("id") Long id) {
	  Cidade cidade = this.service.getByID(id);		
	  return Response.status(200).entity(cidade).build();
	}
	
	
	@POST
	public Response salvar(Cidade cidade) {
		return Response.status(200).entity(cidade).build();
	}

}
