using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using timetobuy.Models;

namespace timetobuy.Features
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        private List<Product>_products= new List<Product>{
                new Product{Id=1, Name="First steps with Reacct", Description="no prior experiance needed"},
                new Product{Id=2, Name="Learning React", Description="some description"},
                new Product{Id=3, Name="React advanced", Description="ready to take next step?"},
                new Product{Id=4, Name="Asp.Net Core & React", Description="Learn C#, WebApi and React"},
                new Product{Id=5, Name="React & Redux", Description="React for enterprise applications"},
                new Product{Id=6, Name="SPA with React", Description="Single Page Applications with React"},
                new Product{Id=7, Name="Start your Vue Journey", Description="lets learn vue"}
            };
        [HttpGet]
        public IActionResult Index()
        {
            return Ok(_products);
        }
    }
}