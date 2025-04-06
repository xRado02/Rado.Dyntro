using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Rado.Dyntro.Server.Data;
using Rado.Dyntro.Server.Data.Seeder.UserSeeder;
using Rado.Dyntro.Server.Data.Seeder.OrderSeeder;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

builder.Services.AddScoped<OrderSeeder>();
builder.Services.AddScoped<UserSeeder>();
builder.Services.AddScoped<UserService>();


builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowSpecificOrigin", policy =>
//    {
//        policy.WithOrigins("https://localhost:4200")  
//              .AllowAnyHeader()
//              .AllowAnyMethod();
//    });
//});

//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowAll",
//        builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
//});

var app = builder.Build();
using (var scope = app.Services.CreateScope())
{
    var orderSeeder = scope.ServiceProvider.GetRequiredService<OrderSeeder>();
    orderSeeder.Seed();
    var userSeeder = scope.ServiceProvider.GetRequiredService<UserSeeder>();
    userSeeder.Seed();

}


app.UseDefaultFiles();
app.UseStaticFiles();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    //app.UseDeveloperExceptionPage();
}



//app.UseCors("AllowSpecificOrigin"); 


app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();


app.Run();
