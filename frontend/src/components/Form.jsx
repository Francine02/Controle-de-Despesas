export function Form({ type, placeholder }) {
    return (
        <div className="w-full">
            <input
                type={type}
                placeholder={placeholder}
                className="w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] placeholder:pl-2 bg-[#f5f5f59c] py-2 px-4 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
        </div>
    )
}