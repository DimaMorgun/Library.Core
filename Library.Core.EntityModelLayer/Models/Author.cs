using Library.Core.EntityModelLayer.Code;

namespace Library.Core.EntityModelLayer.Models
{
    public class Author : Entity
    {
        public string Name { get; set; }
        public int Birthday { get; set; }
        public int Deathday { get; set; }
    }
}
