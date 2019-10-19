using HierarchicalSystem.API.Models;
using Microsoft.EntityFrameworkCore;

namespace HierarchicalSystem.API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Folder> Folders { get; set; }        
    }
}