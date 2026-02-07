import axios from "axios";

// Base URL of your backend API
const BASE_URL = "http://localhost:8080/api/books";

// GET all books
export const getAllBooks = () => {
  return axios.get(BASE_URL);
};

// ADD a new book
export const addBook = (book) => {
  return axios.post(BASE_URL, book);
};

// DELETE a book by ID
export const deleteBook = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
