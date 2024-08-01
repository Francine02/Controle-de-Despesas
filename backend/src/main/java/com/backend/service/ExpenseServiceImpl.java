package com.backend.service;

import com.backend.entities.Expense;
import com.backend.repositories.ExpenseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ExpenseServiceImpl implements ExpenseService {//Implementa a interface ExpenseService, fornecendo a lógica concreta para os métodos definidos na interface.

    private final ExpenseRepository expenseRepository;

    @Override
    public Expense saveExpense(Expense expense) {
        return expenseRepository.save(expense);//Usa o método save do ExpenseRepository para persistir a despesa.
    }

    @Override
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();//Usa o método findAll do ExpenseRepository para obter a lista de despesas
    }

    @Override
    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);//Usa o método deleteById do ExpenseRepository
    }

    @Override
    public Expense updateExpense(Long id, Expense expense) {//Atualiza uma despesa existente no banco de dados
        if (!expenseRepository.existsById(id)) {//Verifica se a despesa com o id fornecido existe
            throw new IllegalArgumentException("Despesa não encontrada: " + id);//Se não exister
        }
        expense.setId(id);//Se existir, atualiza o id da despesa com o id fornecido, para garantir que o ID não seja alterado
        return expenseRepository.save(expense);//Salva as mudanças
    }
}
