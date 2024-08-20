import React from 'react';

export function Info({ expenses }) {
    // Cálculo do valor total das despesas
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0) //reduce itera sobre cada despesa na lista expenses, acumulando o valor de expense.amount em total

    // Cálculo do valor total das despesas do mês
    const currentMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear()
    const monthlyExpenses = expenses //Filtra as despesas para incluir apenas aquelas que pertencem ao mês e ano atuais
        .filter(expense => { //
            const expenseDate = new Date(expense.date)
            return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear
        })
        .reduce((total, expense) => total + expense.amount, 0) // Calcula o total dessas despesas filtradas, semelhante ao cálculo do total geral

    // Encontrar a categoria mais usada
    const categoryCount = expenses.reduce((count, expense) => { // Conta o número de vezes que cada categoria aparece nas despesas
        count[expense.category] = (count[expense.category] || 0) + 1 //Para cada despesa, incrementa a contagem da categoria correspondente. Se a categoria não existir ainda no objeto count, inicia com 0
        return count
    }, {})

    const mostUsedCategory = Object.entries(categoryCount).reduce((max, [category, count]) => {// Converte o objeto categoryCount em uma matriz de pares [categoria, contagem] usando Object.entries
        return count > max.count ? { category, count } : max // Inicialmente define { category: 'Nenhuma', count: 0 } como o valor máximo
    }, { category: 'Nenhuma', count: 0 }) // Atualiza mostUsedCategory se a contagem de uma categoria for maior que a contagem máxima atual

    return (
        <div className="pt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
            <div className=" bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#4c0192]">Total de Despesas</h3>
                <p className="text-xl font-bold">R$ {totalExpenses.toFixed(2)}</p>
            </div>

            <div className=" bg-[#1ecebc] p-4 rounded-lg shadow-lg text-white">
                <h3 className="text-lg font-semibold">Despesas do Mês</h3>
                <p className="text-xl font-bold ">R$ {monthlyExpenses.toFixed(2)}</p>
            </div>

            <div className=" bg-[#4c0192] p-4 rounded-lg shadow-lg text-white">
                <h3 className="text-lg font-semibold">Categoria Mais Usada</h3>
                <p className="text-xl font-bold">{mostUsedCategory.category}</p>
            </div>
        </div>
    )
}
