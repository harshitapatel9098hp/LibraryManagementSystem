package com.harshita.library.librarymanagementsystem.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.harshita.library.librarymanagementsystem.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}
