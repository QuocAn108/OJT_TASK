using Microsoft.EntityFrameworkCore;

namespace OJT_SE181520_HoangQuocAn.Models.Data
{
    public class AppDBContext(DbContextOptions<AppDBContext> options) : DbContext(options)
    {
        public DbSet<Product> Products { get; set; }
    }
}
