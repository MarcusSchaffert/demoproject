using DemoProject.API.DTOs;
using DemoProject.API.Interfaces.Services;
using DemoProject.API.Repositories;
using DemoProject.Core.Interfaces.Repositories;
using DemoProject.Core.Interfaces.Services;
using DemoProject.Core.Models;

namespace DemoProject.API.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<UserDTO> GetUserByIdAsync(int id)
        {
            User user = await _userRepository.GetByIdAsync(id);
            return MapToDTO(user);
        }

        public async Task<bool> UpdateUserAsync(int id, UpdateUserPasswordDTO updateUserDto)
        {
            var user = await _userRepository.GetByIdAsync(id);
            if (user == null)
            {
                return false;
            }

            bool isPasswordMatch = BCrypt.Net.BCrypt.Verify(updateUserDto.ConfirmPassword, user.HashedPassword);
            if (!isPasswordMatch) throw new Exception("User confirm password does not match current password.");


            user.HashedPassword = BCrypt.Net.BCrypt.HashPassword(updateUserDto.Password);

            await _userRepository.UpdateAsync(user);
            return true;
        }

        public async Task<IEnumerable<UserDTO>> GetAllUsersAsync()
        {
            var users = await _userRepository.GetAllAsync();
            return users.Select(MapToDTO);
        }

        private UserDTO MapToDTO(User user)
        {
            return new UserDTO
            {
                UserID = user.UserID,
                UserType = user.UserType.TypeName,
                UserEmail = user.UserEmail,
                DateJoined = user.DateJoined,
                DateLastUpdated = user.DateLastUpdated
            };
        }
    }
}
