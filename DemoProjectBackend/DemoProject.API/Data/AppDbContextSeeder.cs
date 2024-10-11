


using DemoProject.Core.Models;
using BCrypt.Net;

namespace DemoProject.API.Data
{
    public static class AppDbContextSeeder
    {
        public static async Task SeedAsync(AppDbContext context)
        {
            await run(context);
        }

        private static async Task run(AppDbContext context)
        {
            await SeedUserTypes(context);
            await SeedUsers(context);
        }

        private static async Task SeedUserTypes(AppDbContext context)
        {
            if (!context.UserTypes.Any())
            {
                var userTypes = new List<UserType>
                {
                    new UserType { TypeName = "Admin" },
                    new UserType { TypeName = "User" },
                };

                context.UserTypes.AddRange(userTypes);
                await context.SaveChangesAsync();

            }

        }

        private static async Task SeedUsers(AppDbContext context)
        {
            if (!context.Users.Any())
            {
                var passwordAdmin = BCrypt.Net.BCrypt.HashPassword("passwordAdmin");
                var passwordUser = BCrypt.Net.BCrypt.HashPassword("passwordUser");
                var users = new List<User>
                {
                    new User
                    {
                        UserEmail = "admin@gmail.com",
                        HashedPassword = passwordAdmin,
                        DateJoined = DateTime.Now,
                        DateLastUpdated = DateTime.Now,
                        UserTypeID = 1
                    },
                    new User
                    {
                        UserEmail = "user@gmail.com",
                        HashedPassword = passwordUser,
                        DateJoined = DateTime.Now,
                        DateLastUpdated = DateTime.Now,
                        UserTypeID = 2
                    }
                };

                context.Users.AddRange(users);
                await context.SaveChangesAsync();

            }
        }

    }
}