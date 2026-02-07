package com.harshita.library.librarymanagementsystem.dto;

import lombok.*;
@Data
@NoArgsConstructor


public class BookDto {

    private Long id;
    private String title;
    private String author;
    private String genre;
    private boolean issued;

    
}
