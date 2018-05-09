using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels.Author
{
    public class GetAuthorView
    {
        public ICollection<AuthorGetAuthorViewItem> Authors { get; set; }
        public ICollection<BookGetAuthorViewItem> AllBooks { get; set; }

        public GetAuthorView()
        {
            Authors = new List<AuthorGetAuthorViewItem>();
            AllBooks = new List<BookGetAuthorViewItem>();
        }
    }

    public class AuthorGetAuthorViewItem
    {
        public int AuthorId { get; set; }
        public string Name { get; set; }
        public int Birthday { get; set; }
        public int Deathday { get; set; }

        public ICollection<BookGetAuthorViewItem> Books { get; set; }

        public AuthorGetAuthorViewItem()
        {
            Books = new List<BookGetAuthorViewItem>();
        }
    }

    public class BookGetAuthorViewItem
    {
        public int BookId { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }

        public BookGetAuthorViewItem()
        {

        }
    }
}
