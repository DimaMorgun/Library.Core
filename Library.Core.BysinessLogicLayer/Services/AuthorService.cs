using AutoMapper;
using Library.Core.DataAccessLayer.Connection;
using Library.Core.DataAccessLayer.UnitOfWork;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels.Author;
using System.Collections.Generic;
using System.Linq;

namespace Library.Core.BusinessLogicLayer.Services
{
    public class AuthorService
    {
        private UnitOfWork _unitOfWork;

        public AuthorService()
        {
            _unitOfWork = new UnitOfWork(MSSQLConnection.ConnectionString);
        }

        public GetAuthorView GetAll()
        {
            var allAuthorsBooksViewModel = new GetAuthorView();

            List<Author> allAuthorsModel = _unitOfWork.Authors.GetAll();
            List<AuthorGetAuthorViewItem> allAuthorsViewModel = Mapper.Map<List<Author>, List<AuthorGetAuthorViewItem>>(allAuthorsModel);

            List<Book> allBooksModel = _unitOfWork.Books.GetAll();
            List<BookGetAuthorViewItem> allBooksViewModel = Mapper.Map<List<Book>, List<BookGetAuthorViewItem>>(allBooksModel);

            foreach (var author in allAuthorsViewModel)
            {
                List<BookAuthor> authorBooks = _unitOfWork.BookAuthors.GetAllByAuthorId(author.AuthorId);
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

            var authorId = _unitOfWork.Authors.Insert(authorModel);

            foreach (var book in author.Books)
            {
                authorBooksModel.Add(new BookAuthor() { AuthorId = authorId, BookId = book.BookId });
            }

            _unitOfWork.BookAuthors.Insert(authorBooksModel);
        }

        public void Put(PutAuthorView author)
        {
            Author authorModel = _unitOfWork.Authors.Get(author.AuthorId);
            authorModel.Name = author.Name;
            authorModel.Birthday = author.Birthday;
            authorModel.Deathday = author.Deathday;
            _unitOfWork.Authors.Update(authorModel);

            IEnumerable<int> SelectedBooks = author.Books.Select(id => id.BookId);
            List<BookAuthor> oldAuthorBooks = _unitOfWork.BookAuthors.GetAllByAuthorId(author.AuthorId);
            var oldAuthorBooksWithRelation = oldAuthorBooks.Where(x => x.BookId != 0).ToList();
            var BooksHas = oldAuthorBooksWithRelation.Where(x => SelectedBooks.Contains(x.BookId)).ToList();
            var BooksNotHas = oldAuthorBooksWithRelation.Where(x => !SelectedBooks.Contains(x.BookId)).ToList();
            _unitOfWork.BookAuthors.Delete(BooksNotHas);
            var currentAuthorBooks = new List<BookAuthor>();

            foreach (var newBookId in SelectedBooks)
            {
                if (BooksHas.FirstOrDefault(x => x.BookId == newBookId) == null)
                {
                    currentAuthorBooks.Add(new BookAuthor() { AuthorId = authorModel.AuthorId, BookId = newBookId});
                }
            }
            _unitOfWork.BookAuthors.Insert(currentAuthorBooks);
        }

        public void Delete(int id)
        {
            Author authorModel = _unitOfWork.Authors.Get(id);
            _unitOfWork.Authors.Delete(authorModel);
        }
    }
}
