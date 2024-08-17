export function Form({ img, type, placeholder, value, onChange }) {
    return (
        <div className="w-full relative">
            <input
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className="w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] placeholder:pl-2 bg-[#f5f5f59c] py-2 px-4 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pl-10 border"
            />
            <img src={img} className="absolute top-1/2 left-3 w-5 h-5 transform -translate-y-1/2 opacity-80"></img>
        </div>
    )
}