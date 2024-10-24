"use client"
import { DeletePassword, GetUserPasswords } from '@/app/controller/userController';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function Home() {
    const [userData, setUserData] = useState([]);
    const router = useRouter()

    async function GetUserData() {
        const dados = await GetUserPasswords(Number(localStorage.getItem("userId")));
        setUserData(dados);
    }

    async function handleDelete(passwordId){
        const resposta = await DeletePassword(Number(localStorage.getItem("userId")), passwordId)

        if(resposta.status){
            await GetUserData()
        }else{
            alert(resposta.message)
        }
    }

    useEffect(() => {
        GetUserData()
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 ">
            <div className="flex flex-col justify-center items-center ">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center mt-10">Bem-vindo</h1>
            </div>
            <div>
                <div className="flex justify-center items-center">
                    <button onClick={() => router.push(`/home/cadastro`)} className="bg-blue-600 text-white w-56 py-1 rounded-lg mb-6">Nova Senha</button>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {userData.map((item, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">{item.titulo}</h2>
                            <p className="text-gray-600 mb-1 ">Usuário: {item.usuario}</p>
                            <p className="text-gray-600 mb-4">Senha: {item.senha}</p>
                            <div className="flex gap-2 justify-end">
                                <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-4 py-2 rounded">
                                    Excluir
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}