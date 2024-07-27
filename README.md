classDiagram
    class Usuario {
        - Long id
        - String username
        - String password
        - String email
        + register()
        + login()
    }

    class Despesa {
        - Long id
        - String description
        - BigDecimal amount
        - LocalDate date
        - Categoria category
        - Usuario user
        + addExpense()
        + getExpense()
        + updateExpense()
        + deleteExpense()
        + getExpensesByUser()
    }

    enum Categoria {
        Alimentacao
        Transporte
        Lazer
        Saude
        Outros
    }

    Usuario "1" --> "0..*" Despesa : owns
    Despesa "1" --> "1" Usuario : belongs to
