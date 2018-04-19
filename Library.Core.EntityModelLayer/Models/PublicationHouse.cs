using Dapper.Contrib.Extensions;

namespace Library.Core.EntityModelLayer.Models
{
    public class PublicationHouse
    {
        [Key]
        public int PublicationHouseId { get; set; }
        public string Name { get; set; }
        public string Adress { get; set; }
    }
}
