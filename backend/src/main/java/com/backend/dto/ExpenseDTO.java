package com.backend.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.backend.enums.Category;


public record ExpenseDTO(
    String name,
    String description,
    BigDecimal amount,
    LocalDate date,
    Category category
){}