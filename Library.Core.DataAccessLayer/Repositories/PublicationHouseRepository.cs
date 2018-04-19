using Library.Core.EntityModelLayer.Models;

namespace Library.Core.DataAccessLayer.Repositories
{
    public class PublicationHouseRepository : GenericRepository<PublicationHouse>
    {
        private string _connection;

        public PublicationHouseRepository(string connection) : base(connection)
        {
            _connection = connection;
        }
    }
}
