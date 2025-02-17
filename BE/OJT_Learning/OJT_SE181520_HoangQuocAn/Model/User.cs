using System.ComponentModel.DataAnnotations.Schema;

namespace OJT_SE181520_HoangQuocAn.Model
{
    public class User
    {
        public int Id { get; set; }
        [Column(TypeName = "text")]
        public string Username { get; set; }
        [Column(TypeName = "text")]
        public string Email { get; set; }
        [Column(TypeName = "text")]
        public string Password { get; set; }
    }
}
