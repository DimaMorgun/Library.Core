using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels
{
    public class BooksAuthorsPublicationHousesViewModel
    {
        public ICollection<BookViewModel> Books { get; set; }
        public ICollection<AuthorViewModel> AllAuthors { get; set; }
        public ICollection<PublicationHouseViewModel> AllPublicationHouses { get; set; }

        public BooksAuthorsPublicationHousesViewModel()
        {
            Books = new List<BookViewModel>();
            AllAuthors = new List<AuthorViewModel>();
            AllPublicationHouses = new List<PublicationHouseViewModel>();
        }
    }
}
