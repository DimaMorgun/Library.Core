using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels
{
    public class BookViewModel
    {
        public int BookId { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }

        //public ICollection<AuthorViewModel> AllAuthors { get; set; }
        public ICollection<AuthorViewModel> Authors { get; set; }
        public ICollection<int> SelectedAuthors { get; set; }
        public ICollection<string> SelectedAuthorsNames { get; set; }

        //public ICollection<PublicationHouseViewModel> AllPublicationHouses { get; set; }
        public ICollection<PublicationHouseViewModel> PublicationHouses { get; set; }
        public ICollection<int> SelectedPublicationHouses { get; set; }
        public ICollection<string> SelectedPublicationHousesNames { get; set; }

        public BookViewModel()
        {
            //AllAuthors = new List<AuthorViewModel>();
            Authors = new List<AuthorViewModel>();
            SelectedAuthors = new List<int>();
            SelectedAuthorsNames = new List<string>();

            //AllPublicationHouses = new List<PublicationHouseViewModel>();
            PublicationHouses = new List<PublicationHouseViewModel>();
            SelectedPublicationHouses = new List<int>();
            SelectedPublicationHousesNames = new List<string>();
        }
    }
}
