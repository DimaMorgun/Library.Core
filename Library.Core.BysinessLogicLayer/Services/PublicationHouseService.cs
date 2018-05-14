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

        public PublicationHouseService(PublicationHouseRepository publicationHouseRepository, BookRepository bookRepository, BookInPublicationHouseRepository bookInPublicationHouseRepository)
        {
            _publicationHouseRepository = publicationHouseRepository;
            _bookRepository = bookRepository;
            _bookInPublicationHouseRepository = bookInPublicationHouseRepository;
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
                List<BookPublicationHouse> publicationHouseBooks = _bookInPublicationHouseRepository.GetAllByPublicationHouseId(publicationHouse.Id);
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
                publicationHouseBooksModel.Add(new BookPublicationHouse() { PublicationHouseId = publicationHouseId, BookId = book.Id });
            }

            _bookInPublicationHouseRepository.Insert(publicationHouseBooksModel);
        }

        public void Put(PutPublicationHouseView publicationHouse)
        {
            PublicationHouse publicationHouseModel = _publicationHouseRepository.Get(publicationHouse.Id);
            publicationHouseModel.Name = publicationHouse.Name;
            publicationHouseModel.Adress = publicationHouse.Adress;
            _publicationHouseRepository.Update(publicationHouseModel);

            IEnumerable<int> selectedBooks = publicationHouse.Books.Select(id => id.Id);
            List<BookPublicationHouse> oldPublicationHouseBooks = _bookInPublicationHouseRepository.GetAllByPublicationHouseId(publicationHouse.Id);
            var oldPublicationHouseBooksWithRelation = oldPublicationHouseBooks.Where(x => x.BookId != 0).ToList();
            var intersectBooks = oldPublicationHouseBooksWithRelation.Select(x => x.BookId).Intersect(selectedBooks).ToList();
            var exceptBooks = oldPublicationHouseBooksWithRelation.Select(x => x.BookId).Except(selectedBooks).ToList();
            _bookInPublicationHouseRepository.Delete(oldPublicationHouseBooks.Where(x => exceptBooks.Contains(x.BookId)).ToList());

            var currentPublicationHouseBooks = new List<BookPublicationHouse>();
            foreach (var newBookId in selectedBooks)
            {
                if (intersectBooks.FirstOrDefault(x => x == newBookId) == 0)
                {
                    currentPublicationHouseBooks.Add(new BookPublicationHouse() { PublicationHouseId = publicationHouseModel.Id, BookId = newBookId });
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
