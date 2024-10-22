import { NextResponse } from 'next/server';
import { readJsonFile, writeJsonFile } from '../../jsonUtils';


function generatePasswordId(passwords) {
    const maxId = passwords.length > 0 ? Math.max(...passwords.map(p => p.id || 0)) : 0;
    return maxId + 1;
}



export async function POST(req) {
    const newUser = await req.json();
    const data = await readJsonFile();
    const usuarioAlvo = data.find(u => u.id === newUser.id)
    console.log(usuarioAlvo)
    if (usuarioAlvo) {
        const newPasswordId = generatePasswordId(usuarioAlvo.passwords);
        usuarioAlvo.passwords.push({
            id: newPasswordId,
            titulo: newUser.titulo,
            usuario: newUser.usuario,
            senha: newUser.senha
        });

        await writeJsonFile(data);
        return NextResponse.json({ message: 'Cadastrado com sucesso!', status: true });
    }
}