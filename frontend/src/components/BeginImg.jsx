import img from "../assets/login-image.png";

export function BeginImg() {
    return (
        <div className="flex justify-center items-center lg:bg-[#fff1df]">
            <img src={img} alt="imagem animada de uma mulher olhando para tabela de despesas" className="w-32 sm:w-48 lg:h-auto lg:w-auto lg:px-28 lg:py-14 lg:mt-10" />
        </div>
    )
}