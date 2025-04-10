using Microsoft.EntityFrameworkCore;

namespace Rado.Dyntro.Server.Data.Entities
{
    public class UserAuth
    {
        public Guid Id { get; set; }
        public string? Email { get; set; } = string.Empty;
        public string? PasswordHash { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty ;
        public string? RefreshToken { get; set; } 
        public DateTime RefreshTokenExpiryTime { get; set; }
    }
}
