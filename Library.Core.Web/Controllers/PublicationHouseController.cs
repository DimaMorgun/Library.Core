using Library.Core.BusinessLogicLayer.Services;
using Library.Core.ViewModelLayer.ViewModels.PublicationHouse;
using Microsoft.AspNetCore.Mvc;

namespace Library.Core.Web.Controllers
{
  [Produces("application/json")]
  [Route("api/PublicationHouse")]
  public class PublicationHouseController : Controller
  {
    private PublicationHouseService _publicationHouseService;

    public PublicationHouseController()
    {
      _publicationHouseService = new PublicationHouseService();
    }

    [HttpGet]
    public GetPublicationHouseView Get()
    {
      GetPublicationHouseView publicationHousesBooksViewModel = _publicationHouseService.GetAll();

      return publicationHousesBooksViewModel;
    }

    [HttpPost]
    public IActionResult Post([FromBody]PostPublicationHouseView publicationHouse)
    {
      if (ModelState.IsValid)
      {
        _publicationHouseService.Post(publicationHouse);
        return Ok(publicationHouse);
      }
      return BadRequest(ModelState);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]PutPublicationHouseView publicationHouse)
    {
      if (ModelState.IsValid)
      {
        _publicationHouseService.Put(publicationHouse);
        return Ok(publicationHouse);
      }
      return BadRequest(ModelState);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      if (id != 0)
      {
        _publicationHouseService.Delete(id);
      }
      return Ok(id);
    }
  }
}
