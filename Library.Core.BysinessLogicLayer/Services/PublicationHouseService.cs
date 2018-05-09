using AutoMapper;
using Library.Core.DataAccessLayer.Repositories;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels.PublicationHouse;
using System.Collections.Generic;
using System.Linq;

namespace Library.Core.BusinessLogicLayer.Services
{
    public class PublicationHouseService
    {
        private PublicationHouseRepository _publicationHouseRepository;
        private BookRepository _bookRepository;
        private BookInPublicationHouseRepository _bookInPublicationHouseRepository;

        public PublicationHouseService()
        {
            var connection = @"data source = (LocalDb)\MSSQLLocalDB; initial catalog = LibraryCore; integrated security = True; MultipleActiveResultSets = True; App = EntityFramework";

            _bookRepository = new BookRepository(connection);
            _publicationHouseRepository = new PublicationHouseRepository(connection);
            _bookInPublicationHouseRepository = new BookInPublicationHouseRepository(connection);
        }

        public GetPublicationHouseView GetAll()
        {
            var allPublicationHousesBooksViewModel = new GetPublicationHouseView();

            List<PublicationHouse> allPublicationHousesModel = _publicationHouseRepository.GetAll();
            List<PublicationHouseGetPublicationHouseViewItem> allPublicationHousesViewModel = Mapper.Map<List<PublicationHouse>, List<PublicationHouseGetPublicationHouseViewItem>>(allPublicationHousesModel);

            List<Book> allBooksModel = _bookRepository.GetAll();
            List<BookGetPublicationHouseViewItem> allBooksViewModel = Mapper.Map<List<Book>, List<BookGetPublicationHouseViewItem>>(allBooksModel);

            foreach (var publicationHouse in allPublicationHousesViewModel)
            {
                List<BookPublicationHouse> publicationHouseBooks = _bookInPublicationHouseRepository.GetAllByPublicationHouseId(publicationHouse.PublicationHouseId);
                var books = new List<BookGetPublicationHouseViewItem>();
                foreach (var publicationHouseBook in publicationHouseBooks)
                {
                    if (publicationHouseBook.Book != null)
                    {
                        books.Add(Mapper.Map<Book, BookGetPublicationHouseViewItem>(publicationHouseBook.Book));
                    }
                }
                publicationHouse.Books = books;
            }
            allPublicationHousesBooksViewModel.PublicationHouses = allPublicationHousesViewModel;
            allPublicationHousesBooksViewModel.AllBooks = allBooksViewModel;

            return allPublicationHousesBooksViewModel;
        }

        public void Post(PostPublicationHouseView publicationHouse)
        {
            var publicationHouseModel = Mapper.Map<PostPublicationHouseView, PublicationHouse>(publicationHouse);
            var publicationHouseBooksModel = new List<BookPublicationHouse>();

            var publicationHouseId = _publicationHouseRepository.Insert(publicationHouseModel);

            foreach (var book in publicationHouse.Books)
            {
                publicationHouseBooksModel.Add(new BookPublicationHouse() { PublicationHouseId = publicationHouseId, BookId = book.BookId });
            }

            _bookInPublicationHouseRepository.Insert(publicationHouseBooksModel);
        }

        public void Put(PutPublicationHouseView publicationHouse)
        {
            PublicationHouse publicationHouseModel = _publicationHouseRepository.Get(publicationHouse.PublicationHouseId);
            publicationHouseModel.Name = publicationHouse.Name;
            publicationHouseModel.Adress = publicationHouse.Adress;
            _publicationHouseRepository.Update(publicationHouseModel);

            IEnumerable<int> SelectedBooks = publicationHouse.Books.Select(id => id.BookId);
            List<BookPublicationHouse> oldPublicationHouseBooks = _bookInPublicationHouseRepository.GetAllByPublicationHouseId(publicationHouse.PublicationHouseId);
            var oldPublicationHouseBooksWithRelation = oldPublicationHouseBooks.Where(x => x.BookId != 0).ToList();
            var BooksHas = oldPublicationHouseBooksWithRelation.Where(x => SelectedBooks.Contains(x.BookId)).ToList();
            var BooksNotHas = oldPublicationHouseBooksWithRelation.Where(x => !SelectedBooks.Contains(x.BookId)).ToList();
            _bookInPublicationHouseRepository.Delete(BooksNotHas);
            var currentPublicationHouseBooks = new List<BookPublicationHouse>();

            foreach (var newBookId in SelectedBooks)
            {
                if (BooksHas.FirstOrDefault(x => x.BookId == newBookId) == null)
                {
                    currentPublicationHouseBooks.Add(new BookPublicationHouse() { PublicationHouseId = publicationHouseModel.PublicationHouseId, BookId = newBookId });
                }
            }
            _bookInPublicationHouseRepository.Insert(currentPublicationHouseBooks);
        }

        public void Delete(int id)
        {
            PublicationHouse publicationHouseModel = _publicationHouseRepository.Get(id);
            _publicationHouseRepository.Delete(publicationHouseModel);
        }
    }
}
