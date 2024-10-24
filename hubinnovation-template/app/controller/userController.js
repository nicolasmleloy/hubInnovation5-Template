export async function GetUserPasswords(id) {
    try {
        const response = await fetch('/api/rotas/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id}),
        });
        const dados = await response.json()
        return dados.data.passwords;
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
    }
    
}

export async function DeletePassword(userId,passwordId){
    const response = await fetch('/api/rotas/users', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, passwordId }),
    });

    const result = await response.json();
    return result
}