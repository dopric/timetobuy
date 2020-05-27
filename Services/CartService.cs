using Microsoft.EntityFrameworkCore;
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
            Guid sessionId = Guid.Empty;
           
            if (item.SessionId.HasValue)
            {
                cart = dbContext.ShoppingCart.Include(x=>x.Items).FirstOrDefault(c => c.SessionId.Equals(item.SessionId.Value));
                sessionId = item.SessionId.Value;
            }
            if (cart == null)
            {
                sessionId = Guid.NewGuid();
                cart = new ShoppingCart { SessionId =sessionId, CreatedOn = DateTime.Now };
                dbContext.ShoppingCart.Add(cart);
                dbContext.SaveChanges();
            }
            var existingProduct = cart.Items.SingleOrDefault(p=>p.ProductId.Equals(item.ProductId));
            if (existingProduct == null)
            {
                cart.Items.Add(new CartItem { ProductId = item.ProductId, Quanitity = item.Quantity });
            }
            else
            {
                existingProduct.Quanitity += item.Quantity;
            }
            dbContext.SaveChanges();
            return new AddToCartResult { SessionId = cart.SessionId };

        }
        public List<CartItemResponse> GetCartItems(Guid? sessionId)
        {
            if (!sessionId.HasValue)
            {
                return  new List<CartItemResponse>();
            }
            var cart = dbContext.ShoppingCart
                .Include(x => x.Items)
                .FirstOrDefault(x => x.SessionId.Equals(sessionId.Value));
            var liste = new List<CartItemResponse>();
           foreach(var item in cart.Items)
            {
                var prod = dbContext.Products.FirstOrDefault(p => p.Id == item.ProductId);
                liste.Add( new CartItemResponse
                {
                    Id = item.ProductId,
                    Name = prod.Name,
                    Price = prod.Price,
                    Quantity = item.Quanitity

                });
            }
            return liste;
        }
        public async Task RemoveItem(Guid sessionId, int productId)
        {
            var cart = dbContext.ShoppingCart
                .Include(p=>p.Items)
                .FirstOrDefault(x => x.SessionId.Equals(sessionId));
            var item = cart.Items.FirstOrDefault(x => x.ProductId == productId);
            cart.Items.Remove(item);
            await dbContext.SaveChangesAsync();
        }
    }
}
