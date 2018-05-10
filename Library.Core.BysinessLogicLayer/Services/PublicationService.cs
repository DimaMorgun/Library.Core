using Library.Core.DataAccessLayer.Repositories;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels.AllPublications;
using System.Collections.Generic;

namespace Library.Core.BusinessLogicLayer.Services
{
    public class PublicationService
    {
        private BookRepository _bookRepository;
        private MagazineRepository _magazineRepository;
        private BrochureRepository _brochureRepository;

        public PublicationService(BookRepository bookRepository, MagazineRepository magazineRepository, BrochureRepository brochureRepository)
        {
            _bookRepository = bookRepository;
            _magazineRepository = magazineRepository;
            _brochureRepository = brochureRepository;
        }

        public GetAllPublicationView GetAll()
        {
            var allPublicationsViewModel = new GetAllPublicationView();

            var allBooks = new List<Book>();
            allBooks = _bookRepository.GetAll();
            var allMagazines = new List<Magazine>();
            allMagazines = _magazineRepository.GetAll();
            var allBrochures = new List<Brochure>();
            allBrochures = _brochureRepository.GetAll();

            var allPublicationsModel  = new List<PublicationGetAllPublicationView>();
            foreach (var book in allBooks)
            {
                allPublicationsModel.Add(new PublicationGetAllPublicationView() { PublicationId = book.BookId, Name = book.Name, Type = nameof(Book) });
            }
            foreach (var magazine in allMagazines)
            {
                allPublicationsModel.Add(new PublicationGetAllPublicationView() { PublicationId = magazine.MagazineId, Name = magazine.Name, Type = nameof(Magazine) });
            }
            foreach (var brochure in allBrochures)
            {
                allPublicationsModel.Add(new PublicationGetAllPublicationView() { PublicationId = brochure.Id, Name = brochure.Name, Type = nameof(Brochure) });
            }

            allPublicationsViewModel.Publications = allPublicationsModel;

            return allPublicationsViewModel;
        }

        //TODO: Question below
        public void Delete(DeleteAllPublicationView publication)
        {
            if (publication.Type == nameof(Book))
            {
                //new BookService(_bookRepository).Delete(publication.PublicationId);
            }
            if (publication.Type == nameof(Magazine))
            {
                new MagazineService(_magazineRepository).Delete(publication.PublicationId);
            }
            if (publication.Type == nameof(Brochure))
            {
                new BrochureService(_brochureRepository).Delete(publication.PublicationId);
            }
        }
    }
}
