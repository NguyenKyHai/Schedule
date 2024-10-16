using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Schedule.Common;
using Schedule.Core.Entity;
using Schedule.Extentions;
using Schedule.Jwt;
using Schedule.ViewModels.Equipment;
using WebApp.Core.DataAccess;

namespace Schedule.Controllers
{
    [Authorize]
    [ApiController]
    public class EquipmentController : ApiControllerBase
    {
        private readonly WebAppContext _webAppContext;

        public EquipmentController(WebAppContext webAppContext)
        {
            _webAppContext = webAppContext;
        }

        [HttpGet]
        [Route("api/[controller]/all")]
        public async Task<IActionResult> GetAll()
        {
            if (isAdminRole())
            {
                return Ok(await _webAppContext.Equipments.ToListAsync());
            }
            return Ok(await _webAppContext.Equipments.Where(e => e.StatusFlag == 0).ToListAsync());
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {

            var res = _webAppContext.Equipments.Where(e => e.Id == id);
            if (isAdminRole())
            {
                res = res.Where(e => e.StatusFlag == 0);
            }

            return Ok(await res.FirstOrDefaultAsync());
        }

        [HttpPut]
        [Route("api/[controller]/{id}")]
        public async Task<IActionResult> UpdateEquipment([FromBody] EquipmentDetailModel req)
        {
            var res = await _webAppContext.Equipments.Where(e => e.Id == req.id).FirstOrDefaultAsync();
            if (res == null)
            {
                return BadRequest(new { message = "Equipment not found!" });
            }
            res.EquipmentCD = req.equipmentCD.ToFixCodeDB(FixCodeType.Equipment).Trim();
            res.EquipmentName = req.equipmentName.Trim();
            res.GroupName = req.groupName;
            res.StatusFlag = Convert.ToByte(req.statusFlag ? 1 : 0);
            res.Remarks = req.remarks.Trim();
            try
            {
                await _webAppContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }

            return Ok();
        }
    }
}
