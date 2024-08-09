import React from 'react'

const BtnIcon = ({ icon, text, variant, active }) => {
    return (
        <>
            {variant === 'blue' && (
                <button className={`text-sm font-medium border ${active ? 'border-blue-600' : 'border-neutral-100'} text-blue-600 bg-white/40 outline-none px-4 py-1.5 rounded flex items-center gap-2`}>
                    {icon}
                    {text}
                </button>
            )}
            {variant === 'neutral' && (
                <button className={`text-sm font-medium border ${active ? 'border-neutral-600' : 'border-neutral-100'} text-neutral-900 bg-white/40 outline-none px-4 py-1.5 rounded flex items-center gap-2`}>
                    {icon}
                    {text}
                </button>
            )}
            {variant === 'teal' && (
                <button className={`text-sm font-medium border ${active ? 'border-teal-600' : 'border-neutral-100'} text-teal-500 bg-white/40 outline-none px-4 py-1.5 rounded flex items-center gap-2`}>
                    {icon}
                    {text}
                </button>
            )}
        </>
    )
}

export default BtnIcon