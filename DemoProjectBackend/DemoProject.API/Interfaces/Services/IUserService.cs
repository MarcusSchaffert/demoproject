using DemoProject.API.DTOs;

namespace DemoProject.API.Interfaces.Services
{
    public interface IUserService
    {
        Task<UserDTO> GetUserByIdAsync(int id);
        Task<IEnumerable<UserDTO>> GetAllUsersAsync();
        Task<bool> UpdateUserAsync(int id, UpdateUserPasswordDTO updateUserDto);
    }
}
