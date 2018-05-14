using System.Collections.Generic;

namespace Library.Core.ViewModelLayer.ViewModels.AllPublications
{
    public class GetAllPublicationView
    {
        public ICollection<PublicationGetAllPublicationView> Publications { get; set; }

        public GetAllPublicationView()
        {
            Publications = new List<PublicationGetAllPublicationView>();
        }
    }

    public class PublicationGetAllPublicationView
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }

        public PublicationGetAllPublicationView()
        {

        }
    }
}
