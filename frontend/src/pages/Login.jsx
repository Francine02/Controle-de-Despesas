import { BeginImg } from "../components/BeginImg";
import { ButtonForm } from "../components/ButtonForm";
import { Form } from "../components/Form";
import { useNavigate } from 'react-router-dom';

export function Login() {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 my-10 mx-10 sm:mx-36 sm:my-24 lg:my-0 lg:mx-0">
            <BeginImg/>
            <div className="py-14 lg:py-5 text-center lg:mx-32 lg:my-14">
                <h1 className="text-3xl sm:text-4xl font-black tracking-wide mb-12 sm:mb-16">Login</h1>
                <form className="inline-grid space-y-7 sm:space-y-9 w-full">
                    <Form img="https://img.icons8.com/?size=100&id=60688&format=png&color=000000" type="email" placeholder="E-mail" />
                    <Form img="https://img.icons8.com/?size=100&id=15454&format=png&color=000000" type="password" placeholder="Senha" />
                    <ButtonForm color="bg-[#4c0192]" text="Entrar" />
                    <p className="text-sm sm:text-base font-bold">Não tem uma conta? <a onClick={() => navigate('/auth/register')} className="text-[#1ecebc] font-black hover:opacity-70 cursor-pointer"> Cadastre-se</a></p>
                </form>
            </div>
        </div>
    )
}