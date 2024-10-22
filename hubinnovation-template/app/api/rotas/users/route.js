
import { NextResponse } from 'next/server';

import { readJsonFile, writeJsonFile } from '../../jsonUtils';


export async function POST(req) {
    const request = await req.json();
    const data = await readJsonFile();
    const usuarioAlvo = data.find(u => u.id === request.id)
    return NextResponse.json({ message: 'Sucesso', data: usuarioAlvo });
}

export async function DELETE(req) {
    const { userId, passwordId } = await req.json();
    const data = await readJsonFile();

    const usuarioAlvo = data.find(u => u.id === userId);

    if (usuarioAlvo) {
        
        usuarioAlvo.passwords = usuarioAlvo.passwords.filter(p => p.id !== passwordId);

        
        await writeJsonFile(data);
        return NextResponse.json({ message: 'Senha excluída com sucesso!', status: true });
    }

    return NextResponse.json({ message: 'Usuário ou senha não encontrados', status: false });
}