using Microsoft.AspNetCore.Mvc;
using LibraryAPI.Data;
using LibraryAPI.Models;

namespace LibraryAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly LibraryContext _context;

        public BooksController(LibraryContext context)
        {
            _context = context;
        }

        // GET: api/books
        [HttpGet]
        public IActionResult GetAllBooks()
        {
            var books = _context.Books.ToList();
            return Ok(books); 
        }

        // GET: api/books/1
        [HttpGet("{id}")]
        public IActionResult GetBookById(int id)
        {
            var book = _context.Books.Find(id);
            if (book == null) return NotFound("Book not found");
            return Ok(book);
        }

        // POST: api/books
        [HttpPost]
        public IActionResult AddBook(BookCreateDto bookDto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var book = new Book
            {
                Title = bookDto.Title,
                Author = bookDto.Author,
                Description = bookDto.Description
            };

            _context.Books.Add(book);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetBookById), new { id = book.Id }, book);
        }

        // PUT: api/books/1
        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, BookUpdateDto bookDto)
        {
            var book = _context.Books.Find(id);
            if (book == null) return NotFound("Book not found");

            book.Title = bookDto.Title;
            book.Author = bookDto.Author;
            book.Description = bookDto.Description;

            _context.SaveChanges();
            return Ok(book);
        }

        // DELETE: api/books/1
        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            var book = _context.Books.Find(id);
            if (book == null) return NotFound("Book not found");

            _context.Books.Remove(book);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
