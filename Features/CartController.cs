using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using timetobuy.Domain;
using timetobuy.Models;
using timetobuy.Services;

namespace timetobuy.Features
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        readonly CartService cartservice;
        public CartController(CartService cartservice)
        {
            this.cartservice = cartservice;
        }

        [HttpGet]
        public IActionResult Index(Guid? sessionId)
        {
           return Ok(this.cartservice.GetCartItems(sessionId));
        }

        [HttpPost]
        public IActionResult AddToCart(AddToCartItem item)
        {
            AddToCartResult result = cartservice.AddToCart(item);
            return Ok(result.SessionId);
        }

        [HttpDelete]
        [Route("{sessionId}/lines/{productId}")]
        public async Task<IActionResult> DeleteById(Guid sessionId, int productId)
        {
            await cartservice.RemoveItem(sessionId, productId);
            return Ok("DELETED");
        }

    }
}