using Rado.Dyntro.Server.enums;
using Rado.Dyntro.Server.Featuers.Order.ViewModel;

namespace Rado.Dyntro.Server.Featuers.User.ViewModel
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public UserRole? Role { get; set; }
    }
}
