using Library.Core.BusinessLogicLayer.Services;
using Library.Core.ViewModelLayer.ViewModels.Magazine;
using Microsoft.AspNetCore.Mvc;

namespace Library.Core.Web.Controllers
{
  [Produces("application/json")]
  [Route("api/Magazine")]
  public class MagazineController : Controller
  {
    private MagazineService _magazineService;

    public MagazineController()
    {
      _magazineService = new MagazineService();
    }

    [HttpGet]
    public GetMagazineView Get()
    {
      GetMagazineView magazineViewModel = _magazineService.GetAll();

      return magazineViewModel;
    }

    [HttpPost]
    public IActionResult Post([FromBody]PostMagazineView magazine)
    {
      if (ModelState.IsValid)
      {
        _magazineService.Post(magazine);
        return Ok(magazine);
      }
      return BadRequest(ModelState);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]PutMagazineView magazine)
    {
      if (ModelState.IsValid)
      {
        _magazineService.Put(magazine);
        return Ok(magazine);
      }
      return BadRequest(ModelState);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      if (id != 0)
      {
        _magazineService.Delete(id);
      }
      return Ok(id);
    }
  }
}
