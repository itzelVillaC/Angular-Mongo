using Common;
using DAL.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Service
{
    public class AdvertisementService
    {
        private readonly IMongoCollection<Advertisement> _advertisement;
        private readonly IMongoCollection<User> _user;
        public AdvertisementService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("ClassifiedAdvertisingDB"));
            var database = client.GetDatabase("ClassifiedAdvertisingDB");
            _advertisement = database.GetCollection<Advertisement>("Advertising");
            _user = database.GetCollection<User>("User");
        }
        public string InsertAdvertisement(Advertisement p, CurrentUser user)
        {
            var userObject = _user.Find(u => u.Email == user.Email).FirstOrDefault();
            var advertisement = new Advertisement
            {
                User = new User
                {
                    Id = userObject.Id,
                    Email = user.Email,
                    Name = user.Name
                },
                Title = p.Title,
                Text = p.Text,
                Category = p.Category,
                Image = p.Image,
                Time = DateTime.Now.ToString()
            };
            _advertisement.InsertOne(advertisement);
            var idPost = advertisement.Id;
            return idPost;
        }
        public List<Advertisement> AdvertisementByCategory(string category)
        {
            return _advertisement.Find(a => a.Category == category).ToList();
        }
        public Advertisement AdvertisementById(string id)
        {
            return _advertisement.Find(a => a.Id == id).FirstOrDefault();
        }
        public List<Advertisement> AdvertisementBySearch(string search)
        {
            var regex = new BsonDocument("$regex", search);
            var title = new BsonDocument("title", regex);
            var text = new BsonDocument("text", regex);
            var list = new List<BsonDocument> { title, text };
            var searchList = new BsonArray(list);
            var filter = new BsonDocument("$or", searchList);
            return _advertisement.Find(filter).ToList();
        }
    }
}
