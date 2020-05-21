using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace timetobuy.Models
{
    public class CartItem
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int Quanitity { get; set; }
    }
}
