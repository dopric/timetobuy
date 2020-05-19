using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using timetobuy.Domain;
using timetobuy.Models;

namespace timetobuy.Services
{
    public interface IProductService
    {
        List<Product> GetAll();
        Product GetById(int id);
    }
    public class ProductService : IProductService
    {
        private DatabaseContext _db;
       

        public ProductService(DatabaseContext db)
        {
            _db = db;
        }

        public Product GetById(int id)
        {
            return _db.Products.SingleOrDefault(p => p.Id.Equals(id));
        }

        public List<Product> GetAll()
        {
            return _db.Products.ToList();
        }

       
    }
}
