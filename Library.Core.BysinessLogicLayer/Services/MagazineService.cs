using AutoMapper;
using Library.Core.DataAccessLayer.Connection;
using Library.Core.DataAccessLayer.UnitOfWork;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels.Magazine;
using System.Collections.Generic;

namespace Library.Core.BusinessLogicLayer.Services
{
    public class MagazineService
    {
        private UnitOfWork _unitOfWork;

        public MagazineService()
        {
            _unitOfWork = new UnitOfWork(MSSQLConnection.ConnectionString);
        }

        public GetMagazineView GetAll()
        {
            var magazineViewModel = new GetMagazineView();

            var allMagazinesModel = _unitOfWork.Magazines.GetAll();
            List<MagazineGetMagazineViewItem> allMagazinesViewModel = Mapper.Map<List<Magazine>, List<MagazineGetMagazineViewItem>>(allMagazinesModel);

            magazineViewModel.Magazines = allMagazinesViewModel;

            return magazineViewModel;
        }

        public void Post(PostMagazineView magazine)
        {
            var magazineModel = Mapper.Map<PostMagazineView, Magazine>(magazine);

            _unitOfWork.Magazines.Insert(magazineModel);
        }

        public void Put(PutMagazineView magazine)
        {
            Magazine magazineModel = _unitOfWork.Magazines.Get(magazine.MagazineId);
            magazineModel.Name = magazine.Name;
            magazineModel.Number = magazine.Number;
            magazineModel.YearOfPublishing = magazine.YearOfPublishing;
            _unitOfWork.Magazines.Update(magazineModel);
        }

        public void Delete(int id)
        {
            Magazine magazineModel = _unitOfWork.Magazines.Get(id);
            _unitOfWork.Magazines.Delete(magazineModel);
        }
    }
}
