using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels.PublicationHouse
{
    public class PostPublicationHouseView
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Adress { get; set; }

        public virtual ICollection<BookPostPublicationHouseViewItem> Books { get; set; }

        public PostPublicationHouseView()
        {
            Books = new List<BookPostPublicationHouseViewItem>();
        }
    }

    public class BookPostPublicationHouseViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }

        public BookPostPublicationHouseViewItem()
        {

        }
    }
}
