using DemoProject.API.DTOs;
using DemoProject.Core.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    private readonly ILogger<AuthController> _logger; 

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDTO request)
    {
        try {
            var token = await _authService.LoginAsync(request.Email, request.Password);

            if (token == null) {
                return Unauthorized("Invalid credentials");
            }

            return Ok(new { Token = token });
        }
        catch (Exception e) {
            _logger.LogError(e, "Error logging in");
            return null;
        }
    }
}
