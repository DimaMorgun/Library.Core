using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels.Book
{
    public class PutBookView
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }

        public ICollection<AuthorPutBookViewItem> Authors { get; set; }
        public ICollection<PublicationHousePutBookViewItem> PublicationHouses { get; set; }

        public PutBookView()
        {
            Authors = new List<AuthorPutBookViewItem>();
            PublicationHouses = new List<PublicationHousePutBookViewItem>();
        }
    }

    public class AuthorPutBookViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Birthday { get; set; }
        public int Deathday { get; set; }

        public AuthorPutBookViewItem()
        {

        }
    }

    public class PublicationHousePutBookViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Adress { get; set; }

        public PublicationHousePutBookViewItem()
        {

        }
    }
}
