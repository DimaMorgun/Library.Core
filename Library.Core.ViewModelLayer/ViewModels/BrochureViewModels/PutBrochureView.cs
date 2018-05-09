namespace Library.Core.ViewModelLayer.ViewModels.Brochure
{
    public class PutBrochureView
    {
        public int BrochureId { get; set; }
        public string Name { get; set; }
        public string TypeOfCover { get; set; }
        public int? NumberOfPages { get; set; }

        public PutBrochureView()
        {

        }
    }
}
