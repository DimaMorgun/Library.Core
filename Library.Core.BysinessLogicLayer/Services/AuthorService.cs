using AutoMapper;
using Library.Core.DataAccessLayer.Repositories;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels.Author;
using System.Collections.Generic;
using System.Linq;

namespace Library.Core.BusinessLogicLayer.Services
{
    public class AuthorService
    {
        private AuthorRepository _authorRepository;
        private BookRepository _bookRepository;
        private BookInAuthorRepository _bookInAuthorRepository;

        public AuthorService(AuthorRepository authorRepository, BookRepository bookRepository, BookInAuthorRepository bookInAuthorRepository)
        {
            _authorRepository = authorRepository;
            _bookRepository = bookRepository;
            _bookInAuthorRepository = bookInAuthorRepository;
        }

        public GetAuthorView GetAll()
        {
            var allAuthorsBooksViewModel = new GetAuthorView();

            List<Author> allAuthorsModel = _authorRepository.GetAll();
            List<AuthorGetAuthorViewItem> allAuthorsViewModel = Mapper.Map<List<Author>, List<AuthorGetAuthorViewItem>>(allAuthorsModel);

            List<Book> allBooksModel = _bookRepository.GetAll();
            List<BookGetAuthorViewItem> allBooksViewModel = Mapper.Map<List<Book>, List<BookGetAuthorViewItem>>(allBooksModel);

            foreach (var author in allAuthorsViewModel)
            {
                List<BookAuthor> authorBooks = _bookInAuthorRepository.GetAllByAuthorId(author.Id);
                var books = new List<BookGetAuthorViewItem>();
                foreach (var authorBook in authorBooks)
                {
                    if (authorBook.Book != null)
                    {
                        books.Add(Mapper.Map<Book, BookGetAuthorViewItem>(authorBook.Book));
                    }
                }
                author.Books = books;
            }
            allAuthorsBooksViewModel.Authors = allAuthorsViewModel;
            allAuthorsBooksViewModel.AllBooks = allBooksViewModel;

            return allAuthorsBooksViewModel;
        }

        public void Post(PostAuthorView author)
        {
            var authorModel = Mapper.Map<PostAuthorView, Author>(author);
            var authorBooksModel = new List<BookAuthor>();

            var authorId = _authorRepository.Insert(authorModel);

            foreach (var book in author.Books)
            {
                authorBooksModel.Add(new BookAuthor() { AuthorId = authorId, BookId = book.Id });
            }

            _bookInAuthorRepository.Insert(authorBooksModel);
        }

        public void Put(PutAuthorView author)
        {
            Author authorModel = _authorRepository.Get(author.Id);
            authorModel.Name = author.Name;
            authorModel.Birthday = author.Birthday;
            authorModel.Deathday = author.Deathday;
            _authorRepository.Update(authorModel);

            IEnumerable<int> selectedBooks = author.Books.Select(id => id.Id);
            List<BookAuthor> oldAuthorBooks = _bookInAuthorRepository.GetAllByAuthorId(author.Id);
            var oldAuthorBooksWithRelation = oldAuthorBooks.Where(x => x.BookId != 0).ToList();
            var intersectBooks = oldAuthorBooksWithRelation.Select(x => x.BookId).Intersect(selectedBooks).ToList();
            var exceptBooks = oldAuthorBooksWithRelation.Select(x => x.BookId).Except(selectedBooks).ToList();
            _bookInAuthorRepository.Delete(oldAuthorBooks.Where(x => exceptBooks.Contains(x.BookId)).ToList());

            var currentAuthorBooks = new List<BookAuthor>();
            foreach (var newBookId in selectedBooks)
            {
                if (intersectBooks.FirstOrDefault(x => x == newBookId) == 0)
                {
                    currentAuthorBooks.Add(new BookAuthor() { AuthorId = authorModel.Id, BookId = newBookId});
                }
            }
            _bookInAuthorRepository.Insert(currentAuthorBooks);
        }

        public void Delete(int id)
        {
            Author authorModel = _authorRepository.Get(id);
            _authorRepository.Delete(authorModel);
        }
    }
}
