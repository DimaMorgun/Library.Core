using Library.Core.BusinessLogicLayer.Services;
using Library.Core.ViewModelLayer.ViewModels.AllPublications;
using Microsoft.AspNetCore.Mvc;

namespace Library.Core.Web.Controllers
{
  [Produces("application/json")]
  [Route("api/Publication")]
  public class PublicationController : Controller
  {
    private PublicationService _allPublication;

    public PublicationController()
    {
      _allPublication = new PublicationService();
    }

    [HttpGet]
    public GetAllPublicationView Get()
    {
      GetAllPublicationView allPublicationViewModel = _allPublication.GetAll();

      return allPublicationViewModel;
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id, [FromBody]DeleteAllPublicationView publication)
    {
      if (publication != null)
      {
        _allPublication.Delete(publication);
      }
      return Ok(publication);
    }
  }
}
