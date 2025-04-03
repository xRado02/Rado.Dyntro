using Rado.Dyntro.Server.enums;
using System;
using System.ComponentModel.DataAnnotations;

namespace Rado.Dyntro.Server.Data.Entities
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]        
        public string? FirstName { get; set; }

        [Required]
        public string? LastName { get; set; }

        [Required]
        public string? Email { get; set; }

        [Required]
        public UserRole Role { get; set; }
    }
}
