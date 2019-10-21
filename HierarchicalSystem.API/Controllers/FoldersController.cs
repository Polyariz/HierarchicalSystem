using System.Linq;
using System.Threading.Tasks;
using HierarchicalSystem.API.Data;
using Microsoft.AspNetCore.Mvc; 
using Microsoft.EntityFrameworkCore;

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

        [HttpGet] //http://localhost:5000/folders
        public async Task<IActionResult> GetValues()
        {
            var values = await  _context.Folders.ToListAsync();

            return Ok(values);
        }
       
        //http://localhost:5000/folders
        [HttpGet("{id}", Name = "GetFolder")]
        public async Task<IActionResult> GetFolder(int id)
        {
            var values = await _context.Folders.FirstOrDefaultAsync(x => x.Id == id); 
            return Ok(values);
        }
        //http://localhost:5000/folders/subfolders/1
        [HttpGet("subfolders/{folderId}")]
        public async Task<IActionResult> GetSubfolders(int folderId)
        {  
            var folders = await  _context.Folders.Where(x => x.ParentId == folderId).ToListAsync();
            return Ok(folders);
        }
        
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

    }
}