using Microsoft.EntityFrameworkCore;
using Rado.Dyntro.Server.Data;
using Rado.Dyntro.Server.Data.Seeder.OrderSeeder;

var builder = WebApplication.CreateBuilder(args);

// Dodajemy konfiguracjê DbContext z pliku appsettings.json
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

// Rejestrujemy OrderSeeder
builder.Services.AddScoped<OrderSeeder>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Tworzenie instancji OrderSeeder i wywo³anie Seed()
using (var scope = app.Services.CreateScope())
{
    var orderSeeder = scope.ServiceProvider.GetRequiredService<OrderSeeder>();
    orderSeeder.Seed();
}

app.UseDefaultFiles();
app.UseStaticFiles();

// Konfiguracja Swaggera
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
