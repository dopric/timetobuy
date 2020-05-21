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

        public IActionResult Index()
        {
            return Ok("this is ok");
        }
        [HttpPost]
        public IActionResult AddToCart(AddToCartItem item)
        {
            AddToCartResult result = cartservice.AddToCart(item);
            return Ok(result.SessionId);
        }

    }
}