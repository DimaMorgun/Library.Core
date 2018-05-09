using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels.Author
{
    public class PutAuthorView
    {
        public int AuthorId { get; set; }
        public string Name { get; set; }
        public int Birthday { get; set; }
        public int Deathday { get; set; }

        public ICollection<BookPutAuthorViewItem> Books { get; set; }

        public PutAuthorView()
        {
            Books = new List<BookPutAuthorViewItem>();
        }
    }

    public class BookPutAuthorViewItem
    {
        public int BookId { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }

        public BookPutAuthorViewItem()
        {

        }
    }
}
