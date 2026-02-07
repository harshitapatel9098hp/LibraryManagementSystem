import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/dashboard">
          Library System
        </Link>
        <div>
          <Link className="btn btn-outline-light me-2" to="/books">
            Books
          </Link>
          <Link className="btn btn-outline-light me-2" to="/books/add">
            Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
