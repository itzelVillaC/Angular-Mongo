using DAL.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Service
{
    public class CategoryService
    {
        private readonly IMongoCollection<Categorys> _category;
        public CategoryService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("PostDB"));
            var database = client.GetDatabase("PostDB");
            _category = database.GetCollection<Categorys>("Category");
        }
        public List<Categorys> GetCategorys()
        {
            return _category.Find(Post => true).ToList();
        }
    }
}
