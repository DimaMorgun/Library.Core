using Library.Core.DataAccessLayer.Connection;
using Library.Core.DataAccessLayer.UnitOfWork;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels.AllPublications;
using System.Collections.Generic;

namespace Library.Core.BusinessLogicLayer.Services
{
    public class AllPublicationsService
    {
        private UnitOfWork _unitOfWork;

        public AllPublicationsService()
        {
            _unitOfWork = new UnitOfWork(MSSQLConnection.ConnectionString);
        }

        public GetAllPublicationView GetAll()
        {
            var allPublicationsViewModel = new GetAllPublicationView();

            var allBooks = new List<Book>();
            allBooks = _unitOfWork.Books.GetAll();
            var allMagazines = new List<Magazine>();
            allMagazines = _unitOfWork.Magazines.GetAll();
            var allBrochures = new List<Brochure>();
            allBrochures = _unitOfWork.Brochures.GetAll();

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
                allPublicationsModel.Add(new PublicationGetAllPublicationView() { PublicationId = brochure.BrochureId, Name = brochure.Name, Type = nameof(Brochure) });
            }

            allPublicationsViewModel.Publications = allPublicationsModel;

            return allPublicationsViewModel;
        }

        public void Delete(DeleteAllPublicationView publication)
        {
            if (publication.Type == nameof(Book))
            {
                new BookService().Delete(publication.PublicationId);
            }
            if (publication.Type == nameof(Magazine))
            {
                new MagazineService().Delete(publication.PublicationId);
            }
            if (publication.Type == nameof(Brochure))
            {
                new BrochureService().Delete(publication.PublicationId);
            }
        }
    }
}
