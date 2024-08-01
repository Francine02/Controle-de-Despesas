package com.backend.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entities.Expense;
import com.backend.service.ExpenseService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/expense")
public class ExpenseController {
    private final ExpenseService expenseService;

    @PostMapping("/add")
    public ResponseEntity<?> addExpanse(@RequestBody Expense expense){//Despesa a ser adiciona no corpo da requisição
        try {
            Expense savedExpense = expenseService.saveExpense(expense);//Chama o serviço para salvar a despesa

            return ResponseEntity.ok(savedExpense);//Retorna uma resposta

        } catch (Exception exception) {//Caso de erro

            return ResponseEntity.status(500).body("Erro adicionando despesa: " + exception.getMessage());
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllExpenses() {
        try {
            // Obtém todas as despesas do repositório
            List<Expense> expenses = expenseService.getAllExpenses();
            return ResponseEntity.ok(expenses); // Retorna a lista de despesas
        } catch (Exception exception) {
            // Retorna uma resposta de erro caso ocorra uma exceção
            return ResponseEntity.status(500).body("Erro ao buscar despesas: " + exception.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateExpense(@PathVariable Long id, @RequestBody Expense expense) {//Extrai o id da despesa da URL
        try {
            Expense updatedExpense = expenseService.updateExpense(id, expense); //Atualiza a despesa
            return ResponseEntity.ok(updatedExpense);

        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();

        } catch (Exception exception) {
            return ResponseEntity.status(500).body("Erro ao atualizar despesa: " + exception.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteExpense(@PathVariable Long id){
        try {
            expenseService.deleteExpense(id); //Deleta a despesa com base no id
            return ResponseEntity.ok().build();
        } catch (Exception exception){
            return ResponseEntity.status(500).body("Erro ao deletar despesa: " + exception.getMessage());
        }
    }
}
