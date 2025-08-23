using Microsoft.EntityFrameworkCore;
using LibraryAPI.Models;

namespace LibraryAPI.Data
{
    // Database context for manages Book entities in SQLite database
    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options) : base(options) { }

         // DbSet represents the "Books" table
        public DbSet<Book> Books { get; set; }
    }
}
