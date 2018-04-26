using AutoMapper;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels.Book;

namespace Library.Core.BysinessLogicLayer.AutoMapperConfig
{
    public class AutoMapperConfig
    {
        public static void InitializeInstances()
        {
            Mapper.Initialize(cfg =>
            {
                //---BOOK
                // Get Book
                cfg.CreateMap<Book, BookGetBookViewItem>();
                cfg.CreateMap<Author, AuthorGetBookViewItem>();
                cfg.CreateMap<PublicationHouse, PublicationHouseGetBookViewItem>();
                // Post Book
                cfg.CreateMap<PostBookView, Book>();
            });
        }
    }
}
