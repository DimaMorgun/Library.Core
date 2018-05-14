using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels.Author
{
    public class PutAuthorView
    {
        public int Id { get; set; }
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
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }

        public BookPutAuthorViewItem()
        {

        }
    }
}
