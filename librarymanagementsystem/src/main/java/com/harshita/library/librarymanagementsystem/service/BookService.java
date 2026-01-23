package com.harshita.library.librarymanagementsystem.service;


import org.springframework.stereotype.Service;

import com.harshita.library.librarymanagementsystem.exception.ResourceNotFoundException;
import com.harshita.library.librarymanagementsystem.model.Book;
import com.harshita.library.librarymanagementsystem.repository.BookRepository;

import java.util.List;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBookById(Long id) {
       return bookRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Book not found"));


    }

    public Book updateBook(Long id, Book book) {
        Book existing = getBookById(id);
        existing.setTitle(book.getTitle());
        existing.setAuthor(book.getAuthor());
        existing.setCategory(book.getCategory());
        existing.setQuantity(book.getQuantity());
        return bookRepository.save(existing);
    }

    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}
