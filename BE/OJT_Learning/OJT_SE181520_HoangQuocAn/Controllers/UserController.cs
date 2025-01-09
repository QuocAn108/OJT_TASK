using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using OJT_SE181520_HoangQuocAn.Interface;
using OJT_SE181520_HoangQuocAn.Models;

namespace OJT_SE181520_HoangQuocAn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController(IUserRepository userRepository) : ControllerBase
    {
        [HttpGet("login")]
        public async Task<IActionResult> Login(string username, string password)
        {
            var user = await userRepository.CheckLoginAsync(username, password);
            if (user == null)
            {
                return Unauthorized();
            }
            return Ok(user);
        }
        [HttpPost("create")]
        public async Task<IActionResult> Create(User model)
        {

            if (model == null)
            {
                return BadRequest("User data is missing");
            }

            await userRepository.CreateAsync(model);
            return Ok(model);
        }
    }
}
