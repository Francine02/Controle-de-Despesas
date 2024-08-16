import img from "../assets/login-image.png";
import { ButtonForm } from "../components/ButtonForm";
import { Form } from "../components/Form";

export function Login() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 my-10 mx-10 sm:mx-36 sm:my-24 lg:my-0 lg:mx-0">
            <div className="flex justify-center items-center lg:bg-[#fff1df]">
                <img src={img} alt="imagem animada de uma mulher olhando para tabela de despesas" className="w-32 sm:w-48 lg:h-auto lg:w-auto lg:px-28 lg:py-14 lg:mt-10" />
            </div>
            <div className="py-14 lg:py-5 text-center lg:mx-32 lg:my-14">
                <h1 className="text-3xl sm:text-4xl font-black tracking-wide mb-12 sm:mb-16">Login</h1>
                <form className="inline-grid space-y-7 sm:space-y-9 w-full">
                    <Form type="email" placeholder="E-mail" />
                    <Form type="password" placeholder="Senha" />
                    <ButtonForm color="bg-[#4c0192]" text="Entrar" />
                    <p className="text-sm sm:text-base font-bold">Não tem uma conta? <a href="" className="text-[#1ecebc] font-black hover:opacity-70">Cadastre-se</a></p>
                </form>
            </div>
        </div>
    )
}