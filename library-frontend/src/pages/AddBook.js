import React from "react";
import BookForm from "../components/BookForm";
import { addBook } from "../services/bookService"; // small b
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

function AddBook() {
  
  const navigate = useNavigate();

  // Rename local function to avoid conflict
  const saveBookHandler = (book) => {
    addBook(book).then(() => navigate("/books"));
  };

  // return (
  //   <div className="container mt-4">
  //     <h2>Add Book</h2>
  //     <BookForm onSubmit={saveBookHandler} />
  //   </div>
  // );
  return (
  <div className="addbook-page">
    <div className="addbook-card">
      <h2>Add Book</h2>

      <BookForm onSubmit={saveBookHandler} />

      <span className="back-link" onClick={() => navigate("/books")}>
        ← Back to Books
      </span>
    </div>
  </div>
);

}

export default AddBook;
