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
        private readonly IMongoCollection<Categories> _category;
        public CategoryService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("ClassifiedAdvertisingDB"));
            var database = client.GetDatabase("ClassifiedAdvertisingDB");
            _category = database.GetCollection<Categories>("Category");
        }
        public List<Categories> GetCategories()
        {
            return _category.Find(c => true).ToList();
        }
    }
}
