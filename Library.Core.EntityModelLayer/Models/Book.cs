using Dapper.Contrib.Extensions;

namespace Library.Core.EntityModelLayer.Models
{
    public class Book
    {
        [Key]
        public int BookId { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }
    }
}
