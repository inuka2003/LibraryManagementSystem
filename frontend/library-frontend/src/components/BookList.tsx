import React, { useEffect, useState } from "react";
import api from "../api";
import { Book } from "../types";

type Props = {
  onEdit: (book: Book) => void;
};

const BookList: React.FC<Props> = ({ onEdit }) => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const res = await api.get<Book[]>("/books");
    setBooks(res.data);
  };

  const deleteBook = async (id: number) => {
    await api.delete(`/books/${id}`);
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id} style={{ marginBottom: "15px", padding: "10px", border: "1px solid #ddd", borderRadius: "5px", background: "#fff" }}>
              <div><strong>Book Title:</strong> {book.title}</div>
              <div><strong>Author:</strong> {book.author}</div>
              <div><strong>Description:</strong> {book.description}</div>
              <div style={{ marginTop: "5px" }}>
                <button onClick={() => onEdit(book)}>Edit</button>
                <button onClick={() => deleteBook(book.id)} style={{ marginLeft: "8px" }}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
