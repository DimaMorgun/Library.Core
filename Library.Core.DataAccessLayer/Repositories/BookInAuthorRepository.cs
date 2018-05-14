using Dapper;
using Library.Core.EntityModelLayer.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace Library.Core.DataAccessLayer.Repositories
{
    public class BookInAuthorRepository : GenericRepository<BookAuthor>
    {
        private string _connection;

        public BookInAuthorRepository(IConfiguration configuration) : base(configuration)
        {
            _connection = configuration["ConnectionStrings:DefaultConnection"];
        }

        public List<BookAuthor> GetAllByBookId(int id)
        {
            var query = $"SELECT BookAuthors.*, Books.*, Authors.* FROM Books LEFT JOIN BookAuthors on BookAuthors.BookId = Books.Id LEFT JOIN Authors on Authors.Id = BookAuthors.AuthorId WHERE Books.Id = {id};";
            List<BookAuthor> bookAuthors = new List<BookAuthor>();
            using (SqlConnection connection = new SqlConnection(_connection))
            {
                bookAuthors = connection.Query<BookAuthor, Book, Author, BookAuthor>(query, (ba, book, author) =>
                {
                    ba.Book = book;
                    ba.BookId = book.Id;
                    ba.Author = author;
                    ba.AuthorId = author != null ? author.Id : 0;
                    return ba;
                }, splitOn: "Id").ToList();
            }
            return bookAuthors.ToList();
        }

        public List<BookAuthor> GetAllByAuthorId(int id)
        {
            var query = $"SELECT BookAuthors.*, Authors.*, Books.* FROM Authors LEFT JOIN BookAuthors on BookAuthors.AuthorId = Authors.Id LEFT JOIN Books on Books.Id = BookAuthors.BookId WHERE Authors.Id = {id};";
            List<BookAuthor> bookAuthors = new List<BookAuthor>();
            using (SqlConnection connection = new SqlConnection(_connection))
            {
                bookAuthors = connection.Query<BookAuthor, Author, Book, BookAuthor>(query, (ba, author, book) =>
                {
                    ba.Book = book;
                    ba.BookId = book != null ? book.Id : 0;
                    ba.Author = author;
                    ba.AuthorId = author.Id;
                    return ba;
                }, splitOn: "Id").ToList();
            }
            return bookAuthors.ToList();
        }
    }
}
