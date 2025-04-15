using Rado.Dyntro.Server.Enums;
using Rado.Dyntro.Server.Models;

namespace Rado.Dyntro.Server.Models
{
    public class OrderViewModel
    {
        public int Id { get; set; }
        public OrderStatus Status { get; set; }
        public string? Topic { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public OrderCategory Category { get; set; }
        public OrderPriority Priority { get; set; }
        public DateTime Date { get; set; }

        //public UserViewModel User { get; set; }


    }
}
