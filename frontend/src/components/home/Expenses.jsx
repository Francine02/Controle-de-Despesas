export function Expenses({ titulo, description, amount, date, category }) {
    return (
        <div  className="w-full h-40 overflow-auto p-5 rounded-xl border border-gray-300">
            <div className="flex justify-between">
                <h1 className="text-xl lg:text-2xl font-semibold border-b-4 border-[#4c0192]">{titulo}</h1>
                <button className="py-1 px-4 bg-slate-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-full hidden"></button>
            </div>
            <p className="text-base font-medium flex justify-end py-2 max-w-50"><span className="px-5 border-r-4 border-[#1ecebc]">R$: {amount}</span> <span className="px-5 border-r-4 border-[#1ecebc]">{date}</span> <span className="px-5 border-r-4 border-[#1ecebc]">{category}</span></p>

            <p className="text-base">{description}</p>
        </div>
    )
}