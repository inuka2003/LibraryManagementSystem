using System.ComponentModel.DataAnnotations;

namespace LibraryAPI.Models
{
    public class Book
    {
        public int Id { get; set; }   // Primary key, auto-generated

        [Required]  // Validation: Title cannot be empty
        public string Title { get; set; } = string.Empty;

        [Required] // Validation: Author cannot be empty
        public string Author { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;
    }
}
