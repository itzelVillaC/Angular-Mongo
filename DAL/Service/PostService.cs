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
    public class PostService
    {
        private readonly IMongoCollection<Post> _post;
        private readonly IMongoCollection<User> _user;
        public PostService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("PostDB"));
            var database = client.GetDatabase("PostDB");
            _post = database.GetCollection<Post>("Post");
            _user = database.GetCollection<User>("User");
        }
        public List<Post> PostByCategory(string category)
        {
            return _post.Find(post => post.Category == category).ToList();
        }
        public Post PostById(string id)
        {
            return _post.Find(post => post.Id == id).FirstOrDefault();
        }
        public string InsertPost(Post p, CurrentUser user)
        {
            var userObject = _user.Find(i => i.Email == user.Email).FirstOrDefault();
            var postAllData = new Post
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
            _post.InsertOne(postAllData);
            var idPost = postAllData.Id;
            return idPost;
        }

        public List<Post> PostBySearch(string search)
        {
            var regex = new BsonDocument("$regex", search);
            var title = new BsonDocument("title", regex);
            var text = new BsonDocument("text", regex);
            var list = new List<BsonDocument> { title, text };
            var searchList = new BsonArray(list);
            var filter = new BsonDocument("$or", searchList);
            return _post.Find(filter).ToList();
        }
    }
}
