import { useEffect, useState } from 'react';
import { Expenses } from "../components/home/Expenses";
import { MenuBottom } from "../components/home/MenuBottom";
import { UserMenu } from "../components/home/UserMenu";
import { ExpenseForm } from '../components/home/ExpenseForm';
import { Info } from '../components/home/Info';

export function Home() {
    const [expenses, setExpenses] = useState([]) // Para armazenar a lista de despesas
    const [crud, setCrud] = useState(null) // Define o estado de operação: 'create', 'edit' ou null
    const [idExpense, setIdExpense] = useState(null) // Armazena a despesa selecionada para edição

    const token = localStorage.getItem('token') // Pegando o token do localStorage

    const getExpenses = async () => {
        try {
            const response = await fetch('https://controle-de-despesas-h7z5.onrender.com/expense/all', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            const jsonData = await response.json() //Transformando a resposta para json
            
            setExpenses(jsonData)//Colocando o json no useState

        } catch (error) {
            console.error('Erro:', error)
        }
    }

    // Chama a função getExpenses ao montar o componente
    useEffect(() => {
        getExpenses()
    }, [])

    const handleDelete = (id) => {// Função para remover uma despesa da lista
        setExpenses(expenses.filter(expense => expense.id !== id))
    }

    return (
        <div className="h-screen py-7 px-6 sm:px-8 lg:px-12 lg:py-5">
            <UserMenu />
            <Info expenses={expenses}/>

            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <ExpenseForm
                    idExpense={idExpense}
                    expenses={expenses}
                    setCrud={setCrud}
                    crud={crud}
                    getExpenses={getExpenses}
                />
            </div>

            <MenuBottom setCrud={setCrud} />

            <div className="grid grid-cols-1 sm:grid-cols-2 pt-16 gap-5">
                {expenses.map((expense) => (
                    <Expenses
                        setIdExpense={setIdExpense}
                        id={expense.id}
                        key={expense.id}
                        titulo={expense.name}
                        description={expense.description}
                        amount={expense.amount}
                        date={expense.date}
                        category={expense.category}
                        setCrud={setCrud}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}
