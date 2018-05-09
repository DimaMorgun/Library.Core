using AutoMapper;
using Library.Core.DataAccessLayer.Repositories;
using Library.Core.EntityModelLayer.Models;
using Library.Core.ViewModelLayer.ViewModels.Magazine;
using System.Collections.Generic;

namespace Library.Core.BusinessLogicLayer.Services
{
    public class MagazineService
    {
        private MagazineRepository _magazineRepository;

        public MagazineService()
        {
            var connection = @"data source = (LocalDb)\MSSQLLocalDB; initial catalog = LibraryCore; integrated security = True; MultipleActiveResultSets = True; App = EntityFramework";

            _magazineRepository = new MagazineRepository(connection);
        }

        public GetMagazineView GetAll()
        {
            var magazineViewModel = new GetMagazineView();

            var allMagazinesModel = _magazineRepository.GetAll();
            List<MagazineGetMagazineViewItem> allMagazinesViewModel = Mapper.Map<List<Magazine>, List<MagazineGetMagazineViewItem>>(allMagazinesModel);

            magazineViewModel.Magazines = allMagazinesViewModel;

            return magazineViewModel;
        }

        public void Post(PostMagazineView magazine)
        {
            var magazineModel = Mapper.Map<PostMagazineView, Magazine>(magazine);

            _magazineRepository.Insert(magazineModel);
        }

        public void Put(PutMagazineView magazine)
        {
            Magazine magazineModel = _magazineRepository.Get(magazine.MagazineId);
            magazineModel.Name = magazine.Name;
            magazineModel.Number = magazine.Number;
            magazineModel.YearOfPublishing = magazine.YearOfPublishing;
            _magazineRepository.Update(magazineModel);
        }

        public void Delete(int id)
        {
            Magazine magazineModel = _magazineRepository.Get(id);
            _magazineRepository.Delete(magazineModel);
        }
    }
}
