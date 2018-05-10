using Library.Core.EntityModelLayer.Models;
using Microsoft.Extensions.Configuration;

namespace Library.Core.DataAccessLayer.Repositories
{
    public class BookRepository : GenericRepository<Book>
    {
        public BookRepository(/*IConfiguration configuration*/)/* : base(configuration)*/
        {
        }
    }
}
