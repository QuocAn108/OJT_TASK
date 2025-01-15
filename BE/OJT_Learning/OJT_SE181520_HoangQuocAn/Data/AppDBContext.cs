using Microsoft.EntityFrameworkCore;
using OJT_SE181520_HoangQuocAn.Model;
using System;

namespace OJT_SE181520_HoangQuocAn.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
    }
}
