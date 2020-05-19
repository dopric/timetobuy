using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using timetobuy.Models;

namespace timetobuy.Domain
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using(var context = new DatabaseContext(serviceProvider.GetRequiredService<DbContextOptions<DatabaseContext>>()))
            {
                if(context.Products.Any())
                {
                    return;
                }
                context.Products
                    .AddRange(new Product
                    {
                        Name = "First steps with React",
                        Description = "no prior experiance needed",
                        Price = 12.95M,
                        Image = ""
                    },
                              new Product
                    { Name = "Learning React", Description = "some description", Price = 29M, Image = "" },
                              new Product
                    {
                        Name = "React advanced",
                        Description = "ready to take next step?",
                        Price = 35.5M,
                        Image = ""
                    },
                              new Product
                    {
                        Name = "Asp.Net Core & React",
                        Description = "Learn C#, WebApi and React",
                        Price = 21.7M,
                        Image = ""
                    },
                              new Product
                    {
                        Name = "React & Redux",
                        Description = "React for enterprise applications",
                        Price = 30M,
                        Image = ""
                    },
                              new Product
                    {
                        Name = "SPA with React",
                        Description = "Single Page Applications with React",
                        Price = 45M,
                        Image = ""
                    },
                              new Product
                    {  Name = "Start your Vue Journey", Description = "lets learn vue", Price = 33M, Image = "" });

                context.SaveChanges();
            }
            ;
        }
    }
}
