```mermaid
classDiagram
  class User {
    - Long id
    - String username
    - String password
    - String email
    + register()
    + login()
  }

  class Expense {
    - Long id
    - String description
    - BigDecimal amount
    - LocalDate date
    - Category category
    - User user
    + addExpense()
    + getExpense()
    + updateExpense()
    + deleteExpense()
    + getExpensesByUser()
  }

  class Category {
    << enumeration >>
    + ALIMENTACAO
    + TRANSPORTE
    + LAZER
    + SAUDE
    + OUTROS
  }

  User "1" --> "0..*" Expense
