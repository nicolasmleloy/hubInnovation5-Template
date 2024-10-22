import { NextResponse } from 'next/server';
import { readJsonFile, writeJsonFile } from '../../jsonUtils';

export async function POST(req) {
    const newUser = await req.json();
    const data = await readJsonFile();
    const usuarioAlvo = data.find(u => u.usuario === newUser.usuario && u.senha === newUser.senha)

    if (usuarioAlvo) {
        return NextResponse.json({ message: 'Login sucesso', userId: usuarioAlvo.id });
    } else {
        newUser.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
        newUser.passwords = []
        data.push(newUser);
        await writeJsonFile(data);
        return NextResponse.json({ message: 'User added successfully', userId: newUser.id });
    }
}