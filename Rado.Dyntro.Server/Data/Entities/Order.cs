﻿using Rado.Dyntro.Server.enums;
using System;
using System.ComponentModel.DataAnnotations;



namespace Rado.Dyntro.Server.Data.Entities
{
    public class Order
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public OrderStatus Status { get; set; }

        [Required]
        public string? Topic { get; set; }

        [Required]
        public string? FirstName { get; set; }

        [Required]
        public string? LastName { get; set; }

        [Required]
        public OrderCategory Category { get; set; }

        [Required]
        public OrderPriority Priority { get; set; }

        [Required]
        public DateTime Date { get; set; }
    }
}
