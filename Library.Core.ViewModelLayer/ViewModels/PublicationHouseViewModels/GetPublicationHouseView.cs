using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels.PublicationHouse
{
    public class GetPublicationHouseView
    {
        public ICollection<PublicationHouseGetPublicationHouseViewItem> PublicationHouses { get; set; }
        public ICollection<BookGetPublicationHouseViewItem> AllBooks { get; set; }

        public GetPublicationHouseView()
        {
            PublicationHouses = new List<PublicationHouseGetPublicationHouseViewItem>();
            AllBooks = new List<BookGetPublicationHouseViewItem>();
        }
    }

    public class PublicationHouseGetPublicationHouseViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Adress { get; set; }

        public virtual ICollection<BookGetPublicationHouseViewItem> Books { get; set; }

        public PublicationHouseGetPublicationHouseViewItem()
        {
            Books = new List<BookGetPublicationHouseViewItem>();
        }
    }

    public class BookGetPublicationHouseViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }

        public BookGetPublicationHouseViewItem()
        {

        }
    }
}
