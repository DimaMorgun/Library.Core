using System.Collections.Generic;
using System.Linq;
using Library.Core.DataAccessLayer.Contexts;
using Library.Core.EntityModelLayer.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

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
      return _context.Books;
    }

    // GET: api/Book/5
    [HttpGet("{id}", Name = "Get")]
    public string Get(int id)
    {
      return "value";
    }

    // POST: api/Book
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT: api/Book/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
