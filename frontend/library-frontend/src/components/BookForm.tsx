import React, { useState } from "react";
import api from "../api";

type Props = {
  onBookAdded: () => void;  //callback to refresh the list after adding
};

const BookForm: React.FC<Props> = ({ onBookAdded }) => {

  // State for form fields
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");


  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation all fields required
    if (!title || !author ) {
      alert("Title Author fields are required!");
      return;
    }

    const authorRegex = /^[a-zA-Z\s]+$/;
    if (!authorRegex.test(author)) {
      alert("Author name can only contain letters and spaces.");
      return;
    }

    // POST request to backend
    await api.post("/books", { title, author, description });


    // Reset form
    setTitle("");
    setAuthor("");
    setDescription("");

    // Notify refresh book list
    onBookAdded();
  };

  return (
    <div>
      <h2>Add Book</h2>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default BookForm;
