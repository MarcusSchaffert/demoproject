using DemoProject.API.Data;
using DemoProject.Core.Models;
using DemoProject.Core.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;

namespace DemoProject.API.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _context.Users.Include(u => u.UserType).ToListAsync();
        }

        public async Task<User?> GetByEmailAsync(string email)
        {
            return await _context.Users.Include(u => u.UserType)
                                       .FirstOrDefaultAsync(u => u.UserEmail == email);
        }

        public async Task<User?> GetByIdAsync(int id)
        {
            return await _context.Users.Include(u => u.UserType).FirstOrDefaultAsync(u => u.UserID == id);
        }

        public async Task UpdateAsync(User user)
        {
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
        }
    }
}
