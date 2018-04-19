using Library.Core.EntityModelLayer.Models;

namespace Library.Core.DataAccessLayer.Repositories
{
    public class AuthorRepository : GenericRepository<Author>
    {
        private string _connection;

        public AuthorRepository(string connection) : base(connection)
        {
            _connection = connection;
        }
    }
}
