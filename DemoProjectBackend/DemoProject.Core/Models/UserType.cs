using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DemoProject.Core.Models
{
    public class UserType
    {
        [Key]
        public int UserTypeID { get; set; }

        [Required]
        [MaxLength(50)]
        public string TypeName { get; set; }
    }
}