using Library.Core.EntityModelLayer.Models;
using Microsoft.Extensions.Configuration;

namespace Library.Core.DataAccessLayer.Repositories
{
    public class MagazineRepository : GenericRepository<Magazine>
    {
        public MagazineRepository(IConfiguration configuration) : base(configuration)
        {
        }
    }
}
