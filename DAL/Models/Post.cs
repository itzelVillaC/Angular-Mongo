using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class Post
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("user")]
        public User User { get; set; }
        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("text")]
        public string Text { get; set; }

        [BsonElement("category")]
        public string Category { get; set; }

        [BsonElement("image")]
        public string Image { get; set; }

        [BsonElement("time")]
        public string Time { get; set; }
    }
}
