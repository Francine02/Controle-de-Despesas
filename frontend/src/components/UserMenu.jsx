import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export function UserMenu() {
    const [openBar, setOpenBar] = useState(false)
    const navigate = useNavigate()

    const handleOpenMenu = () => {
        setOpenBar(!openBar)
    }

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/auth/login');
    }

    return (
        <div className={` ${openBar ? 'shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-24 h-32 rounded-xl overflow-hidden' : 'bg-white'} fixed`}>
            <img
                onClick={handleOpenMenu}
                src="https://img.icons8.com/?size=100&id=7819&format=png&color=000000"
                alt="Usuário menu"
                className="w-12 opacity-70 cursor-pointer" />

            <div className={`pt-8 ${openBar ? 'block' : 'hidden'} p-2`}>
                <button onClick={logout} className="inline-flex items-center">
                    <img src="https://img.icons8.com/?size=100&id=j8vtslxN0LJo&format=png&color=000000" alt="sair" className="w-8" />
                    <p className="font-bold">Sair</p>
                </button>
            </div>
        </div>
    )
}