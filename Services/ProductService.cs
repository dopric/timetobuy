using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using timetobuy.Models;

namespace timetobuy.Services
{
    public class ProductService
    {
        private static List<Product> _allProducts = new List<Product>{
                new Product{Id=1, Name="First steps with Reacct", Description="no prior experiance needed", Price=12.95M, Image=""},
                new Product{Id=2, Name="Learning React", Description="some description", Price=29M, Image=""},
                new Product{Id=3, Name="React advanced", Description="ready to take next step?", Price=35.5M, Image=""},
                new Product{Id=4, Name="Asp.Net Core & React", Description="Learn C#, WebApi and React", Price=21.7M, Image=""},
                new Product{Id=5, Name="React & Redux", Description="React for enterprise applications", Price=30M, Image=""},
                new Product{Id=6, Name="SPA with React", Description="Single Page Applications with React", Price=45M, Image=""},
                new Product{Id=7, Name="Start your Vue Journey", Description="lets learn vue",Price=33M, Image=""}
            };

        public static List<Product> GetAll()
        {
            return _allProducts;
        }

        public static Product GetById(int id)
        {
            return _allProducts.SingleOrDefault(p => p.Id.Equals(id));
        }
    }
}
