using Library.Core.EntityModelLayer.Models;
using Microsoft.EntityFrameworkCore;

namespace Library.Core.DataAccessLayer.Contexts
{
    public class LibraryCoreContext : DbContext
    {
        public DbSet<Book> Books { get; set; }

        public LibraryCoreContext(DbContextOptions<LibraryCoreContext> options) : base(options)
        {
        }
    }
}
