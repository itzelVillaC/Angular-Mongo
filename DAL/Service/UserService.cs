using Common;
using DAL.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Service
{
    public class UserService
    {
        private readonly IMongoCollection<User> _user;
        public UserService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("PostDB"));
            var database = client.GetDatabase("PostDB");
            _user = database.GetCollection<User>("User");
        }
        public User GetUserInfo(string email)
        {
            return _user.Find(u => u.Email == email).FirstOrDefault();
        }
        public void InsertUser(CurrentUser user)
        {
            var exist = _user.Find(u => u.Email == user.Email).FirstOrDefault();
            if (exist == null)
            {
                var informationUser = new User
                {
                    Email = user.Email,
                    Name = user.Name
                };
                _user.InsertOne(informationUser);
            }
        }
    }
}
