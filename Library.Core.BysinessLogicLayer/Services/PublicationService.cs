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
                allPublicationsModel.Add(new PublicationGetAllPublicationView() { Id = book.Id, Name = book.Name, Type = nameof(Book) });
            }
            foreach (var magazine in allMagazines)
            {
                allPublicationsModel.Add(new PublicationGetAllPublicationView() { Id = magazine.Id, Name = magazine.Name, Type = nameof(Magazine) });
            }
            foreach (var brochure in allBrochures)
            {
                allPublicationsModel.Add(new PublicationGetAllPublicationView() { Id = brochure.Id, Name = brochure.Name, Type = nameof(Brochure) });
            }

            allPublicationsViewModel.Publications = allPublicationsModel;

            return allPublicationsViewModel;
        }

        public void Delete(DeleteAllPublicationView publication)
        {
            if (publication.Type == nameof(Book))
            {
                _bookRepository.Delete(publication.Id);
            }
            if (publication.Type == nameof(Magazine))
            {
                _magazineRepository.Delete(publication.Id);
            }
            if (publication.Type == nameof(Brochure))
            {
                _brochureRepository.Delete(publication.Id);
            }
        }
    }
}
