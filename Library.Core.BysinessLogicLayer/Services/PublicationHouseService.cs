using AutoMapper;
using Library.Core.DataAccessLayer.Connection;
using Library.Core.DataAccessLayer.UnitOfWork;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels.PublicationHouse;
using System.Collections.Generic;
using System.Linq;

namespace Library.Core.BusinessLogicLayer.Services
{
    public class PublicationHouseService
    {
        private UnitOfWork _unitOfWork;

        public PublicationHouseService()
        {
            _unitOfWork = new UnitOfWork(MSSQLConnection.ConnectionString);
        }

        public GetPublicationHouseView GetAll()
        {
            var allPublicationHousesBooksViewModel = new GetPublicationHouseView();

            List<PublicationHouse> allPublicationHousesModel = _unitOfWork.PublicationHouses.GetAll();
            List<PublicationHouseGetPublicationHouseViewItem> allPublicationHousesViewModel = Mapper.Map<List<PublicationHouse>, List<PublicationHouseGetPublicationHouseViewItem>>(allPublicationHousesModel);

            List<Book> allBooksModel = _unitOfWork.Books.GetAll();
            List<BookGetPublicationHouseViewItem> allBooksViewModel = Mapper.Map<List<Book>, List<BookGetPublicationHouseViewItem>>(allBooksModel);

            foreach (var publicationHouse in allPublicationHousesViewModel)
            {
                List<BookPublicationHouse> publicationHouseBooks = _unitOfWork.BookPublicationHouses.GetAllByPublicationHouseId(publicationHouse.PublicationHouseId);
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

            var publicationHouseId = _unitOfWork.PublicationHouses.Insert(publicationHouseModel);

            foreach (var book in publicationHouse.Books)
            {
                publicationHouseBooksModel.Add(new BookPublicationHouse() { PublicationHouseId = publicationHouseId, BookId = book.BookId });
            }

            _unitOfWork.BookPublicationHouses.Insert(publicationHouseBooksModel);
        }

        public void Put(PutPublicationHouseView publicationHouse)
        {
            PublicationHouse publicationHouseModel = _unitOfWork.PublicationHouses.Get(publicationHouse.PublicationHouseId);
            publicationHouseModel.Name = publicationHouse.Name;
            publicationHouseModel.Adress = publicationHouse.Adress;
            _unitOfWork.PublicationHouses.Update(publicationHouseModel);

            IEnumerable<int> SelectedBooks = publicationHouse.Books.Select(id => id.BookId);
            List<BookPublicationHouse> oldPublicationHouseBooks = _unitOfWork.BookPublicationHouses.GetAllByPublicationHouseId(publicationHouse.PublicationHouseId);
            var oldPublicationHouseBooksWithRelation = oldPublicationHouseBooks.Where(x => x.BookId != 0).ToList();
            var BooksHas = oldPublicationHouseBooksWithRelation.Where(x => SelectedBooks.Contains(x.BookId)).ToList();
            var BooksNotHas = oldPublicationHouseBooksWithRelation.Where(x => !SelectedBooks.Contains(x.BookId)).ToList();
            _unitOfWork.BookPublicationHouses.Delete(BooksNotHas);
            var currentPublicationHouseBooks = new List<BookPublicationHouse>();

            foreach (var newBookId in SelectedBooks)
            {
                if (BooksHas.FirstOrDefault(x => x.BookId == newBookId) == null)
                {
                    currentPublicationHouseBooks.Add(new BookPublicationHouse() { PublicationHouseId = publicationHouseModel.PublicationHouseId, BookId = newBookId });
                }
            }
            _unitOfWork.BookPublicationHouses.Insert(currentPublicationHouseBooks);
        }

        public void Delete(int id)
        {
            PublicationHouse publicationHouseModel = _unitOfWork.PublicationHouses.Get(id);
            _unitOfWork.PublicationHouses.Delete(publicationHouseModel);
        }
    }
}
