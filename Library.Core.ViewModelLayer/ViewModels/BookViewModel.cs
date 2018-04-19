using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels
{
    public class BookViewModel
    {
        public int BookId { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }

        public virtual ICollection<AuthorViewModel> AllAuthors { get; set; }
        public virtual ICollection<AuthorViewModel> Authors { get; set; }
        public ICollection<int> SelectedAuthors { get; set; }

        public virtual ICollection<PublicationHouseViewModel> AllPublicationHouses { get; set; }
        public virtual ICollection<PublicationHouseViewModel> PublicationHouses { get; set; }
        public ICollection<int> SelectedPublicationHouses { get; set; }

        public BookViewModel()
        {
            AllAuthors = new List<AuthorViewModel>();
            Authors = new List<AuthorViewModel>();
            SelectedAuthors = new List<int>();

            AllPublicationHouses = new List<PublicationHouseViewModel>();
            PublicationHouses = new List<PublicationHouseViewModel>();
            SelectedPublicationHouses = new List<int>();
        }
    }
}
