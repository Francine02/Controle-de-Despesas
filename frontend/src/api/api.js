export const createExpense = async (data) => {
    const token = localStorage.getItem('token');
    const response = await fetch('https://controle-de-despesas-production.up.railway.app/expense/add', {
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
    const response = await fetch(`https://controle-de-despesas-production.up.railway.app/expense/${id}`, {
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
