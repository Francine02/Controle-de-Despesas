import { useEffect, useState } from 'react';
import { Expenses } from "../components/home/Expenses";
import { MenuBottom } from "../components/home/MenuBottom";
import { UserMenu } from "../components/home/UserMenu";
import { ExpenseForm } from '../components/home/ExpenseForm';

export function Home() {
    const [expenses, setExpenses] = useState([]) // Para armazenar a lista de despesas
    const [crud, setCrud] = useState(null)
    const [idExpense, setIdExpense] = useState(null)

    const token = localStorage.getItem('token') // Pegando o token do localStorage

    const getExpenses = async () => {
        try {
            const response = await fetch('https://controle-de-despesas-production.up.railway.app/expense/all', {
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

    return (
        <div className="h-screen py-7 px-6 sm:px-8 lg:px-12 lg:py-5">
            <UserMenu />

            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <ExpenseForm idExpense={idExpense} expenses={expenses} crud={crud}/>
            </div>

            <MenuBottom setCrud={setCrud}/>

            <div className="grid grid-cols-1 sm:grid-cols-2 pt-16 gap-5">
                {expenses.map((expense) => (//Percorre as despesas
                    <Expenses
                        setIdExpense={setIdExpense}
                        crud={crud}
                        id={expense.id}
                        key={expense.id}
                        titulo={expense.name}
                        description={expense.description}
                        amount={expense.amount}
                        date={expense.date}
                        category={expense.category}
                    />
                ))}
            </div>
        </div>
    );
}
