using Dapper.Contrib.Extensions;
using Library.Core.EntityModelLayer.Code;

namespace Library.Core.EntityModelLayer.Models
{
    public class BookAuthor : Entity
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        [Write(false)]
        public virtual Book Book { get; set; }
        public int AuthorId { get; set; }
        [Write(false)]
        public virtual Author Author { get; set; }
    }
}
