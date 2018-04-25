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

    // GET: api/Book
    [HttpGet]
    public BooksAuthorsPublicationHousesViewModel Get()
    {
      BooksAuthorsPublicationHousesViewModel allBooks = _bookService.GetAll();

      return allBooks;
    }

    // POST: api/Book
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

    // PUT: api/Book/5
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

    // DELETE: api/ApiWithActions/5
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
