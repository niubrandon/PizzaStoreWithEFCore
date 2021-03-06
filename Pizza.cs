using Microsoft.EntityFrameworkCore;

namespace PizzaStoreWithEF.Models
{
  public class Pizza
  {
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
  }
//useDbContext
  class PizzaDb : DbContext
  {
    public PizzaDb(DbContextOptions options) : base(options) { }
    public DbSet<Pizza> Pizzas { get; set; }
    
  }
}