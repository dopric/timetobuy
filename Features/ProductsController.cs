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
        private IProductService productService;
        public ProductsController(IProductService service)
        {
            productService = service;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return Ok(productService.GetAll());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult Details(int id)
        {
            
            return Ok(productService.GetById(id));
        }
    }
}