﻿using AutoMapper;
using Library.Core.DataAccessLayer.Connection;
using Library.Core.DataAccessLayer.UnitOfWork;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels;
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

        public void Insert(BookViewModel book)
        {
            var bookModel = Mapper.Map<BookViewModel, Book>(book);
            var bookAuthorsModel = new List<BookAuthor>();
            var bookPublicationHousesModel = new List<BookPublicationHouse>();

            var bookId = _unitOfWork.Books.Insert(bookModel);

            if (book.SelectedAuthors != null)
            {
                foreach (var authorId in book.SelectedAuthors)
                {
                    bookAuthorsModel.Add(new BookAuthor() { BookId = bookId, AuthorId = authorId });
                }
            }
            if (book.SelectedPublicationHouses != null)
            {
                foreach (var publicationHouseId in book.SelectedPublicationHouses)
                {
                    bookPublicationHousesModel.Add(new BookPublicationHouse() { BookId = bookId, PublicationHouseId = publicationHouseId });
                }
            }

            _unitOfWork.BookAuthors.Insert(bookAuthorsModel);
            _unitOfWork.BookPublicationHouses.Insert(bookPublicationHousesModel);
        }

        public BookViewModel Get(int id)
        {
            List<BookAuthor> bookAuthors = _unitOfWork.BookAuthors.GetAllByBookId(id);
            List<BookPublicationHouse> bookPublicationHouses = _unitOfWork.BookPublicationHouses.GetAllByBookId(id);

            var book = new Book() { BookId = bookAuthors.ElementAt(0).Book.BookId, Name = bookAuthors.ElementAt(0).Book.Name, YearOfPublishing = bookAuthors.ElementAt(0).Book.YearOfPublishing };
            var authors = new List<Author>();
            var publicationHouses = new List<PublicationHouse>();
            foreach (var author in bookAuthors)
            {
                if (author.Author != null)
                {
                    authors.Add(author.Author);
                }
            }
            foreach (var publicationHouse in bookPublicationHouses)
            {
                if (publicationHouse.PublicationHouse != null)
                {
                    publicationHouses.Add(publicationHouse.PublicationHouse);
                }
            }
            var bookViewModel = Mapper.Map<Book, BookViewModel>(book);
            bookViewModel.Authors = Mapper.Map<List<Author>, List<AuthorViewModel>>(authors);
            bookViewModel.PublicationHouses = Mapper.Map<List<PublicationHouse>, List<PublicationHouseViewModel>>(publicationHouses);

            return bookViewModel;
        }

        public BooksAuthorsPublicationHousesViewModel GetAll()
        {
            var allBooksAuthorsPublicationHousesViewModel = new BooksAuthorsPublicationHousesViewModel();

            List<Book> allBooksModel = _unitOfWork.Books.GetAll();
            List<BookViewModel> allBooksViewModel = Mapper.Map<List<Book>, List<BookViewModel>>(allBooksModel);

            List<Author> allAuthorsModel = _unitOfWork.Authors.GetAll();
            List<AuthorViewModel> allAuthorsViewModel = Mapper.Map<List<Author>, List<AuthorViewModel>>(allAuthorsModel);

            List<PublicationHouse> allPublicationHousesModel = _unitOfWork.PublicationHouses.GetAll();
            List<PublicationHouseViewModel> allPublicationHousesViewModel = Mapper.Map<List<PublicationHouse>, List<PublicationHouseViewModel>>(allPublicationHousesModel);
            foreach (var book in allBooksViewModel)
            {
                List<BookAuthor> bookAuthors = _unitOfWork.BookAuthors.GetAllByBookId(book.BookId);
                var authors = new List<AuthorViewModel>();
                var selectedAuthors = new List<int>();
                var selectedAuthorsNames = new List<string>();
                foreach (var bookAuthor in bookAuthors)
                {
                    if (bookAuthor.Author != null)
                    {
                        authors.Add(Mapper.Map<Author, AuthorViewModel>(bookAuthor.Author));
                        book.SelectedAuthors.Add(bookAuthor.AuthorId);
                        book.SelectedAuthorsNames.Add(bookAuthor.Author.Name);
                    }
                }
                List<BookPublicationHouse> bookPublicationHouses = _unitOfWork.BookPublicationHouses.GetAllByBookId(book.BookId);
                var publicationHouses = new List<PublicationHouseViewModel>();
                var selectedpublicationHouses = new List<int>();
                var selectedpublicationHousesNames = new List<string>();
                foreach (var bookPublicationHouse in bookPublicationHouses)
                {
                    if (bookPublicationHouse.PublicationHouse != null)
                    {
                        publicationHouses.Add(Mapper.Map<PublicationHouse, PublicationHouseViewModel>(bookPublicationHouse.PublicationHouse));
                        selectedpublicationHouses.Add(bookPublicationHouse.PublicationHouseId);
                        selectedpublicationHousesNames.Add(bookPublicationHouse.PublicationHouse.Name);
                        book.SelectedPublicationHouses.Add(bookPublicationHouse.PublicationHouseId);
                        book.SelectedPublicationHousesNames.Add(bookPublicationHouse.PublicationHouse.Name);
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

        //public BooksAuthorsPublicationHousesViewModel GetBooksAuthorsPublicationHouses()
        //{
        //    List<Author> allAuthors = _unitOfWork.Authors.GetAll();
        //    List<PublicationHouse> allPublicationHouses = _unitOfWork.PublicationHouses.GetAll();

        //    var authorViewModel = Mapper.Map<List<Author>, List<AuthorViewModel>>(allAuthors);
        //    var publicationHousesViewModel = Mapper.Map<List<PublicationHouse>, List<PublicationHouseViewModel>>(allPublicationHouses);

        //    var booksAuthorsPublicationHousesViewModel = new BooksAuthorsPublicationHousesViewModel
        //    {
        //        Books = GetAll(),
        //        AllAuthors = authorViewModel,
        //        AllPublicationHouses = publicationHousesViewModel
        //    };

        //    return booksAuthorsPublicationHousesViewModel;
        //}

        public BookAuthorsPublicationHousesViewModel GetBookAuthorsPublicationHouses()
        {
            List<Author> allAuthors = _unitOfWork.Authors.GetAll();
            List<PublicationHouse> allPublicationHouses = _unitOfWork.PublicationHouses.GetAll();

            var authorViewModel = Mapper.Map<List<Author>, List<AuthorViewModel>>(allAuthors);
            var publicationHousesViewModel = Mapper.Map<List<PublicationHouse>, List<PublicationHouseViewModel>>(allPublicationHouses);

            var bookAuthorsPublicationHousesViewModel = new BookAuthorsPublicationHousesViewModel
            {
                Authors = authorViewModel,
                PublicationHouses = publicationHousesViewModel
            };

            return bookAuthorsPublicationHousesViewModel;
        }

        public BookAuthorsPublicationHousesViewModel GetBookAuthorsPublicationHouses(int id)
        {
            Book bookModel = _unitOfWork.Books.Get(id);
            List<BookAuthor> allBookAuthors = _unitOfWork.BookAuthors.GetAllByBookId(id);
            List<Author> allAuthors = _unitOfWork.Authors.GetAll();
            List<BookPublicationHouse> allBookPublicationHouses = _unitOfWork.BookPublicationHouses.GetAllByBookId(id);
            List<PublicationHouse> allPublicationHouses = _unitOfWork.PublicationHouses.GetAll();

            var bookViewModel = Mapper.Map<Book, BookViewModel>(bookModel);
            var bookAuthorsRelationViewModel = Mapper.Map<List<BookAuthor>, List<BookAuthorsRelationViewModel>>(allBookAuthors);
            var authorViewModel = Mapper.Map<List<Author>, List<AuthorViewModel>>(allAuthors);
            var bookPublicationHousesRelationViewModel = Mapper.Map<List<BookPublicationHouse>, List<BookPublicationHousesRelationViewModel>>(allBookPublicationHouses);
            var publicationHouseViewModel = Mapper.Map<List<PublicationHouse>, List<PublicationHouseViewModel>>(allPublicationHouses);

            var bookAuthorsViewModel = new BookAuthorsPublicationHousesViewModel
            {
                Book = bookViewModel,
                BookAuthors = bookAuthorsRelationViewModel,
                Authors = authorViewModel,
                BookPublicationHouses = bookPublicationHousesRelationViewModel,
                PublicationHouses = publicationHouseViewModel
            };
            return bookAuthorsViewModel;
        }

        public void Update(BookViewModel book)
        {
            Book bookModel = _unitOfWork.Books.Get(book.BookId);
            bookModel.Name = book.Name;
            bookModel.YearOfPublishing = book.YearOfPublishing;
            _unitOfWork.Books.Update(bookModel);


            List<BookAuthor> oldBookAuthors = _unitOfWork.BookAuthors.GetAllByBookId(book.BookId);
            var oldBookAuthorsWithRelation = oldBookAuthors.Where(x => x.AuthorId != 0).ToList();
            var AuthorsHas = oldBookAuthorsWithRelation.Where(x => book.SelectedAuthors.Contains(x.AuthorId)).ToList();
            var AuthorsNothas = oldBookAuthorsWithRelation.Where(x => !book.SelectedAuthors.Contains(x.AuthorId)).ToList();
            _unitOfWork.BookAuthors.Delete(AuthorsNothas);
            if (book.SelectedAuthors != null)
            {
                List<BookAuthor> currentBookAuthors = new List<BookAuthor>();

                foreach (var newAuthorId in book.SelectedAuthors)
                {
                    if (AuthorsHas.FirstOrDefault(x => x.AuthorId == newAuthorId) == null)
                    {
                        currentBookAuthors.Add(new BookAuthor() { BookId = bookModel.BookId, AuthorId = newAuthorId });
                    }
                }
                _unitOfWork.BookAuthors.Insert(currentBookAuthors);
            }

            List<BookPublicationHouse> oldPublicationHouses = _unitOfWork.BookPublicationHouses.GetAllByBookId(book.BookId);
            var oldBookPublicationHousesWithRelation = oldPublicationHouses.Where(x => x.PublicationHouseId != 0).ToList();
            var PublicationHousesHas = oldBookPublicationHousesWithRelation.Where(x => book.SelectedPublicationHouses.Contains(x.PublicationHouseId)).ToList();
            var PublicationHousesNothas = oldBookPublicationHousesWithRelation.Where(x => !book.SelectedPublicationHouses.Contains(x.PublicationHouseId)).ToList();
            _unitOfWork.BookPublicationHouses.Delete(PublicationHousesNothas);
            if (book.SelectedPublicationHouses != null)
            {
                List<BookPublicationHouse> currentBookPublicationHouses = new List<BookPublicationHouse>();

                foreach (var newPublicationHouseId in book.SelectedPublicationHouses)
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
