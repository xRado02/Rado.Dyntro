using Rado.Dyntro.Server.Data.Entities;
using Rado.Dyntro.Server.Models;

namespace Rado.Dyntro.Server.Services
{
    public interface IAuthService
    {
        Task<UserAuth?> RegisterAsync(UserAuthViewModel request);
        Task<TokenResponseViewModel?> LoginAsync(UserAuthViewModel request);
        Task<TokenResponseViewModel?> RefreshTokenAsync(RefreshTokenRequestViewModel request);
    }
}
