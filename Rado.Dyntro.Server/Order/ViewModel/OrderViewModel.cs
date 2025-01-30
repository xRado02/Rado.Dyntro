namespace Rado.Dyntro.Server.Order.ViewModel
{
    public class OrderViewModel
    {
        public int ID { get; set; }
        
        public string? Status { get; set; }

        public string? Topic { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? Category { get; set; }

        public string? Priority { get; set; }

        public DateOnly Date { get; set; }
     

    }
}
