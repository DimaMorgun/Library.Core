using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels.Magazine
{
    public class GetMagazineView
    {
        public ICollection<MagazineGetMagazineViewItem> Magazines { get; set; }

        public GetMagazineView()
        {
            Magazines = new List<MagazineGetMagazineViewItem>();
        }
    }

    public class MagazineGetMagazineViewItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? Number { get; set; }
        public int? YearOfPublishing { get; set; }

        public MagazineGetMagazineViewItem()
        {

        }
    }
}
