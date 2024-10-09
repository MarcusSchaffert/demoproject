using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DemoProject.Core.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }

        [ForeignKey("UserType")]
        public int UserTypeID { get; set; }

        [Required]
        [MaxLength(100)]
        public string UserEmail { get; set; }

        [Required]
        public string HashedPassword { get; set; }

        [Required]
        public DateTime DateJoined { get; set; }

        public DateTime DateLastUpdated { get; set; }

        public UserType UserType { get; set; }
    }
}
