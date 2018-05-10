using Library.Core.BusinessLogicLayer.Services;
using Library.Core.ViewModelLayer.ViewModels.Author;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Library.Core.Web.Controllers
{
  [Produces("application/json")]
  [Route("api/Author")]
  public class AuthorController : Controller
  {
    private AuthorService _authorService;

    public AuthorController(IConfiguration configuration)
    {
      var connection = configuration.GetValue<string>("ConnectionStrings:DefaultConnection");

      _authorService = new AuthorService(connection);
    }

    [HttpGet]
    public GetAuthorView Get()
    {
      GetAuthorView authorsBooksViewModel = _authorService.GetAll();

      return authorsBooksViewModel;
    }

    [HttpPost]
    public IActionResult Post([FromBody]PostAuthorView author)
    {
      if (ModelState.IsValid)
      {
        _authorService.Post(author);
        return Ok(author);
      }
      return BadRequest(ModelState);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]PutAuthorView author)
    {
      if (ModelState.IsValid)
      {
        _authorService.Put(author);
        return Ok(author);
      }
      return BadRequest(ModelState);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      if (id != 0)
      {
        _authorService.Delete(id);
      }
      return Ok(id);
    }
  }
}
