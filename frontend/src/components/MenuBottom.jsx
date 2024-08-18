export function MenuBottom() {

    return (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 w-auto z-50 rounded-xl bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex justify-center space-x-12">
                <button className="w-8 hover:border-b-4 hover:border-[#4c0192]">
                    <img src="https://img.icons8.com/?size=100&id=11762&format=png&color=000000" alt="editar" />
                </button>
                <button className="w-8 hover:border-b-4 hover:border-[#4c0192]">
                    <img src="https://img.icons8.com/?size=100&id=11255&format=png&color=000000" alt="adicionar" />
                </button>
                <button className="w-8 hover:border-b-4 hover:border-[#4c0192]">
                    <img src="https://img.icons8.com/?size=100&id=99961&format=png&color=000000" alt="excluir" />
                </button>
            </div>
        </div>
    )
}