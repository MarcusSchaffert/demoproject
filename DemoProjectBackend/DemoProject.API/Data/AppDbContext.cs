using DemoProject.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace DemoProject.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<UserType> UserTypes { get; set; }

        public async Task SeedDataAsync()
        {
            await AppDbContextSeeder.SeedAsync(this);
        }
    }
}
