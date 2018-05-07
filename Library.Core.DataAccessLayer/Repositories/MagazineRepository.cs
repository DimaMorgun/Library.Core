using Library.Core.EntityModelLayer.Models;

namespace Library.Core.DataAccessLayer.Repositories
{
    public class MagazineRepository : GenericRepository<Magazine>
    {
        private string _connection;

        public MagazineRepository(string connection) : base(connection)
        {
            _connection = connection;
        }
    }
}
