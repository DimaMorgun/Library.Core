﻿using AutoMapper;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels;

namespace Library.Core.BysinessLogicLayer.AutoMapperConfig
{
    public class AutoMapperConfig
    {
        public static void Initialize()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Book, BookViewModel>();
                cfg.CreateMap<BookViewModel, Book>();
                cfg.CreateMap<BookAuthor, BookAuthorsRelationViewModel>();
                cfg.CreateMap<BookAuthor, BookViewModel>();
                cfg.CreateMap<Author, AuthorViewModel>();
                cfg.CreateMap<AuthorViewModel, Author>();
                cfg.CreateMap<BookPublicationHouse, BookPublicationHousesRelationViewModel>();
                cfg.CreateMap<BookPublicationHousesRelationViewModel, BookPublicationHouse>();
                cfg.CreateMap<PublicationHouse, PublicationHouseViewModel>();
                cfg.CreateMap<PublicationHouseViewModel, PublicationHouse>();

                //cfg.CreateMap<Magazine, MagazineViewModel>();
                //cfg.CreateMap<MagazineViewModel, Magazine>();

                //cfg.CreateMap<Brochure, BrochureViewModel>();
                //cfg.CreateMap<BrochureViewModel, Brochure>();
            });
        }
    }
}
