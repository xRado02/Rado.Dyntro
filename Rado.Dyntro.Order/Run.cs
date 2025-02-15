using Microsoft.EntityFrameworkCore;
using Rado.Dyntro.Server.Data;

var builder = WebApplication.CreateBuilder(args);

// Rejestracja DbContext z connection stringiem z appsettings.json
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

var app = builder.Build();

// Inne konfiguracje aplikacji (np. middleware, routing, itp.)

app.Run();
