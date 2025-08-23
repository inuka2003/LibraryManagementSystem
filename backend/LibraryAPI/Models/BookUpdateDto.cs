using System.ComponentModel.DataAnnotations;

namespace LibraryAPI.Models
{

     // DTO used when updating a book (Id comes from route, not body)
    public class BookUpdateDto
    {
        [Required]
        public string Title { get; set; } = string.Empty;

        [Required]
         [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Author name can only contain letters and spaces.")]
        public string Author { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;
    }
}
