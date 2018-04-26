//using Library.BusinessLogicLayer.Services;
//using Library.Core.ViewModelLayer.ViewModels;
//using Microsoft.AspNetCore.Mvc;

//namespace Library.Core.Web.Controllers
//{
//  [Produces("application/json")]
//  [Route("api/Author")]
//  public class AuthorController : Controller
//  {
//    private AuthorService _authorService;

//    public AuthorController()
//    {
//      _authorService = new AuthorService();
//    }

//    [HttpGet]
//    public AuthorsBooksViewModel Get()
//    {
//      AuthorsBooksViewModel authorsBooksViewModel = _authorService.GetAll();

//      return authorsBooksViewModel;
//    }

//    [HttpPost]
//    public IActionResult Post([FromBody]AuthorViewModel author)
//    {
//      if (ModelState.IsValid)
//      {
//        _authorService.Insert(author);
//        return Ok(author);
//      }
//      return BadRequest(ModelState);
//    }

//    [HttpPut("{id}")]
//    public IActionResult Put(int id, [FromBody]AuthorViewModel author)
//    {
//      if (ModelState.IsValid)
//      {
//        _authorService.Update(author);
//        return Ok(author);
//      }
//      return BadRequest(ModelState);
//    }

//    [HttpDelete("{id}")]
//    public IActionResult Delete(int id)
//    {
//      if (id != 0)
//      {
//        _authorService.Delete(id);
//      }
//      return Ok(id);
//    }
//  }
//}
