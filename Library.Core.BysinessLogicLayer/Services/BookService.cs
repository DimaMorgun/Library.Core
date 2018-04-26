using AutoMapper;
using Library.Core.DataAccessLayer.Connection;
using Library.Core.DataAccessLayer.UnitOfWork;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels.Book;
using System.Collections.Generic;
using System.Linq;

namespace Library.Core.BysinessLogicLayer.Services
{
    public class BookService
    {
        private UnitOfWork _unitOfWork;

        public BookService()
        {
            _unitOfWork = new UnitOfWork(MSSQLConnection.ConnectionString);
        }

        public GetBookView GetAll()
        {
            var allBooksAuthorsPublicationHousesViewModel = new GetBookView();

            List<Book> allBooksModel = _unitOfWork.Books.GetAll();
            List<BookGetBookViewItem> allBooksViewModel = Mapper.Map<List<Book>, List<BookGetBookViewItem>>(allBooksModel);

            List<Author> allAuthorsModel = _unitOfWork.Authors.GetAll();
            List<AuthorGetBookViewItem> allAuthorsViewModel = Mapper.Map<List<Author>, List<AuthorGetBookViewItem>>(allAuthorsModel);

            List<PublicationHouse> allPublicationHousesModel = _unitOfWork.PublicationHouses.GetAll();
            List<PublicationHouseGetBookViewItem> allPublicationHousesViewModel = Mapper.Map<List<PublicationHouse>, List<PublicationHouseGetBookViewItem>>(allPublicationHousesModel);
            foreach (var book in allBooksViewModel)
            {
                List<BookAuthor> bookAuthors = _unitOfWork.BookAuthors.GetAllByBookId(book.BookId);
                var authors = new List<AuthorGetBookViewItem>();
                foreach (var bookAuthor in bookAuthors)
                {
                    if (bookAuthor.Author != null)
                    {
                        authors.Add(Mapper.Map<Author, AuthorGetBookViewItem>(bookAuthor.Author));
                    }
                }
                List<BookPublicationHouse> bookPublicationHouses = _unitOfWork.BookPublicationHouses.GetAllByBookId(book.BookId);
                var publicationHouses = new List<PublicationHouseGetBookViewItem>();
                foreach (var bookPublicationHouse in bookPublicationHouses)
                {
                    if (bookPublicationHouse.PublicationHouse != null)
                    {
                        publicationHouses.Add(Mapper.Map<PublicationHouse, PublicationHouseGetBookViewItem>(bookPublicationHouse.PublicationHouse));
                    }
                }
                book.Authors = authors;
                book.PublicationHouses = publicationHouses;
            }
            allBooksAuthorsPublicationHousesViewModel.Books = allBooksViewModel;
            allBooksAuthorsPublicationHousesViewModel.AllAuthors = allAuthorsViewModel;
            allBooksAuthorsPublicationHousesViewModel.AllPublicationHouses = allPublicationHousesViewModel;

            return allBooksAuthorsPublicationHousesViewModel;
        }

        public void Post(PostBookView book)
        {
            var bookModel = Mapper.Map<PostBookView, Book>(book);
            var bookAuthorsModel = new List<BookAuthor>();
            var bookPublicationHousesModel = new List<BookPublicationHouse>();

            var bookId = _unitOfWork.Books.Insert(bookModel);

            if (book.Authors != null)
            {
                foreach (var author in book.Authors)
                {
                    bookAuthorsModel.Add(new BookAuthor() { BookId = bookId, AuthorId = author.AuthorId });
                }
            }
            if (book.PublicationHouses != null)
            {
                foreach (var publicationHouse in book.PublicationHouses)
                {
                    bookPublicationHousesModel.Add(new BookPublicationHouse() { BookId = bookId, PublicationHouseId = publicationHouse.PublicationHouseId });
                }
            }

            _unitOfWork.BookAuthors.Insert(bookAuthorsModel);
            _unitOfWork.BookPublicationHouses.Insert(bookPublicationHousesModel);
        }

        public void Put(PutBookView book)
        {
            Book bookModel = _unitOfWork.Books.Get(book.BookId);
            bookModel.Name = book.Name;
            bookModel.YearOfPublishing = book.YearOfPublishing;
            _unitOfWork.Books.Update(bookModel);

            IEnumerable<int> SelectedAuthors = book.Authors.Select(id => id.AuthorId);

            List<BookAuthor> oldBookAuthors = _unitOfWork.BookAuthors.GetAllByBookId(book.BookId);
            var oldBookAuthorsWithRelation = oldBookAuthors.Where(x => x.AuthorId != 0).ToList();
            var AuthorsHas = oldBookAuthorsWithRelation.Where(x => SelectedAuthors.Contains(x.AuthorId)).ToList();
            var AuthorsNothas = oldBookAuthorsWithRelation.Where(x => !SelectedAuthors.Contains(x.AuthorId)).ToList();
            _unitOfWork.BookAuthors.Delete(AuthorsNothas);
            if (SelectedAuthors != null)
            {
                List<BookAuthor> currentBookAuthors = new List<BookAuthor>();

                foreach (var newAuthorId in SelectedAuthors)
                {
                    if (AuthorsHas.FirstOrDefault(x => x.AuthorId == newAuthorId) == null)
                    {
                        currentBookAuthors.Add(new BookAuthor() { BookId = bookModel.BookId, AuthorId = newAuthorId });
                    }
                }
                _unitOfWork.BookAuthors.Insert(currentBookAuthors);
            }

            IEnumerable<int> SelectedPblicationHouses = book.PublicationHouses.Select(id => id.PublicationHouseId);

            List<BookPublicationHouse> oldPublicationHouses = _unitOfWork.BookPublicationHouses.GetAllByBookId(book.BookId);
            var oldBookPublicationHousesWithRelation = oldPublicationHouses.Where(x => x.PublicationHouseId != 0).ToList();
            var PublicationHousesHas = oldBookPublicationHousesWithRelation.Where(x => SelectedPblicationHouses.Contains(x.PublicationHouseId)).ToList();
            var PublicationHousesNothas = oldBookPublicationHousesWithRelation.Where(x => !SelectedPblicationHouses.Contains(x.PublicationHouseId)).ToList();
            _unitOfWork.BookPublicationHouses.Delete(PublicationHousesNothas);
            if (SelectedPblicationHouses != null)
            {
                List<BookPublicationHouse> currentBookPublicationHouses = new List<BookPublicationHouse>();

                foreach (var newPublicationHouseId in SelectedPblicationHouses)
                {
                    if (PublicationHousesHas.FirstOrDefault(x => x.PublicationHouseId == newPublicationHouseId) == null)
                    {
                        currentBookPublicationHouses.Add(new BookPublicationHouse() { BookId = bookModel.BookId, PublicationHouseId = newPublicationHouseId });
                    }
                }
                _unitOfWork.BookPublicationHouses.Insert(currentBookPublicationHouses);
            }
        }

        public void Delete(int id)
        {
            var bookModel = _unitOfWork.Books.Get(id);
            _unitOfWork.Books.Delete(bookModel);
        }
    }
}
