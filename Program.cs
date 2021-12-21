using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using PizzaStoreWithEF.Models;

var builder = WebApplication.CreateBuilder(args);

//db connection string
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
//swagger and openApi middleware
builder.Services.AddEndpointsApiExplorer();

// imMemory db
// builder.Services.AddDbContext<PizzaDb>(options => options.UseInMemoryDatabase("items"));
// use PostgreSQL
builder.Services.AddDbContext<PizzaDb>(options =>
    options.UseNpgsql(connectionString));

builder.Services.AddSwaggerGen(c =>
{
     c.SwaggerDoc("v1", new OpenApiInfo {
         Title = "PizzaStore API",
         Description = "Making the Pizzas you love",
         Version = "v1" });
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(c => 
{
  c.SwaggerEndpoint("/swagger/v1/swagger.json", "PizzaStore API V1");
});

//routes
app.MapGet("/pizzas", async (PizzaDb db) => await db.Pizzas.ToListAsync());

app.MapGet("/pizza/{id}", async(PizzaDb db, int id) => await db.Pizzas.FindAsync(id));

app.MapPost("/pizza", async (PizzaDb db, Pizza pizza) => 
{
  await db.Pizzas.AddAsync(pizza);
  await db.SaveChangesAsync();
  return Results.Created($"/pizza/{pizza.Id}", pizza);
});

app.MapPut("/pizza/{id}", async (PizzaDb db, Pizza updatepizza, int id) => 
{
  var pizza = await db.Pizzas.FindAsync(id);
  if (pizza is null) return Results.NotFound();
  pizza.Name = updatepizza.Name;
  pizza.Description = updatepizza.Description;
  await db.SaveChangesAsync();
  return Results.NoContent();
});

app.MapDelete("/pizza/{id}", async (PizzaDb db, int id) => 
{
  var pizza = await db.Pizzas.FindAsync(id);
  if (pizza is null)
  {
  return Results.NotFound();
  }
  db.Pizzas.Remove(pizza);
  await db.SaveChangesAsync();
  return Results.Ok();
});

app.Run();
