"use client"
import { CadastrarNovaSenha } from "@/app/controller/cadastroController";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Cadastro(){
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [titulo, setTitulo] = useState("")
    const router = useRouter()
    async function handleSubmit(event) {
        event.preventDefault()
        const dados = await CadastrarNovaSenha(Number(localStorage.getItem("userId")), titulo, usuario, senha)

        if (dados.status) {
            router.push(`/home`)
        }
    }
    return (
        <div className="flex items-center justify-center w-full h-screen">
        <div className="w-80 bg-slate-600 p-6 rounded-lg shadow-md">
            <h1 className="text-center mb-5  text-white">CADASTRO DE NOVA SENHA</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                    <label className="block text-white mb-1">Titulo</label>
                    <input
                        type="text"
                        placeholder="Digite o titulo"
                        className="w-full px-3 py-2 bg-gray-200 rounded"
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label className="block text-white mb-1">Usuário</label>
                    <input
                        type="text"
                        placeholder="Digite o usuário"
                        className="w-full px-3 py-2 bg-gray-200 rounded  "
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label className="block text-white mb-1">Senha</label>
                    <input
                        type="password"
                        placeholder="Digite a senha"
                        className="w-full px-3 py-2 bg-gray-200 rounded"
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <button
                    className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
                >
                    Cadastrar
                </button>
            </form>
        </div>
    </div>
    )
}