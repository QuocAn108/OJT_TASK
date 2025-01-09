using OJT_SE181520_HoangQuocAn.Models;

namespace OJT_SE181520_HoangQuocAn.Interface
{
    public interface IUserRepository
    {
        Task<User?> CheckLoginAsync(string username, string password);
        Task<User> CreateAsync(User model);
    }
}
