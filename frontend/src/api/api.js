export const createExpense = async (data) => {
    const token = localStorage.getItem('token');
    const response = await fetch('https://controle-de-despesas-h7z5.onrender.com/expense/add', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        throw new Error('Erro ao criar despesa');
    }

    return await response.json();
}

export const updateExpense = async (id, data) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`https://controle-de-despesas-h7z5.onrender.com/expense/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        throw new Error('Erro ao atualizar despesa')
    }

    return await response.json()
}

export const deleteExpense = async (id) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`https://controle-de-despesas-h7z5.onrender.com/expense/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })

    if (!response.ok) {
        throw new Error('Erro ao excluir despesa')
    }
}