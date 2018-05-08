using AutoMapper;
using Library.Core.DataAccessLayer.Connection;
using Library.Core.DataAccessLayer.UnitOfWork;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels.Brochure;
using System.Collections.Generic;

namespace Library.Core.BusinessLogicLayer.Services
{
    public class BrochureService
    {
        private UnitOfWork _unitOfWork;

        public BrochureService()
        {
            _unitOfWork = new UnitOfWork(MSSQLConnection.ConnectionString);
        }

        public GetBrochureView GetAll()
        {
            var brochureViewModel = new GetBrochureView();

            var allBrochuresModel = _unitOfWork.Brochures.GetAll();
            List<BrochureGetBrochureViewItem> allBrochuresViewModel = Mapper.Map<List<Brochure>, List<BrochureGetBrochureViewItem>>(allBrochuresModel);

            brochureViewModel.Brochures = allBrochuresViewModel;

            return brochureViewModel;
        }

        public void Post(PostBrochureView brochure)
        {
            var brochureModel = Mapper.Map<PostBrochureView, Brochure>(brochure);

            _unitOfWork.Brochures.Insert(brochureModel);
        }

        public void Put(PutBrochureView brochure)
        {
            Brochure BrochureModel = _unitOfWork.Brochures.Get(brochure.BrochureId);
            BrochureModel.Name = brochure.Name;
            BrochureModel.NumberOfPages = brochure.NumberOfPages;
            BrochureModel.TypeOfCover = brochure.TypeOfCover;
            _unitOfWork.Brochures.Update(BrochureModel);
        }

        public void Delete(int id)
        {
            Brochure brochureModel = _unitOfWork.Brochures.Get(id);
            _unitOfWork.Brochures.Delete(brochureModel);
        }
    }
}
