using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels
{
    public class AuthorsBooksViewModel
    {
        public ICollection<AuthorViewModel> Authors { get; set; }
        public ICollection<BookViewModel> AllBooks { get; set; }

        public AuthorsBooksViewModel()
        {
            Authors = new List<AuthorViewModel>();
            AllBooks = new List<BookViewModel>();
        }
    }
}
