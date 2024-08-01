package com.backend.service;

import java.util.List;

import com.backend.entities.Expense;

public interface ExpenseService { //Nomes das funções do ExpenseServiceImpl
    Expense saveExpense(Expense expense);//Salva a despesa
    List<Expense> getAllExpenses();//Recupera toda a lista de despesas
    Expense updateExpense(Long id, Expense expense);//Atualiza com base no id
    void deleteExpense(Long id);//Exclui com base no id
}
