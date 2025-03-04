using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Rado.Dyntro.Server.Data;
using Rado.Dyntro.Server.Order.ViewModel;
using Rado.Dyntro.Server.Enums;

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
                var orders = _appDbContext.Orders.OrderByDescending(o => o.Date).Take(5).ToList();
                var result = _mapper.Map<List<OrderViewModel>>(orders);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Błąd: {ex.Message}");
                return StatusCode(500, "Wystąpił błąd serwera");
            }
        }

        [HttpGet("orderFilteredBy")]
        public ActionResult<List<OrderViewModel>> GetFilteredBy([FromQuery] OrderQueryParams queryParams)
        {
            var query = _appDbContext.Orders.AsQueryable();

            if (queryParams.searchByStatus.HasValue)
            {
                query = query.Where(o => o.Status == queryParams.searchByStatus);
            }

            if (queryParams.searchByCategory.HasValue)
            {
                query = query.Where(o => o.Category == queryParams.searchByCategory);
            }

            if (queryParams.searchByPriority.HasValue)
            {
                query = query.Where(o => o.Priority == queryParams.searchByPriority);
            }

            if (!string.IsNullOrEmpty(queryParams.searchByUser))
            {
                query = query.Where(o => o.FirstName.Contains(queryParams.searchByUser) || o.LastName.Contains(queryParams.searchByUser));
            }

            var orders = query.ToList();
            var result = _mapper.Map<List<OrderViewModel>>(orders);
            return Ok(result);
        }


      


    }
}
