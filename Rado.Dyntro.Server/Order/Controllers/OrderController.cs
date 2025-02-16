using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Rado.Dyntro.Server.Data;
using Rado.Dyntro.Server.Order.ViewModel;

namespace Rado.Dyntro.Server.Order.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        private readonly IMapper _mapper;

        public OrderController(AppDbContext appDbContext, IMapper mapper)
        {
            _appDbContext = appDbContext;
            _mapper = mapper;
        }


        [HttpGet]
        public ActionResult<List<OrderViewModel>> Get()
        {
            try
            {
                var orders = _appDbContext.Orders.ToList();
                var result = _mapper.Map<List<OrderViewModel>>(orders);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Błąd: {ex.Message}");
                return StatusCode(500, "Wystąpił błąd serwera");
            }
        }
        //[HttpGet]
        //public ActionResult<List<OrderViewModel>> Get()
        //{
        //    var orders = _appDbContext.Orders.ToList();
        //    var result = _mapper.Map<List<OrderViewModel>>(orders);
        //    return Ok(result);
        //}
    }
}
