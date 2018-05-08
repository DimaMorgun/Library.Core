using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels.Brochure
{
    public class GetBrochureView
    {
        public ICollection<BrochureGetBrochureViewItem> Brochures { get; set; }

        public GetBrochureView()
        {
            Brochures = new List<BrochureGetBrochureViewItem>();
        }
    }

    public class BrochureGetBrochureViewItem
    {
        public int BrochureId { get; set; }
        public string Name { get; set; }
        public string TypeOfCover { get; set; }
        public int? NumberOfPages { get; set; }
    }
}
