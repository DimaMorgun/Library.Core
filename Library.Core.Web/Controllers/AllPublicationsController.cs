using Library.Core.BusinessLogicLayer.Services;
using Library.Core.ViewModelLayer.ViewModels.AllPublications;
using Microsoft.AspNetCore.Mvc;

namespace Library.Core.Web.Controllers
{
  [Produces("application/json")]
  [Route("api/AllPublications")]
  public class AllPublicationsController : Controller
  {
    private AllPublicationsService _allPublication;

    public AllPublicationsController()
    {
      _allPublication = new AllPublicationsService();
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
