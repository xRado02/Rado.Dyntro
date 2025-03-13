using Microsoft.EntityFrameworkCore;
using Rado.Dyntro.Server.Data.Entities;
using Rado.Dyntro.Server.Enums;

public class AppDbContext : DbContext
{
    public DbSet<Order>? Orders { get; set; } = null;

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Order>().Property(o => o.Status).HasConversion<string>();
        modelBuilder.Entity<Order>().Property(o => o.Priority).HasConversion<string>();
        modelBuilder.Entity<Order>().Property(o => o.Category).HasConversion<string>(); 
    }
}
 