using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace DAL.Models
{
    public class Categories
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("category")]
        public string Category { get; set; }
    }
}
