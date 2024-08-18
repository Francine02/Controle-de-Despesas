import { useEffect, useState } from 'react';
import { Expenses } from "../components/Expenses";
import { MenuBottom } from "../components/MenuBottom";
import { UserMenu } from "../components/UserMenu";

export function Home() {
    const [expenses, setExpenses] = useState([]) // Para armazenar a lista de despesas

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
    },[])

    return (
        <div className="h-screen py-7 px-6 sm:px-8 lg:px-12 lg:py-5">
            <UserMenu />

            <MenuBottom />

            <div className="grid grid-cols-1 sm:grid-cols-2 pt-16 gap-5">
                {expenses.map((expense) => (//Percorre as despesas
                    <Expenses
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
