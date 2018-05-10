using Library.Core.EntityModelLayer.Models;
using Microsoft.Extensions.Configuration;

namespace Library.Core.DataAccessLayer.Repositories
{
    public class PublicationHouseRepository : GenericRepository<PublicationHouse>
    {
        public PublicationHouseRepository(/*IConfiguration configuration*/)/* : base(configuration)*/
        {
        }
    }
}
