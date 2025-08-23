using System.ComponentModel.DataAnnotations;

namespace LibraryAPI.Models
{

     // DTO used when updating a book (Id comes from route, not body)
    public class BookUpdateDto
    {
        [Required]
        public string Title { get; set; } = string.Empty;

        [Required]
        public string Author { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;
    }
}
