using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DAL.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PostUserAngularApiMongo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        readonly PostService _postService;
        public FilesController(PostService postService)
        {
            _postService = postService;
        }
        [HttpGet("{id}")]
        public ActionResult FilesP(string id)
        {
           var data= _postService.PostById(id);
            var file = System.IO.File.ReadAllBytes(data.Image);
            return File(file,"image/jpeg");
        }
    }
}