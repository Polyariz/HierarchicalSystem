using System.Collections.Generic;
using System.Linq;
using HierarchicalSystem.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace HierarchicalSystem.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FoldersController : ControllerBase
    {
        private readonly DataContext _context;
        public FoldersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetValues()
        {
            var values = _context.Folders.ToList();
            return Ok(values);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var values = _context.Folders.FirstOrDefault(x=>x.Id==id); 
            return Ok(values);
        }   

        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

    }
}