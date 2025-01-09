using Microsoft.EntityFrameworkCore;
using OJT_SE181520_HoangQuocAn.Interface;
using OJT_SE181520_HoangQuocAn.Models;
using OJT_SE181520_HoangQuocAn.Models.Data;

namespace OJT_SE181520_HoangQuocAn.Repository
{
    public class UserRepository(AppDBContext context) : IUserRepository
    {
        
        public async Task<User?> CheckLoginAsync(string username, string password)
        {
            return await context.Users.FirstOrDefaultAsync(x => x.Username == username && x.Password == password);
        }

        public async Task<User> CreateAsync(User model)
        {
            await context.Users.AddAsync(model);
            await context.SaveChangesAsync();
            return model;
        }
    }
}
