using Dapper.Contrib.Extensions;

namespace Library.Core.EntityModelLayer.Code
{
    public abstract class Entity
    {
        [Key]
        public int Id { get; set; }
    }
}
