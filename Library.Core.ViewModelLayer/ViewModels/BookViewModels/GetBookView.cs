using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels.Book
{
    public class GetBookView
    {
        public ICollection<BookGetBookViewItem> Books { get; set; }
        public ICollection<AuthorGetBookViewItem> AllAuthors { get; set; }
        public ICollection<PublicationHouseGetBookViewItem> AllPublicationHouses { get; set; }

        public GetBookView()
        {
            Books = new List<BookGetBookViewItem>();
            AllAuthors = new List<AuthorGetBookViewItem>();
            AllPublicationHouses = new List<PublicationHouseGetBookViewItem>();
        }
    }

    public class BookGetBookViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }

        public ICollection<AuthorGetBookViewItem> Authors { get; set; }
        public ICollection<PublicationHouseGetBookViewItem> PublicationHouses { get; set; }

        public BookGetBookViewItem()
        {
            Authors = new List<AuthorGetBookViewItem>();
            PublicationHouses = new List<PublicationHouseGetBookViewItem>();
        }
    }

    public class AuthorGetBookViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Birthday { get; set; }
        public int Deathday { get; set; }

        public AuthorGetBookViewItem()
        {

        }
    }

    public class PublicationHouseGetBookViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Adress { get; set; }

        public PublicationHouseGetBookViewItem()
        {

        }
    }
}
