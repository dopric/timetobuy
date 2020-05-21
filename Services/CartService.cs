using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using timetobuy.Domain;
using timetobuy.Features;
using timetobuy.Models;

namespace timetobuy.Services
{
    public class CartService
    {
        readonly DatabaseContext dbContext;
        public CartService(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public AddToCartResult AddToCart(AddToCartItem item)
        {
            ShoppingCart cart = null;
            if (!item.SessionId.HasValue)
            {
                cart = new ShoppingCart { SessionId = Guid.NewGuid(), CreatedOn = DateTime.Now };
                dbContext.ShoppingCart.Add(cart);
            }
            else
            {
                cart = dbContext.ShoppingCart.First(c => c.SessionId.Equals(item.SessionId.Value));
            }
            
            cart.Items.Add(new CartItem { ProductId = item.ProductId, Quanitity = item.Quantity });
        
            dbContext.SaveChanges();
            return new AddToCartResult { SessionId = cart.SessionId };

        }
    }
}
