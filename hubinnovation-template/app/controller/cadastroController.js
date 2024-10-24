export async function CadastrarNovaSenha(id,titulo,usuario,senha) {
    try {
        const response = await fetch('/api/rotas/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id,titulo,usuario, senha }),
        });
        const dados = await response.json()
        console.log(dados)
        return dados
    } catch (error) {
        console.error('Erro ao adicionar :', error);
    }
    
}