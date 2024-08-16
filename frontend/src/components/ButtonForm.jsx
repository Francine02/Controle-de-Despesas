export function ButtonForm({ color, text, onclick }) {
    return (
        <div>
            <button
                onclick={onclick}
                className={`shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-lg sm:text-xl py-2 px-4 sm:py-3 w-full mt-10 sm:mt-14 lg:mt-10 rounded-lg text-white font-black ${color} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-50`}>
                {text}
            </button>
        </div>
    )
}