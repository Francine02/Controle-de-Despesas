import { deleteExpense } from "../../api/api";

export function Expenses({ titulo, description, amount, date, category, setIdExpense, id, setCrud, handleDelete }) {
    const handleEdit = () => {//Prepara o formulário para edição da despesa
        setIdExpense({ id, name: titulo, description, amount, date, category })
        setCrud('edit')
    }

    const handleDeleteClick = async () => { //Exclui a despesa ao clicar no botão de deletar
        try {
            await deleteExpense(id)
            handleDelete(id)
            console.log('Despesa excluída com sucesso')
            setCrud(null)
        } catch (error) {
            console.error('Erro ao excluir despesa:', error)
        }
    }

    return (
        <div className="w-full h-40 overflow-auto p-5 rounded-xl border border-gray-300">
            <div className="flex justify-between">
                <h1 className="text-lg lg:text-2xl font-semibold border-b-4 border-[#4c0192] max-w-md">{titulo}</h1>
                <div className="space-x-5">
                    <button onClick={handleEdit}>
                        <img src="https://img.icons8.com/?size=100&id=11762&format=png&color=000000" alt="editar" className="w-5 hover:border-b-4 hover:border-[#4c0192]"/>
                    </button>
                    <button onClick={handleDeleteClick}>
                        <img src="https://img.icons8.com/?size=100&id=99961&format=png&color=000000" alt="editar" className="w-5 hover:border-b-4 hover:border-[#4c0192]"/>
                    </button>
                </div>
            </div>
            <p className="text-sm lg:text-base font-medium flex justify-end py-2 max-w-50"><span className="px-5 border-r-4 border-[#1ecebc]">R$: {amount}</span> <span className="px-5 border-r-4 border-[#1ecebc]">{date}</span> <span className="px-5 max-w-32 lg:min-w-32">{category}</span></p>

            <p className="text-base">{description}</p>
        </div>
    )
}