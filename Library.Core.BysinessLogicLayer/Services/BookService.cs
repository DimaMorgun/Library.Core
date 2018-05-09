using AutoMapper;
using Library.Core.DataAccessLayer.Repositories;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels.Book;
using System.Collections.Generic;
using System.Linq;

namespace Library.Core.BusinessLogicLayer.Services
{
    public class BookService
    {
        private BookRepository _bookRepository;
        private PublicationHouseRepository _publicationHouseRepository;
        private BookInPublicationHouseRepository _bookInPublicationHouseRepository;
        private AuthorRepository _authorRepository;
        private BookInAuthorRepository _bookInAuthorRepository;

        public BookService()
        {
            var connection = @"data source = (LocalDb)\MSSQLLocalDB; initial catalog = LibraryCore; integrated security = True; MultipleActiveResultSets = True; App = EntityFramework";

            _bookRepository = new BookRepository(connection);
            _publicationHouseRepository = new PublicationHouseRepository(connection);
            _bookInPublicationHouseRepository = new BookInPublicationHouseRepository(connection);
            _authorRepository = new AuthorRepository(connection);
            _bookInAuthorRepository = new BookInAuthorRepository(connection);
        }

        public GetBookView GetAll()
        {
            var allBooksAuthorsPublicationHousesViewModel = new GetBookView();

            List<Book> allBooksModel = _bookRepository.GetAll();
            List<BookGetBookViewItem> allBooksViewModel = Mapper.Map<List<Book>, List<BookGetBookViewItem>>(allBooksModel);

            List<Author> allAuthorsModel = _authorRepository.GetAll();
            List<AuthorGetBookViewItem> allAuthorsViewModel = Mapper.Map<List<Author>, List<AuthorGetBookViewItem>>(allAuthorsModel);

            List<PublicationHouse> allPublicationHousesModel = _publicationHouseRepository.GetAll();
            List<PublicationHouseGetBookViewItem> allPublicationHousesViewModel = Mapper.Map<List<PublicationHouse>, List<PublicationHouseGetBookViewItem>>(allPublicationHousesModel);
            foreach (var book in allBooksViewModel)
            {
                List<BookAuthor> bookAuthors = _bookInAuthorRepository.GetAllByBookId(book.BookId);
                var authors = new List<AuthorGetBookViewItem>();
                foreach (var bookAuthor in bookAuthors)
                {
                    if (bookAuthor.Author != null)
                    {
                        authors.Add(Mapper.Map<Author, AuthorGetBookViewItem>(bookAuthor.Author));
                    }
                }
                List<BookPublicationHouse> bookPublicationHouses = _bookInPublicationHouseRepository.GetAllByBookId(book.BookId);
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

            var bookId = _bookRepository.Insert(bookModel);

            foreach (var author in book.Authors)
            {
                bookAuthorsModel.Add(new BookAuthor() { BookId = bookId, AuthorId = author.AuthorId });
            }
            foreach (var publicationHouse in book.PublicationHouses)
            {
                bookPublicationHousesModel.Add(new BookPublicationHouse() { BookId = bookId, PublicationHouseId = publicationHouse.PublicationHouseId });
            }

            _bookInAuthorRepository.Insert(bookAuthorsModel);
            _bookInPublicationHouseRepository.Insert(bookPublicationHousesModel);
        }

        public void Put(PutBookView book)
        {
            Book bookModel = _bookRepository.Get(book.BookId);
            bookModel.Name = book.Name;
            bookModel.YearOfPublishing = book.YearOfPublishing;
            _bookRepository.Update(bookModel);

            IEnumerable<int> SelectedAuthors = book.Authors.Select(id => id.AuthorId);
            List<BookAuthor> oldBookAuthors = _bookInAuthorRepository.GetAllByBookId(book.BookId);
            var oldBookAuthorsWithRelation = oldBookAuthors.Where(x => x.AuthorId != 0).ToList();
            var AuthorsHas = oldBookAuthorsWithRelation.Where(x => SelectedAuthors.Contains(x.AuthorId)).ToList();
            var AuthorsNotHas = oldBookAuthorsWithRelation.Where(x => !SelectedAuthors.Contains(x.AuthorId)).ToList();
            _bookInAuthorRepository.Delete(AuthorsNotHas);
            var currentBookAuthors = new List<BookAuthor>();

            foreach (var newAuthorId in SelectedAuthors)
            {
                if (AuthorsHas.FirstOrDefault(x => x.AuthorId == newAuthorId) == null)
                {
                    currentBookAuthors.Add(new BookAuthor() { BookId = bookModel.BookId, AuthorId = newAuthorId });
                }
            }
            _bookInAuthorRepository.Insert(currentBookAuthors);

            IEnumerable<int> SelectedPblicationHouses = book.PublicationHouses.Select(id => id.PublicationHouseId);
            List<BookPublicationHouse> oldPublicationHouses = _bookInPublicationHouseRepository.GetAllByBookId(book.BookId);
            var oldBookPublicationHousesWithRelation = oldPublicationHouses.Where(x => x.PublicationHouseId != 0).ToList();
            var PublicationHousesHas = oldBookPublicationHousesWithRelation.Where(x => SelectedPblicationHouses.Contains(x.PublicationHouseId)).ToList();
            var PublicationHousesNothas = oldBookPublicationHousesWithRelation.Where(x => !SelectedPblicationHouses.Contains(x.PublicationHouseId)).ToList();
            _bookInPublicationHouseRepository.Delete(PublicationHousesNothas);
            var currentBookPublicationHouses = new List<BookPublicationHouse>();

            foreach (var newPublicationHouseId in SelectedPblicationHouses)
            {
                if (PublicationHousesHas.FirstOrDefault(x => x.PublicationHouseId == newPublicationHouseId) == null)
                {
                    currentBookPublicationHouses.Add(new BookPublicationHouse() { BookId = bookModel.BookId, PublicationHouseId = newPublicationHouseId });
                }
            }
            _bookInPublicationHouseRepository.Insert(currentBookPublicationHouses);
        }

        public void Delete(int id)
        {
            Book bookModel = _bookRepository.Get(id);
            _bookRepository.Delete(bookModel);
        }
    }
}
