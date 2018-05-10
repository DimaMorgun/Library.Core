using AutoMapper;
using Library.Core.DataAccessLayer.Repositories;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels.Brochure;
using System.Collections.Generic;

namespace Library.Core.BusinessLogicLayer.Services
{
    public class BrochureService
    {
        private BrochureRepository _brochureRepository;

        public BrochureService(string connection)
        {
            _brochureRepository = new BrochureRepository(connection);
        }

        public GetBrochureView GetAll()
        {
            var brochureViewModel = new GetBrochureView();

            var allBrochuresModel = _brochureRepository.GetAll();
            List<BrochureGetBrochureViewItem> allBrochuresViewModel = Mapper.Map<List<Brochure>, List<BrochureGetBrochureViewItem>>(allBrochuresModel);

            brochureViewModel.Brochures = allBrochuresViewModel;

            return brochureViewModel;
        }

        public void Post(PostBrochureView brochure)
        {
            var brochureModel = Mapper.Map<PostBrochureView, Brochure>(brochure);

            _brochureRepository.Insert(brochureModel);
        }

        public void Put(PutBrochureView brochure)
        {
            Brochure BrochureModel = _brochureRepository.Get(brochure.BrochureId);
            BrochureModel.Name = brochure.Name;
            BrochureModel.NumberOfPages = brochure.NumberOfPages;
            BrochureModel.TypeOfCover = brochure.TypeOfCover;
            _brochureRepository.Update(BrochureModel);
        }

        public void Delete(int id)
        {
            Brochure brochureModel = _brochureRepository.Get(id);
            _brochureRepository.Delete(brochureModel);
        }
    }
}
