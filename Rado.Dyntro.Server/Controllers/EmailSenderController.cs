using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MimeKit.Text;
using MailKit.Net.Smtp;
using MailKit.Security;
using Rado.Dyntro.Server.Models;
using Rado.Dyntro.Server.Services;
using Rado.Dyntro.Server.Data.Entities;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Rado.Dyntro.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailSenderController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        private EmailService _emailService;

        public EmailSenderController(EmailService emailService, AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
            _emailService = emailService;
        }

        [HttpPost("invite")]
        public async Task<IActionResult> InviteUser([FromBody] UserViewModel model)
        {
            var existingUser = await _appDbContext.Users.Where(u => u.Id == model.Id).FirstOrDefaultAsync();          
            if (existingUser == null)
            {
                return BadRequest("Nie znaleziono użytkownika.");
            }


            var activationLink = $"https://dyntro.com.pl/activation?id={existingUser.Id}&email={existingUser.Email}";
            var body = $"Kliknij w link, aby ustawić hasło: {activationLink}";
            await _emailService.SendEmail(existingUser.Email, body );

            return Ok();
        }
    }
}
