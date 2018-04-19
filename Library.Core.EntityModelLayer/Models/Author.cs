using Dapper.Contrib.Extensions;

namespace Library.Core.EntityModelLayer.Models
{
    public class Author
    {
        [Key]
        public int AuthorId { get; set; }
        public string Name { get; set; }
        public int Birthday { get; set; }
        public int Deathday { get; set; }
    }
}
