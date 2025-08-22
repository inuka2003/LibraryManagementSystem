import React, { useState } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import BookEditForm from "./components/BookEditForm";
import { Book } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => setRefresh(!refresh);

  return (
    <div className="container">
      <h1>Library Management</h1>

      {editingBook ? (
        <BookEditForm
          book={editingBook}
          onUpdated={() => {
            setEditingBook(null);
            handleRefresh();
          }}
          onCancel={() => setEditingBook(null)}
        />
      ) : (
        <BookForm onBookAdded={handleRefresh} />
      )}

      <BookList key={refresh.toString()} onEdit={setEditingBook} />
    </div>
  );
};

export default App;
