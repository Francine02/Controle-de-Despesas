import { useState } from 'react';

export function ExpenseForm() {
    const [isOpen, setIsOpen] = useState(true)
    const [category, setCategory] = useState('')

    if (!isOpen) return null

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto border border-gray-300 relative">
            <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setIsOpen(false)}>&times;
            </button>
            <h2 className="text-black text-lg font-semibold mb-4"></h2>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                    <input
                        type="text"
                        placeholder="Título"
                        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192]"/>
                    <input
                        type="number"
                        placeholder="Valor"
                        className="w-full sm:w-32 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192]"/>
                </div>

                <textarea
                    placeholder="Descrição"
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192] max-h-28 resize-none"/>
                <input
                    type="date"
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4c0192] w-full"/>

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

                <button className="bg-[#4c0192] text-white p-2 rounded-lg hover:bg-[#1ecebc] transition-all"></button>
            </div>
        </div>
    )
}
