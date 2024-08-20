import { useState, useEffect } from 'react';
import { createExpense, updateExpense } from '../../api/api';

export function ExpenseForm({ crud, idExpense, getExpenses }) {
    const [isOpen, setIsOpen] = useState(false)
    const [category, setCategory] = useState('') // Armazena os dados da despesa
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => { //Quando o crud for 'edit', o formulário é preenchido com os dados da despesa selecionada
        if (crud === 'edit') {
            setIsOpen(true)
            setCategory(idExpense?.category || '')
            setName(idExpense?.name || '')
            setAmount(idExpense?.amount || '')
            setDescription(idExpense?.description || '')
            setDate(idExpense?.date ? idExpense.date.slice(0, 10) : '')
        } else if (crud === 'create') {// Limpa os campos para criar uma nova despesa
            setIsOpen(true)
            setCategory('')
            setName('')
            setAmount('')
            setDescription('')
            setDate('')
        }
    }, [crud, idExpense])

    if (!isOpen) return null

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            name,
            description,
            amount: parseFloat(amount), // Converte o valor para número
            date, // Data já no formato YYYY-MM-DD
            category
        }

        try {
            if (crud === 'edit') {
                await updateExpense(idExpense.id, data)
                console.log('Despesa atualizada com sucesso')
            } else {
                await createExpense(data)
                console.log('Despesa criada com sucesso')
            }
            getExpenses()
            setIsOpen(false)
        } catch (error) {
            console.error('Erro ao salvar despesa:', error)
        }
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto border border-gray-300 relative">
            <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setIsOpen(false)}>&times;
            </button>
            <h2 className="text-black text-lg font-semibold mb-4">
                {crud === 'edit' ? 'Editar Despesa' : 'Criar Despesa'}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192]" />
                    <input
                        type="number"
                        placeholder="Valor"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full sm:w-32 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192]" />
                </div>

                <textarea
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192] max-h-28 resize-none" />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192] w-full" />

                <div className="flex flex-col space-y-2">
                    <label className="text-black font-semibold">Categorias</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192]">
                        <option disabled>Selecione uma categoria</option>
                        <option value="ALIMENTACAO">ALIMENTAÇÃO</option>
                        <option value="TRANSPORTE">TRANSPORTE</option>
                        <option value="LAZER">LAZER</option>
                        <option value="SAUDE">SAÚDE</option>
                        <option value="OUTROS">OUTROS</option>
                    </select>
                </div>

                <button type="submit" className="bg-[#4c0192] text-white p-2 rounded-lg hover:bg-[#1ecebc] transition-all">
                    {crud === 'edit' ? 'Salvar Alterações' : 'Criar Despesa'}
                </button>
            </form>
        </div>
    )
}