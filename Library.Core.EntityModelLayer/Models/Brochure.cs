using Library.Core.EntityModelLayer.Code;

namespace Library.Core.EntityModelLayer.Models
{
    public class Brochure : Entity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string TypeOfCover { get; set; }
        public int? NumberOfPages { get; set; }
    }
}
