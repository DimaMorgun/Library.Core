using Library.Core.EntityModelLayer.Models;
using Microsoft.Extensions.Configuration;

namespace Library.Core.DataAccessLayer.Repositories
{
    public class AuthorRepository : GenericRepository<Author>
    {
        public AuthorRepository(/*IConfiguration configuration*/)/* : base(configuration)*/
        {
        }
    }
}
