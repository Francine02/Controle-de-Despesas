import { useState } from "react";
import { BeginImg } from "../components/BeginImg";
import { ButtonForm } from "../components/ButtonForm";
import { Form } from "../components/Form";
import { useNavigate } from 'react-router-dom';

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://controle-de-despesas-ptt3.onrender.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }) //Envia no body os valores dos inputs
            }) //Faz a requisição para o meu endpoint de login

            if (response.ok) {//Com base na requisição, guardada na variavel "reponse", verifica se o retorno foi 'ok': 200
                const data = await response.json() //Converte para json
                localStorage.setItem('token', data.token) // Salva o token JWT
                console.log("ok")
                navigate('/expense/all') // Redireciona para a Home após o login
            } else {
                alert("Senha ou Email inválido!!") //Alerta para caso algum dos campos estejam errados: 403
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error)
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 my-10 mx-10 sm:mx-36 sm:my-24 lg:my-0 lg:mx-0">
            <BeginImg />
            <div className="py-14 lg:py-5 text-center lg:mx-32 lg:my-14">
                <h1 className="text-3xl sm:text-4xl font-black tracking-wide mb-12 sm:mb-16">Login</h1>
                <form className="inline-grid space-y-7 sm:space-y-9 w-full">
                    <Form
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        img="https://img.icons8.com/?size=100&id=60688&format=png&color=000000"
                        type="email"
                        placeholder="E-mail" />
                    <Form
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        img="https://img.icons8.com/?size=100&id=15454&format=png&color=000000"
                        type="password"
                        placeholder="Senha" />
                    <ButtonForm onclick={handleLogin} color="bg-[#4c0192]" text="Entrar" />
                    <p className="text-sm sm:text-base font-bold">Não tem uma conta? <a onClick={() => navigate('/auth/register')} className="text-[#1ecebc] font-black hover:opacity-70 cursor-pointer"> Cadastre-se</a></p>
                </form>
            </div>
        </div>
    )
}