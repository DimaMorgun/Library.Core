using Library.Core.EntityModelLayer.Code;

namespace Library.Core.EntityModelLayer.Models
{
    public class Book : Entity
    {
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }
    }
}
