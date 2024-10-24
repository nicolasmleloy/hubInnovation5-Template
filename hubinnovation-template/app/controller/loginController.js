export async function VerificaLogin(usuario, senha){
    const response = await fetch("/api/rotas/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({usuario, senha})
    })

    const dados = await response.json()
    localStorage.setItem("userId", dados.userId)

    return dados
}