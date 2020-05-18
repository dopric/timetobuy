using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using timetobuy.Models;
using timetobuy.Services;

namespace timetobuy.Features
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        [HttpGet]
        public IActionResult Index()
        {
            return Ok(ProductService.GetAll());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult Details(int id)
        {
            
            return Ok(ProductService.GetById(id));
        }
    }
}