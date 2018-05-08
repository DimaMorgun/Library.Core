using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels.Book
{
    public class PostBookView
    {
        public int BookId { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }

        public ICollection<AuthorPostBookViewItem> Authors { get; set; }
        public ICollection<PublicationHousePostBookViewItem> PublicationHouses { get; set; }

        public PostBookView()
        {
            Authors = new List<AuthorPostBookViewItem>();
            PublicationHouses = new List<PublicationHousePostBookViewItem>();
        }
    }

    public class AuthorPostBookViewItem
    {
        public int AuthorId { get; set; }
        public string Name { get; set; }
        public int Birthday { get; set; }
        public int Deathday { get; set; }

        public AuthorPostBookViewItem()
        {

        }
    }

    public class PublicationHousePostBookViewItem
    {
        public int PublicationHouseId { get; set; }
        public string Name { get; set; }
        public string Adress { get; set; }

        public PublicationHousePostBookViewItem()
        {

        }
    }
}
