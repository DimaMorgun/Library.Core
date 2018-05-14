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

        public BookService(BookRepository bookRepository, PublicationHouseRepository publicationHouseRepository, BookInPublicationHouseRepository bookInPublicationHouseRepository, AuthorRepository authorRepository, BookInAuthorRepository bookInAuthorRepository)
        {
            _bookRepository = bookRepository;
            _publicationHouseRepository = publicationHouseRepository;
            _bookInPublicationHouseRepository = bookInPublicationHouseRepository;
            _authorRepository = authorRepository;
            _bookInAuthorRepository = bookInAuthorRepository;
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
                List<BookAuthor> bookAuthors = _bookInAuthorRepository.GetAllByBookId(book.Id);
                var authors = new List<AuthorGetBookViewItem>();
                foreach (var bookAuthor in bookAuthors)
                {
                    if (bookAuthor.Author != null)
                    {
                        authors.Add(Mapper.Map<Author, AuthorGetBookViewItem>(bookAuthor.Author));
                    }
                }
                List<BookPublicationHouse> bookPublicationHouses = _bookInPublicationHouseRepository.GetAllByBookId(book.Id);
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
                bookAuthorsModel.Add(new BookAuthor() { BookId = bookId, AuthorId = author.Id });
            }
            foreach (var publicationHouse in book.PublicationHouses)
            {
                bookPublicationHousesModel.Add(new BookPublicationHouse() { BookId = bookId, PublicationHouseId = publicationHouse.Id });
            }

            _bookInAuthorRepository.Insert(bookAuthorsModel);
            _bookInPublicationHouseRepository.Insert(bookPublicationHousesModel);
        }

        public void Put(PutBookView book)
        {
            Book bookModel = _bookRepository.Get(book.Id);
            bookModel.Name = book.Name;
            bookModel.YearOfPublishing = book.YearOfPublishing;
            _bookRepository.Update(bookModel);

            IEnumerable<int> selectedAuthors = book.Authors.Select(id => id.Id);
            List<BookAuthor> oldBookAuthors = _bookInAuthorRepository.GetAllByBookId(book.Id);
            var oldBookAuthorsWithRelation = oldBookAuthors.Where(x => x.AuthorId != 0).ToList();
            var intersectAuthors = oldBookAuthorsWithRelation.Select(x => x.AuthorId).Intersect(selectedAuthors).ToList();
            var exceptAuthors = oldBookAuthorsWithRelation.Select(x => x.AuthorId).Except(selectedAuthors).ToList();
            _bookInAuthorRepository.Delete(oldBookAuthors.Where(x => exceptAuthors.Contains(x.AuthorId)).ToList());

            var currentBookAuthors = new List<BookAuthor>();
            foreach (var newAuthorId in selectedAuthors)
            {
                if (intersectAuthors.FirstOrDefault(x => x == newAuthorId) == 0)
                {
                    currentBookAuthors.Add(new BookAuthor() { BookId = bookModel.Id, AuthorId = newAuthorId });
                }
            }
            _bookInAuthorRepository.Insert(currentBookAuthors);

            IEnumerable<int> selectedPblicationHouses = book.PublicationHouses.Select(id => id.Id);
            List<BookPublicationHouse> oldPublicationHouses = _bookInPublicationHouseRepository.GetAllByBookId(book.Id);
            var oldBookPublicationHousesWithRelation = oldPublicationHouses.Where(x => x.PublicationHouseId != 0).ToList();
            var intersectPublicationHouses = oldBookPublicationHousesWithRelation.Select(x => x.PublicationHouseId).Intersect(selectedPblicationHouses).ToList();
            var exceptPublicationHouses = oldBookPublicationHousesWithRelation.Select(x => x.PublicationHouseId).Except(selectedPblicationHouses).ToList();
            _bookInPublicationHouseRepository.Delete(oldPublicationHouses.Where(x => exceptPublicationHouses.Contains(x.PublicationHouseId)).ToList());

            var currentBookPublicationHouses = new List<BookPublicationHouse>();
            foreach (var newPublicationHouseId in selectedPblicationHouses)
            {
                if (intersectPublicationHouses.FirstOrDefault(x => x == newPublicationHouseId) == 0)
                {
                    currentBookPublicationHouses.Add(new BookPublicationHouse() { BookId = bookModel.Id, PublicationHouseId = newPublicationHouseId });
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
