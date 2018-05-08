using AutoMapper;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels.Author;
using Library.Core.ViewModelLayer.ViewModels.Book;
using Library.Core.ViewModelLayer.ViewModels.Brochure;
using Library.Core.ViewModelLayer.ViewModels.Magazine;
using Library.Core.ViewModelLayer.ViewModels.PublicationHouse;

namespace Library.Core.BysinessLogicLayer.AutoMapperConfig
{
    public class AutoMapperConfig
    {
        public static void InitializeInstances()
        {
            Mapper.Initialize(cfg =>
            {
                //---BOOK
                // Get
                cfg.CreateMap<Book, BookGetBookViewItem>();
                cfg.CreateMap<Author, AuthorGetBookViewItem>();
                cfg.CreateMap<PublicationHouse, PublicationHouseGetBookViewItem>();
                // Post
                cfg.CreateMap<PostBookView, Book>();

                //---Author
                // Get
                cfg.CreateMap<Author, AuthorGetAuthorViewItem>();
                cfg.CreateMap<Book, BookGetAuthorViewItem>();
                // Post
                cfg.CreateMap<PostAuthorView, Author>();

                //---PublicationHouse
                // Get
                cfg.CreateMap<PublicationHouse, PublicationHouseGetPublicationHouseViewItem>();
                cfg.CreateMap<Book, BookGetPublicationHouseViewItem>();
                // Post
                cfg.CreateMap<PostPublicationHouseView, PublicationHouse>();

                //---Magazine
                // Get
                cfg.CreateMap<Magazine, MagazineGetMagazineViewItem>();
                // Post
                cfg.CreateMap<PostMagazineView, Magazine>();

                //---Brochure
                // Get
                cfg.CreateMap<Brochure, BrochureGetBrochureViewItem>();
                // Post
                cfg.CreateMap<PostBrochureView, Brochure>();
            });
        }
    }
}
