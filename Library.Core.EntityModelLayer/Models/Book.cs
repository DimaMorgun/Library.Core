using Library.Core.EntityModelLayer.Code;

namespace Library.Core.EntityModelLayer.Models
{
    public class Book : Entity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }
    }
}
