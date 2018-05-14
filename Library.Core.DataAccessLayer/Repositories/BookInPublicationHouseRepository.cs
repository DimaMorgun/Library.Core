using Dapper;
using Library.Core.EntityModelLayer.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace Library.Core.DataAccessLayer.Repositories
{
    public class BookInPublicationHouseRepository : GenericRepository<BookPublicationHouse>
    {
        private string _connection;

        public BookInPublicationHouseRepository(IConfiguration configuration) : base(configuration)
        {
            _connection = configuration["ConnectionStrings:DefaultConnection"];
        }

        public List<BookPublicationHouse> GetAllByBookId(int id)
        {
            var query = $"SELECT BookPublicationHouses.*, Books.*, PublicationHouses.* FROM Books LEFT JOIN BookPublicationHouses on BookPublicationHouses.BookId = Books.Id LEFT JOIN PublicationHouses on PublicationHouses.Id = BookPublicationHouses.PublicationHouseId WHERE Books.Id = {id};";
            List<BookPublicationHouse> booksPublicationHouses;
            using (SqlConnection connection = new SqlConnection(_connection))
            {
                booksPublicationHouses = connection.Query<BookPublicationHouse, Book, PublicationHouse, BookPublicationHouse>(query, (bph, book, ph) =>
                {
                    bph.Book = book;
                    bph.BookId = book.Id;
                    bph.PublicationHouse = ph;
                    bph.PublicationHouseId = ph != null ? ph.Id : 0;
                    return bph;
                }, splitOn: "Id").ToList();

            }
            return booksPublicationHouses.ToList();
        }

        public List<BookPublicationHouse> GetAllByPublicationHouseId(int id)
        {
            var query = $"SELECT BookPublicationHouses.*, PublicationHouses.*, Books.* FROM PublicationHouses LEFT JOIN BookPublicationHouses on BookPublicationHouses.PublicationHouseId = PublicationHouses.Id LEFT JOIN Books on Books.Id = BookPublicationHouses.BookId WHERE PublicationHouses.Id = {id};";
            List<BookPublicationHouse> booksPublicationHouses = new List<BookPublicationHouse>();
            using (SqlConnection connection = new SqlConnection(_connection))
            {
                booksPublicationHouses = connection.Query<BookPublicationHouse, PublicationHouse, Book, BookPublicationHouse>(query, (bph, ph, book) =>
                {
                    bph.Book = book;
                    bph.BookId = book != null ? book.Id : 0;
                    bph.PublicationHouse = ph;
                    bph.PublicationHouseId = ph.Id;
                    return bph;
                }, splitOn: "Id").ToList();
            }
            return booksPublicationHouses.ToList();
        }
    }
}
