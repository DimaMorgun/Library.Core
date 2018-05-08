using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels.Author
{
    public class PostAuthorView
    {
        public int AuthorId { get; set; }
        public string Name { get; set; }
        public int Birthday { get; set; }
        public int Deathday { get; set; }

        public ICollection<BookPostAuthorViewItem> Books { get; set; }

        public PostAuthorView()
        {
            Books = new List<BookPostAuthorViewItem>();
        }
    }

    public class BookPostAuthorViewItem
    {
        public int BookId { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }

        public BookPostAuthorViewItem()
        {

        }
    }
}
