using Library.Core.BusinessLogicLayer.Services;
using Library.Core.ViewModelLayer.ViewModels.Brochure;
using Microsoft.AspNetCore.Mvc;

namespace Library.Core.Web.Controllers
{
  [Produces("application/json")]
  [Route("api/Brochure")]
  public class BrochureController : Controller
  {
    private BrochureService _brochureService;

    public BrochureController()
    {
      _brochureService = new BrochureService();
    }

    [HttpGet]
    public GetBrochureView Get()
    {
      GetBrochureView brochureViewModel = _brochureService.GetAll();

      return brochureViewModel;
    }

    [HttpPost]
    public IActionResult Post([FromBody]PostBrochureView brochure)
    {
      if (ModelState.IsValid)
      {
        _brochureService.Post(brochure);
        return Ok(brochure);
      }
      return BadRequest(ModelState);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]PutBrochureView brochure)
    {
      if (ModelState.IsValid)
      {
        _brochureService.Put(brochure);
        return Ok(brochure);
      }
      return BadRequest(ModelState);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      if (id != 0)
      {
        _brochureService.Delete(id);
      }
      return Ok(id);
    }
  }
}
