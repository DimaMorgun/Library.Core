using Library.Core.BysinessLogicLayer.Services;
using Library.Core.ViewModelLayer.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Library.Core.Web.Controllers
{
  [Produces("application/json")]
  [Route("api/Book")]
  public class BookController : Controller
  {
    private BookService _bookService;

    public BookController()
    {
      _bookService = new BookService();
    }

    [HttpGet]
    public BooksAuthorsPublicationHousesViewModel Get()
    {
      BooksAuthorsPublicationHousesViewModel booksAuthorsPublicationHousesViewModel = _bookService.GetAll();

      return booksAuthorsPublicationHousesViewModel;
    }

    [HttpPost]
    public IActionResult Post([FromBody]BookViewModel book)
    {
      if (ModelState.IsValid)
      {
        _bookService.Insert(book);
        return Ok(book);
      }
      return BadRequest(ModelState);
    }


    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]BookViewModel book)
    {
      if (ModelState.IsValid)
      {
        _bookService.Update(book);
        return Ok(book);
      }
      return BadRequest(ModelState);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      if (id != 0)
      {
        _bookService.Delete(id);
      }
      return Ok(id);
    }
  }
}
