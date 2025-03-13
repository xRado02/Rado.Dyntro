using Rado.Dyntro.Server.enums;

namespace Rado.Dyntro.Server.Order
{
    public class OrderQueryParams
    {
        public string? searchByUser {  get; set; }
        public OrderStatus? searchByStatus { get; set; }
        public OrderCategory? searchByCategory { get; set; }
        public OrderPriority? searchByPriority { get; set; }    
        public SortByDirection? sortByDirection { get; set; }
        public SortByElement? sortByElement { get; set; } 
        

    }
}
