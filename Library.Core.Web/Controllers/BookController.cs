using System.Collections.Generic;
using System.Linq;
using Library.Core.DataAccessLayer.Contexts;
using Library.Core.EntityModelLayer.Models;
using Microsoft.AspNetCore.Mvc;

namespace Library.Core.Web.Controllers
{
  [Produces("application/json")]
  [Route("api/Book")]
  public class BookController : Controller
  {
    LibraryCoreContext _context;

    public BookController(LibraryCoreContext context)
    {
      _context = context;

      if (!_context.Books.Any())
      {
        _context.Books.Add(new Book { Name = "Book sample", YearOfPublishing = 2018 });
        _context.Books.Add(new Book { Name = "Test book", YearOfPublishing = 1997 });
        _context.SaveChanges();
      }
    }

    // GET: api/Book
    [HttpGet]
    public IEnumerable<Book> Get()
    {
      var bookList = _context.Books.ToList();
      return bookList;
    }

    // GET: api/Book/5
    [HttpGet("{id}", Name = "Get")]
    public Book Get(int id)
    {
      Book book = _context.Books.FirstOrDefault(x => x.BookId == id);
      return book;
    }

    // POST: api/Book
    [HttpPost]
    public IActionResult Post([FromBody]Book book)
    {
      if (ModelState.IsValid)
      {
        _context.Books.Add(book);
        _context.SaveChanges();
        return Ok(book);
      }
      return BadRequest(ModelState);
    }

    // PUT: api/Book/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]Book book)
    {
      if (ModelState.IsValid)
      {
        _context.Update(book);
        _context.SaveChanges();
        return Ok(book);
      }
      return BadRequest(ModelState);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      Book book = _context.Books.FirstOrDefault(x => x.BookId == id);
      if (book != null)
      {
        _context.Books.Remove(book);
        _context.SaveChanges();
      }
      return Ok(book);
    }
  }
}
