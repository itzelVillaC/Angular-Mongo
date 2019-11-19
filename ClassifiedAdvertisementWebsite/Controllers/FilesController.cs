using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DAL.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ClassifiedAdvertisementsWebsite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        readonly AdvertisementService _advertisementService;
        public FilesController(AdvertisementService advertisementService)
        {
            _advertisementService = advertisementService;
        }
        [HttpGet("{id}")]
        public ActionResult FilesP(string id)
        {
           var data= _advertisementService.AdvertisementById(id);
            var file = System.IO.File.ReadAllBytes(data.Image);
            return File(file,"image/jpeg");
        }
    }
}