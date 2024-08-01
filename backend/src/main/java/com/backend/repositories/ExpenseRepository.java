package com.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.entities.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

} 
