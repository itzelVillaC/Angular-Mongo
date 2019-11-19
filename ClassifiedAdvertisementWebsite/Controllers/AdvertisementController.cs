using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Common;
using DAL.Models;
using DAL.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ClassifiedAdvertisementsWebsite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvertisementController : ControllerBase
    {
        private readonly AdvertisementService _advertisementService;
        private IHostingEnvironment _hostingEnvironment;

        public AdvertisementController(AdvertisementService advertisementService, IHostingEnvironment hostingEnvironment)
        {
            _advertisementService = advertisementService;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet("{category}")]
        public ActionResult<List<Advertisement>> GetAdvertisementByCategory(string category)
        {
            return _advertisementService.AdvertisementByCategory(category);
        }

        [HttpGet("id/{id}")]
        public ActionResult<Advertisement> GetAdvertisementById(string id)
        {
            return _advertisementService.AdvertisementById(id);
        }

        [Authorize]
        [HttpPost("data/")]
        public ActionResult<object> InsertAdvertisement(Advertisement post)
        {
            CurrentUser user = new CurrentUser(User.Claims);
            var idPost = _advertisementService.InsertAdvertisement(post, user);
            return idPost;
        }

        [Authorize]
        [HttpPost("image/")]
        public ActionResult<object> SaveImage()
        {
            string fullPath = "";
            try
            {
                var file = Request.Form.Files[0];
                if (file.Length > 0)
                {
                    string folderName = "Upload";
                    string webRootPath = _hostingEnvironment.WebRootPath;
                    string newPath = Path.Combine(webRootPath, folderName);
                    if (!Directory.Exists(newPath))
                    {
                        Directory.CreateDirectory(newPath);
                    }
                    string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    fullPath = Path.Combine(newPath, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                }
                return fullPath;
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("search/{findText}")]
        public ActionResult<List<Advertisement>> AdvertisementBySearch(string findText)
        {
            return _advertisementService.AdvertisementBySearch(findText);
        }
    }
}