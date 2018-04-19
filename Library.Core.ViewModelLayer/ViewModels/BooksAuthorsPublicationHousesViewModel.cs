using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels
{
    public class BooksAuthorsPublicationHousesViewModel
    {
        public ICollection<BookViewModel> Books { get; set; }
        public ICollection<AuthorViewModel> Authors { get; set; }
        public ICollection<PublicationHouseViewModel> PublicationHouses { get; set; }

        public BooksAuthorsPublicationHousesViewModel()
        {
            Books = new List<BookViewModel>();
            Authors = new List<AuthorViewModel>();
            PublicationHouses = new List<PublicationHouseViewModel>();
        }
    }
}
