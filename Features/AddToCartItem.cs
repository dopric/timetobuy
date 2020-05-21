using System;
using System.Linq;

namespace timetobuy.Features
{
    public class AddToCartItem
    {
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public Guid? SessionId { get; set; }
    }
}