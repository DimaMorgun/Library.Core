using Dapper.Contrib.Extensions;
using Library.Core.EntityModelLayer.Code;

namespace Library.Core.EntityModelLayer.Models
{
    public class BookPublicationHouse : Entity
    {
        public int BookId { get; set; }
        [Write(false)]
        public virtual Book Book { get; set; }
        public int PublicationHouseId { get; set; }
        [Write(false)]
        public virtual PublicationHouse PublicationHouse { get; set; }
    }
}
