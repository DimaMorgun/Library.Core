using Library.Core.EntityModelLayer.Models;
using Microsoft.EntityFrameworkCore;

namespace Library.Core.DataAccessLayer.Contexts
{
    public class LibraryCoreContext : DbContext
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<BookAuthor> BookAuthors { get; set; }
        public DbSet<PublicationHouse> PublicationHouses { get; set; }
        public DbSet<BookPublicationHouse> BookPublicationHouses { get; set; }

        public LibraryCoreContext(DbContextOptions<LibraryCoreContext> options) : base(options)
        {
        }
    }
}
