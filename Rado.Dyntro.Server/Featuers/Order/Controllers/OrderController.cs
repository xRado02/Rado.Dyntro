using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Rado.Dyntro.Server.Data;
using Rado.Dyntro.Server.Enums;
using Rado.Dyntro.Server.Featuers.Order;
using Rado.Dyntro.Server.Featuers.Order.ViewModel;

namespace Rado.Dyntro.Server.Featuers.Order.Controllers
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
                var orders = _appDbContext.Orders.OrderByDescending(o => o.Id).ToList();
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

            //Filter

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

            //Search

            if (!string.IsNullOrEmpty(queryParams.searchByUser))
            {
                query = query.Where(o => o.FirstName.StartsWith(queryParams.searchByUser) || o.LastName.StartsWith(queryParams.searchByUser));
            }

            //Sort
            if (queryParams.sortByElement.HasValue && queryParams.sortByDirection.HasValue)
            {
                query = queryParams.sortByElement == SortByElement.Data
                    ? queryParams.sortByDirection == SortByDirection.Ascending ? query.OrderBy(o => o.Date) : query.OrderByDescending(o => o.Date)
                    : queryParams.sortByDirection == SortByDirection.Ascending ? query.OrderBy(o => o.Id) : query.OrderByDescending(o => o.Id);
            }



            var orders = query.ToList();
            var result = _mapper.Map<List<OrderViewModel>>(orders);
            return Ok(result);
        }


        [HttpPost]
        public ActionResult Post([FromBody] OrderViewModel model)
        {
            var order = _mapper.Map<Data.Entities.Order>(model);
            order.Date = DateTime.Now;
            _appDbContext.Orders.Add(order);
            _appDbContext.SaveChanges();
            var key = order.Id;
            return Created("api/order/" + key, null);
        }


        [HttpDelete("delete")]

        public ActionResult Delete([FromBody] List<int> ids)
        {
            var ordersToDelete = _appDbContext.Orders.Where(u => ids.Contains(u.Id)).ToList();
            if (ordersToDelete.Count == 0)
            {
                return NotFound();
            }
            _appDbContext.Orders.RemoveRange(ordersToDelete);
            _appDbContext.SaveChanges();
            return NoContent();
        }

    }
}
