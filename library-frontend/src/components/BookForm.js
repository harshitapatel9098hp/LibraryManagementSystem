// import React, { useState } from "react";

// function BookForm({ onSubmit }) {
//   const [book, setBook] = useState({
//     title: "",
//     author: ""
//   });

//   const handleChange = (e) => {
//     setBook({ ...book, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(book);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="title"
//         placeholder="Book Title"
//         className="form-control mb-2"
//         onChange={handleChange}
//         required
//       />

//       <input
//         type="text"
//         name="author"
//         placeholder="Author Name"
//         className="form-control mb-2"
//         onChange={handleChange}
//         required
//       />

//       <button className="btn btn-primary">
//         Save Book
//       </button>
//     </form>
//   );
// }

// export default BookForm;


import React, { useEffect, useState } from "react";

function BookForm({ onSubmit, initialData }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
    quantity: "",
  });

  // For Edit Book
  useEffect(() => {
    if (initialData) {
      setBook(initialData);
    }
  }, [initialData]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Book Title */}
      <div className="mb-3">
        <label className="form-label">Book Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Enter book title"
          value={book.title}
          onChange={handleChange}
          required
        />
      </div>

      {/* Author */}
      <div className="mb-3">
        <label className="form-label">Author</label>
        <input
          type="text"
          name="author"
          className="form-control"
          placeholder="Enter author name"
          value={book.author}
          onChange={handleChange}
          required
        />
      </div>

      {/* ISBN */}
      <div className="mb-3">
        <label className="form-label">ISBN</label>
        <input
          type="text"
          name="isbn"
          className="form-control"
          placeholder="Enter ISBN"
          value={book.isbn}
          onChange={handleChange}
        />
      </div>

      {/* Category */}
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          name="category"
          className="form-select"
          value={book.category}
          onChange={handleChange}
          required
        >
          <option value="">Select category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Technology">Technology</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>
      </div>

      {/* Quantity */}
      <div className="mb-4">
        <label className="form-label">Quantity</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          placeholder="Enter quantity"
          value={book.quantity}
          onChange={handleChange}
          min="1"
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="addbook-btn w-100">
        Save Book
      </button>
    </form>
  );
}

export default BookForm;
