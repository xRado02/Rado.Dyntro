using Rado.Dyntro.Server.Data.Entities;
using Rado.Dyntro.Server.Data;

namespace Rado.Dyntro.Server.Data.Seeder.OrderSeeder

{
    public class OrderSeeder
    {
        private readonly AppDbContext _appDbContext;
        public OrderSeeder(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }


        public void Seed()
        {
            if(_appDbContext.Database.CanConnect())
            {
                if(!_appDbContext.Orders.Any())
                {
                    InsertSampleData();
                }
            }
        }

        private void InsertSampleData()
        {
          var orders = new List<Entities.Order>
          {
            new Entities.Order
            {
                Status = "W realizacji",
                Topic = "Nowa kampania newsletterowa",
                FirstName = "Anna",
                LastName = "Kowalska",
                Category = "Kampania e-mail",
                Priority = "Wysoki",
                Date = DateTime.UtcNow.AddDays(-3)
            },
            new Entities.Order
            {
                 Status = "Zamknięte",
                Topic = "Reklama na LinkedIn",
                FirstName = "Michał",
                LastName = "Nowak",
                Category = "Kampania Linkedin",
                Priority = "Niski",
                Date = DateTime.UtcNow.AddDays(-10)
            },
            new Entities.Order
            {
                Status = "W realizacji",
                Topic = "Segmentacja odbiorców",
                FirstName = "Katarzyna",
                LastName = "Wiśniewska",
                Category = "Kampania e-mail",
                Priority = "Wysoki",
                Date = DateTime.UtcNow.AddDays(-1)
            },
            new Entities.Order
            {
                Status = "Zamknięte",
                Topic = "Testy A/B reklam",
                FirstName = "Tomasz",
                LastName = "Dąbrowski",
                Category = "Kampania Linkedin",
                Priority = "Wysoki",
                Date = DateTime.UtcNow.AddDays(-7)
            },
            new Entities.Order
            {
                Status = "W realizacji",
                Topic = "Analiza wyników kampanii",
                FirstName = "Ewa",
                LastName = "Lis",
                Category = "Inny",
                Priority = "Niski",
                Date = DateTime.UtcNow.AddDays(-5)
            }
          };

            _appDbContext.AddRange(orders);
            _appDbContext.SaveChanges();
        }




    }
}
