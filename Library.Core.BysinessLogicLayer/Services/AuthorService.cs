//using AutoMapper;
//using Library.Core.DataAccessLayer.Connection;
//using Library.Core.DataAccessLayer.UnitOfWork;
//using Library.Core.EntityModelLayer.Models;
//using Library.Core.ViewModelLayer.ViewModels;
//using System.Collections.Generic;
//using System.Linq;

//namespace Library.BusinessLogicLayer.Services
//{
//    public class AuthorService
//    {
//        private UnitOfWork _unitOfWork;

//        public AuthorService()
//        {
//            _unitOfWork = new UnitOfWork(MSSQLConnection.ConnectionString);
//        }

//        public void Insert(AuthorViewModel author)
//        {
//            var authorModel = Mapper.Map<AuthorViewModel, Author>(author);
//            var bookAuthorsModel = new List<BookAuthor>();

//            var authorId = _unitOfWork.Authors.Insert(authorModel);

//            if (author.SelectedBooks != null)
//            {
//                foreach (var bookId in author.SelectedBooks)
//                {
//                    bookAuthorsModel.Add(new BookAuthor() { BookId = bookId, AuthorId = authorId });
//                }
//            }

//            _unitOfWork.BookAuthors.Insert(bookAuthorsModel);
//        }

//        public AuthorsBooksViewModel GetAll()
//        {
//            var allAuthorsBooksViewModel = new AuthorsBooksViewModel();

//            List<Author> allAuthorsModel = _unitOfWork.Authors.GetAll();
//            List<AuthorViewModel> allAuthorsViewModel = Mapper.Map<List<Author>, List<AuthorViewModel>>(allAuthorsModel);

//            List<Book> allBooksModel = _unitOfWork.Books.GetAll();
//            List<BookViewModel> allBooksViewModel = Mapper.Map<List<Book>, List<BookViewModel>>(allBooksModel);

//            foreach (var author in allAuthorsViewModel)
//            {
//                List<BookAuthor> bookAuthors = _unitOfWork.BookAuthors.GetAllByAuthorId(author.AuthorId);
//                var books = new List<BookViewModel>();
//                var selectedBooks = new List<int>();
//                var selectedBooksNames = new List<string>();
//                foreach (var bookAuthor in bookAuthors)
//                {
//                    if (bookAuthor.Book != null)
//                    {
//                        books.Add(Mapper.Map<Book, BookViewModel>(bookAuthor.Book));
//                        author.SelectedBooks.Add(bookAuthor.BookId);
//                        author.SelectedBooksNames.Add(bookAuthor.Book.Name);
//                    }
//                }
//                author.Books = books;
//            }
//            allAuthorsBooksViewModel.Authors = allAuthorsViewModel;
//            allAuthorsBooksViewModel.AllBooks = allBooksViewModel;

//            return allAuthorsBooksViewModel;
//        }

//        public void Update(AuthorViewModel author)
//        {
//            Author authorModel = _unitOfWork.Authors.Get(author.AuthorId);
//            authorModel.Name = author.Name;
//            authorModel.Birthday = author.Birthday;
//            authorModel.Deathday = author.Deathday;
//            _unitOfWork.Authors.Update(authorModel);

//            List<BookAuthor> oldBookAuthors = _unitOfWork.BookAuthors.GetAllByAuthorId(author.AuthorId);
//            var oldBookAuthorsWithRelation = oldBookAuthors.Where(x => x.BookId != 0).ToList();
//            var BooksHas = oldBookAuthorsWithRelation.Where(x => author.SelectedBooks.Contains(x.BookId)).ToList();
//            var BooksNothas = oldBookAuthorsWithRelation.Where(x => !author.SelectedBooks.Contains(x.BookId)).ToList();
//            _unitOfWork.BookAuthors.Delete(BooksNothas);
//            if (author.SelectedBooks != null)
//            {
//                List<BookAuthor> currentBookAuthors = new List<BookAuthor>();

//                foreach (var newBookId in author.SelectedBooks)
//                {
//                    if (BooksHas.FirstOrDefault(x => x.BookId == newBookId) == null)
//                    {
//                        currentBookAuthors.Add(new BookAuthor() { BookId = newBookId, AuthorId = authorModel.AuthorId });
//                    }
//                }
//                _unitOfWork.BookAuthors.Insert(currentBookAuthors);
//            }
//        }

//        public void Delete(int id)
//        {
//            var authorModel = _unitOfWork.Authors.Get(id);
//            _unitOfWork.Authors.Delete(authorModel);
//        }
//    }
//}
