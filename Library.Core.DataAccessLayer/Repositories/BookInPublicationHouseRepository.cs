﻿using Dapper;
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

        public BookInPublicationHouseRepository(/*IConfiguration configuration*/)/* : base(configuration)*/
        {
            //_connection = configuration["ConnectionStrings:DefaultConnection"];
            _connection = "Server=(localdb)\\MSSQLLocalDB;Database=LibraryCore;Trusted_Connection=True";
        }

        public List<BookPublicationHouse> GetAllByBookId(int id)
        {
            var query = $"SELECT BookPublicationHouses.*, Books.*, PublicationHouses.* FROM Books LEFT JOIN BookPublicationHouses on BookPublicationHouses.BookId = Books.BookId LEFT JOIN PublicationHouses on PublicationHouses.PublicationHouseId = BookPublicationHouses.PublicationHouseId WHERE Books.BookId = {id};";
            List<BookPublicationHouse> booksPublicationHouses;
            using (SqlConnection connection = new SqlConnection(_connection))
            {
                booksPublicationHouses = connection.Query<BookPublicationHouse, Book, PublicationHouse, BookPublicationHouse>(query, (bph, book, ph) =>
                {
                    bph.Book = book;
                    bph.BookId = book.BookId;
                    bph.PublicationHouse = ph;
                    bph.PublicationHouseId = ph != null ? ph.PublicationHouseId : 0;
                    return bph;
                }, splitOn: "PublicationHouseId").ToList();

            }
            return booksPublicationHouses.ToList();
        }

        public List<BookPublicationHouse> GetAllByPublicationHouseId(int id)
        {
            var query = $"SELECT BookPublicationHouses.*, PublicationHouses.*, Books.* FROM PublicationHouses LEFT JOIN BookPublicationHouses on BookPublicationHouses.PublicationHouseId = PublicationHouses.PublicationHouseId LEFT JOIN Books on Books.BookId = BookPublicationHouses.BookId WHERE PublicationHouses.PublicationHouseId = {id};";
            List<BookPublicationHouse> booksPublicationHouses = new List<BookPublicationHouse>();
            using (SqlConnection connection = new SqlConnection(_connection))
            {
                booksPublicationHouses = connection.Query<BookPublicationHouse, PublicationHouse, Book, BookPublicationHouse>(query, (bph, ph, book) =>
                {
                    bph.Book = book;
                    bph.BookId = book != null ? book.BookId : 0;
                    bph.PublicationHouse = ph;
                    bph.PublicationHouseId = ph.PublicationHouseId;
                    return bph;
                }, splitOn: "BookId").ToList();
            }
            return booksPublicationHouses.ToList();
        }
    }
}
