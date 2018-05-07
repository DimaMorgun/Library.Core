using Dapper.Contrib.Extensions;

namespace Library.Core.EntityModelLayer.Models
{
    public class Brochure
    {
        [Key]
        public int BrochureId { get; set; }
        public string Name { get; set; }
        public string TypeOfCover { get; set; }
        public int? NumberOfPages { get; set; }
    }
}
