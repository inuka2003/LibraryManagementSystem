import React, { useState } from "react";
import api from "../api";
import { Book } from "../types";

type Props = {
  book: Book;    
  onUpdated: () => void; // Callback after update
  onCancel: () => void; // Cancel editing
};

const BookEditForm: React.FC<Props> = ({ book, onUpdated, onCancel }) => {
   // Pre-fill form with book details
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author); 
  const [description, setDescription] = useState(book.description);


  // Handle update submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !author) {
      alert("Title Author fields are required!");
      return;
    }

    const authorRegex = /^[a-zA-Z\s]+$/;
    if (!authorRegex.test(author)) {
      alert("Author name can only contain letters and spaces.");
      return;
    }
    
  // PUT request to backend
    await api.put(`/books/${book.id}`, { title, author, description });
    onUpdated();
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BookEditForm;
