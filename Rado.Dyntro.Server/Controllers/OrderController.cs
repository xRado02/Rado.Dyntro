using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Rado.Dyntro.Server.Data;
using Rado.Dyntro.Server.Data.Entities;
using Rado.Dyntro.Server.Enums;
using Rado.Dyntro.Server.Models;
using System.Security.Claims;

namespace Rado.Dyntro.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
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
                var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
                var userId = Guid.Parse(userIdClaim.Value);
                var orders = _appDbContext.Orders.Where(o => o.UserId == userId).OrderByDescending(o => o.Id).ToList();
                var result = _mapper.Map<List<OrderViewModel>>(orders);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Błąd: {ex.Message}");
                return StatusCode(500, "Wystąpił błąd serwera");
            }
        }

        [HttpGet("page")]
        public ActionResult<PagedResult<OrderViewModel>> GetOrdersFromPage([FromQuery] int pageNumber = 1)
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            var userId = Guid.Parse(userIdClaim.Value);
            var pageSize = 11;
            var query = _appDbContext.Orders.Where(o => o.UserId == userId);
            var totalCount = query.Count(); 
            var totalPages = (int)Math.Ceiling(totalCount / (double)pageSize);

            var orders = query
                .OrderByDescending(o => o.Id)
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            var result = new PagedResult<OrderViewModel>
            {
                Items = _mapper.Map<List<OrderViewModel>>(orders),
                TotalCount = totalCount,
                PageSize = pageSize,
                CurrentPage = pageNumber,
                TotalPages = totalPages
            };

            return Ok(result);
        }



        [HttpGet("orderFilteredBy")]
        public ActionResult<PagedResult<OrderViewModel>> GetFilteredBy([FromQuery] OrderQueryParams queryParams, [FromQuery] int pageNumber = 1)
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            var userId = Guid.Parse(userIdClaim.Value);

            var pageSize = 5;
            var query = _appDbContext.Orders.Where(o => o.UserId == userId);

          
            if (queryParams.searchByStatus.HasValue)
                query = query.Where(o => o.Status == queryParams.searchByStatus);

            if (queryParams.searchByCategory.HasValue)
                query = query.Where(o => o.Category == queryParams.searchByCategory);

            if (queryParams.searchByPriority.HasValue)
                query = query.Where(o => o.Priority == queryParams.searchByPriority);

            if (!string.IsNullOrEmpty(queryParams.searchByUser))
                query = query.Where(o => o.FirstName.StartsWith(queryParams.searchByUser) || o.LastName.StartsWith(queryParams.searchByUser));

            
            if (queryParams.sortByElement.HasValue && queryParams.sortByDirection.HasValue)
            {
                query = queryParams.sortByElement == SortByElement.Data
                    ? queryParams.sortByDirection == SortByDirection.Ascending ? query.OrderBy(o => o.Date) : query.OrderByDescending(o => o.Date)
                    : queryParams.sortByDirection == SortByDirection.Ascending ? query.OrderBy(o => o.Id) : query.OrderByDescending(o => o.Id);
            }

            var totalCount = query.Count();
            var totalPages = (int)Math.Ceiling(totalCount / (double)pageSize);

            var orders = query
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            var result = new PagedResult<OrderViewModel>
            {
                Items = _mapper.Map<List<OrderViewModel>>(orders),
                TotalCount = totalCount,
                PageSize = pageSize,
                CurrentPage = pageNumber,
                TotalPages = totalPages
            };

            return Ok(result);
        }


        [HttpPost]
        public ActionResult Post([FromBody] OrderViewModel model)
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            var userId = Guid.Parse(userIdClaim.Value);           
            var order = _mapper.Map<Data.Entities.Order>(model);
            order.Date = DateTime.Now;
            order.UserId = userId;
            _appDbContext.Orders.Add(order);
            _appDbContext.SaveChanges();
            var key = order.Id;
            return Created("api/order/" + key, null);
        }


   
        [HttpDelete("delete")]
        public ActionResult Delete([FromBody] List<Guid> ids)
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);       
            var userId = Guid.Parse(userIdClaim.Value);
            var ordersToDelete = _appDbContext.Orders.Where(o => ids.Contains(o.Id) && o.UserId == userId).ToList();        

            _appDbContext.Orders.RemoveRange(ordersToDelete);
            _appDbContext.SaveChanges();

            return NoContent();
        }


    }
}
