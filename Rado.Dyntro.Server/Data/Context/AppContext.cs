using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;


namespace Rado.Dyntro.Server.Data
{
  
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Entities.Order> Orders { get; set; } = null!;
    }
}

