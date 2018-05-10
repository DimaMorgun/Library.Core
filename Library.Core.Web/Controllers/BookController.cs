using Library.Core.BusinessLogicLayer.Services;
using Library.Core.ViewModelLayer.ViewModels.Book;
using Microsoft.AspNetCore.Mvc;

namespace Library.Core.Web.Controllers
{
  [Produces("application/json")]
  [Route("api/Book")]
  public class BookController : Controller
  {
    private BookService _bookService;

    public BookController(BookService bookService)
    {
      _bookService = bookService;
    }

    [HttpGet]
    public GetBookView Get()
    {
      GetBookView booksAuthorsPublicationHousesViewModel = _bookService.GetAll();

      return booksAuthorsPublicationHousesViewModel;
    }

    [HttpPost]
    public IActionResult Post([FromBody]PostBookView book)
    {
      if (ModelState.IsValid)
      {
        _bookService.Post(book);
        return Ok(book);
      }
      return BadRequest(ModelState);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]PutBookView book)
    {
      if (ModelState.IsValid)
      {
        _bookService.Put(book);
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
