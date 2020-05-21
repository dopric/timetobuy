using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace timetobuy.Models
{
    public class ShoppingCart
    {
        public int Id { get; set; }
        public Guid SessionId { get; set; }
        public List<CartItem> Items { get; set; } = new List<CartItem>();
        public DateTime CreatedOn { get; set; }
    }
}
