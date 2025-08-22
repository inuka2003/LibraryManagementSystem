import React, { useState } from "react";
import api from "../api";
import { Book } from "../types";

type Props = {
  book: Book;
  onUpdated: () => void;
  onCancel: () => void;
};

const BookEditForm: React.FC<Props> = ({ book, onUpdated, onCancel }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [description, setDescription] = useState(book.description);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !author || !description) {
      alert("All fields are required!");
      return;
    }

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
