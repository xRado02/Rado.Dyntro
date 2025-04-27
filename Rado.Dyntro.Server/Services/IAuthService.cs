using Rado.Dyntro.Server.Data.Entities;
using Rado.Dyntro.Server.Models;

namespace Rado.Dyntro.Server.Services
{
    public interface IAuthService
    {
        Task<User?> RegisterActivationAsync(UserActivateViewModel request);
        Task<TokenResponseViewModel?> LoginAsync(UserLoginViewModel request);
        Task<TokenResponseViewModel?> RefreshTokenAsync(RefreshTokenRequestViewModel request);
    }
}
