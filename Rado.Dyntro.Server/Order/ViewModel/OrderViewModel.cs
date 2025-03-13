using Rado.Dyntro.Server.enums;

namespace Rado.Dyntro.Server.Order.ViewModel
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

        

    }
}
