using Library.Core.EntityModelLayer.Code;

namespace Library.Core.EntityModelLayer.Models
{
    public class Magazine : Entity
    {
        public string Name { get; set; }
        public int? Number { get; set; }
        public int? YearOfPublishing { get; set; }
    }
}
