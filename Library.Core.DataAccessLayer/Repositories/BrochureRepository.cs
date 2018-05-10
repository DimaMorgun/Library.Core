using Library.Core.EntityModelLayer.Models;
using Microsoft.Extensions.Configuration;

namespace Library.Core.DataAccessLayer.Repositories
{
    public class BrochureRepository : GenericRepository<Brochure>
    {
        public BrochureRepository(/*IConfiguration configuration*/)/* : base(configuration)*/
        {
        }
    }
}
