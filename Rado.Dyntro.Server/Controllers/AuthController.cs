using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Rado.Dyntro.Server.Data.Entities;
using Rado.Dyntro.Server.Models;
using Rado.Dyntro.Server.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Rado.Dyntro.Server.Controllers
{
    [Route("api/[controller]")] 
    [ApiController]
    public class AuthController(IAuthService authService) : ControllerBase
    {   
            
        [HttpPost("register")]
        public async Task<ActionResult<UserAuth>> Register(UserAuthViewModel request)
        {
           var user = await authService.RegisterAsync(request);
           if (user is null)
           {
                return BadRequest("User already exists.");
           }

            return Ok(user);
        }

        [HttpPost("login")]

        public async Task<ActionResult<TokenResponseViewModel>> Login(UserAuthViewModel request)
        {
            var result = await authService.LoginAsync(request);
            if (result is null)
            {
                return BadRequest("Invalid username or password.");
            }
            return Ok(result);            
        }

        [Authorize]
        [HttpGet]
        public IActionResult AuthenticatedOnlyEndpoint()
        {
            return Ok("You are authenticated!");
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("admin-only")]
        public IActionResult AdminOnlyEndpoint()
        {
            return Ok("You are an Admin!");
        }

        [Authorize(Roles = "Client")]
        [HttpGet("client-only")]
        public IActionResult ClientOnlyEndpoint()
        {
            return Ok("You are a Client!");
        }

        [HttpPost("refresh-token")]
        public async Task<ActionResult<TokenResponseViewModel>> RefreshToken(RefreshTokenRequestViewModel request)
        {
            var result = await authService.RefreshTokenAsync(request);
            if(result is null || result.AccesToken is null || result.RefreshToken is null)
            {
                return Unauthorized("Invalid refresh token.");
            }
            return Ok(result);
        }

    }

    
}
