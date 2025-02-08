using Microsoft.AspNetCore.Mvc;
using Rado.Dyntro.Server.Order.ViewModel;

namespace Rado.Dyntro.Server.Order.Controller
{
    [ApiController]
    [Route("[controller]")]   
    public class OrderController : ControllerBase
    {
        private readonly ILogger<OrderController> _logger;

        public OrderController(ILogger<OrderController> logger)
        {
            _logger = logger;   
        }

        [HttpGet(Name = "GetOrder")]

        public IEnumerable<OrderViewModel> Get()
        {
            return Enumerable.Range(1, 10).Select(index => new OrderViewModel
            {
                Id = index,
                Status = "Active",
                Topic = "None",
                FirstName = "Jhon",
                LastName = "Jhonson",
                Category = "Test",
                Priority = "Top",
                Date = DateTime.Now
,
            })
            .ToArray();
            
        }



    }
}
