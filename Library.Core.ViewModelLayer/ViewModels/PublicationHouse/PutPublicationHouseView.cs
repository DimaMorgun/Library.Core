using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels.PublicationHouse
{
    public class PutPublicationHouseView
    {
        public int PublicationHouseId { get; set; }
        public string Name { get; set; }
        public string Adress { get; set; }

        public virtual ICollection<BookPutPublicationHouseViewItem> Books { get; set; }

        public PutPublicationHouseView()
        {
            Books = new List<BookPutPublicationHouseViewItem>();
        }
    }

    public class BookPutPublicationHouseViewItem
    {
        public int BookId { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }

        public BookPutPublicationHouseViewItem()
        {

        }
    }
}
