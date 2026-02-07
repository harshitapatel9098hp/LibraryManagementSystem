import React, { useEffect, useState } from "react";
import BookTable from "../components/BookTable";
import { getAllBooks, deleteBook } from "../services/bookService"; // small 'b'

const BookList = () => {
  const [books, setBooks] = useState([]);

  // GET books
  const fetchBooks = async () => {
    try {
      const response = await getAllBooks();
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // DELETE book
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (!confirmDelete) return;

    try {
      await deleteBook(id);
      fetchBooks(); // refresh list
    } catch (error) {
      console.error("Error deleting book", error);
    }
  };

  // EDIT book (abhi sirf console)
  const handleEdit = (book) => {
    console.log("Edit clicked:", book);
    // next step: navigate to edit page / open modal
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Books List</h2>

      <BookTable
        books={books}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default BookList;


// import React, { useEffect, useState } from "react";
// import BookTable from "./BookTable";
// import BookForm from "./BookForm";
// import { getAllBooks, addBook, updateBook, deleteBook } from "../services/BookService";

// const BookList = () => {
//   const [books, setBooks] = useState([]);
//   const [bookToEdit, setBookToEdit] = useState(null);

//   const fetchBooks = async () => {
//     try {
//       const response = await getAllBooks();
//       setBooks(response.data);
//     } catch (error) {
//       console.error("Error fetching books", error);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const handleSave = async (book) => {
//     try {
//       if (book.id) {
//         await updateBook(book.id, book);
//         setBookToEdit(null);
//       } else {
//         await addBook(book);
//       }
//       fetchBooks();
//     } catch (error) {
//       console.error("Error saving book", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteBook(id);
//       fetchBooks();
//     } catch (error) {
//       console.error("Error deleting book", error);
//     }
//   };

//   const handleEdit = (book) => setBookToEdit(book);

//   const handleCancel = () => setBookToEdit(null);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Library Management</h1>
//       <BookForm bookToEdit={bookToEdit} onSave={handleSave} onCancel={handleCancel} />
//       <BookTable books={books} onEdit={handleEdit} onDelete={handleDelete} />
//     </div>
//   );
// };

// export default BookList;
