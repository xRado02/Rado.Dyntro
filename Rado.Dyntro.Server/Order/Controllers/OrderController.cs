using Microsoft.AspNetCore.Mvc;
using Rado.Dyntro.Server.Order.ViewModel;
using Rado.Dyntro.Server.Data.Entities;
using Rado.Dyntro.Server.Data;

namespace Rado.Dyntro.Server.Order.Controller
{
    [ApiController]
    [Route("api/[controller]")]   
    public class OrderController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public OrderController(AppDbContext appDbContext) 
        { 
            _appDbContext = appDbContext;
        }


        [HttpGet]
        public ActionResult<List<Data.Entities.Order>> Get()
        {
            var orders = _appDbContext.Orders.ToList();
            
            return Ok(orders);
        }


    }
}
