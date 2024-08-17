import { useState } from "react";
import { BeginImg } from "../components/BeginImg";
import { ButtonForm } from "../components/ButtonForm";
import { Form } from "../components/Form";
import { useNavigate } from 'react-router-dom';

export function CreateAcount() {
    const navigate = useNavigate();
    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch('https://controle-de-despesas-production.up.railway.app/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({userName: newName, email: newEmail, password: newPassword})
            })

            if (response.ok) {
                console.log("sucesso")
                alert("Usuário registrado com sucesso!")
                setTimeout(() => {
                    navigate('/auth/login');
                }, 6000); // Atraso de 6 segundos (6000 milissegundos)
            } else {
                alert("Preencha todos os campos!!")
            }
        }
        catch(error) {
            console.log('Erro ao registrar usuário: ', error)
        }
    }

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-10 mx-10 sm:mx-36 sm:my-24 lg:my-0 lg:mx-0">
                <BeginImg />
                <div className="py-12 lg:py-5 text-center lg:mx-32 lg:my-6">
                    <h1 className="text-3xl sm:text-4xl font-black tracking-wide mb-12 sm:mb-16">Cadastrar</h1>
                    <form className="inline-grid space-y-7 sm:space-y-8 w-full">
                        <Form
                            onChange={(e) => setNewName(e.target.value)}
                            value={newName}
                            img="https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000"
                            type="text"
                            placeholder="Nome" />

                        <Form
                            onChange={(e) => setNewEmail(e.target.value)}
                            value={newEmail}
                            img="https://img.icons8.com/?size=100&id=60688&format=png&color=000000"
                            type="email"
                            placeholder="E-mail" />

                        <Form 
                            onChange={(e) => setNewPassword(e.target.value)}
                            value={newPassword}
                            img="https://img.icons8.com/?size=100&id=15454&format=png&color=000000" 
                            type="password" 
                            placeholder="Senha" />
                        <ButtonForm onclick={handleRegister} color="bg-[#4c0192]" text="Criar" />
                        <p className="text-sm sm:text-base font-bold">Já possui uma conta? <a onClick={() => navigate('/auth/login')} className="text-[#1ecebc] font-black hover:opacity-70 cursor-pointer">Entrar</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}