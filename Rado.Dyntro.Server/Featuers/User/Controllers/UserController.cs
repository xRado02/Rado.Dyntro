using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Rado.Dyntro.Server.Featuers.Order.ViewModel;
using Rado.Dyntro.Server.Featuers.User.ViewModel;

namespace Rado.Dyntro.Server.Featuers.User.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UserController: ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        private readonly IMapper _mapper;

        public UserController(AppDbContext appDbContext, IMapper mapper)
        {
            _appDbContext = appDbContext;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<List<UserViewModel>> Get()
        {
            try
            {
                var users = _appDbContext.Users.OrderByDescending(o => o.Id).ToList();
                var result = _mapper.Map<List<UserViewModel>>(users);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Błąd: {ex.Message}");
                return StatusCode(500, "Wystąpił błąd serwera");
            }
        }

        [HttpPost]

        public ActionResult Post([FromBody] UserViewModel model)
        {
            var user = _mapper.Map<Data.Entities.User>(model);
            _appDbContext.Users.Add(user);
            _appDbContext.SaveChanges();

            var key = user.Id;

            return Created("api/user/" + key, null);
        }

        
    }
}
