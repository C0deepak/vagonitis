import React from 'react'

const BtnSecondary = ({ text, theme }) => {
    return (
        <button className={`text-sm font-semibold border ${theme && 'border-teal-600 text-teal-600'} border-black text-black outline-none px-4 py-2 rounded`}>
            {text}
        </button>
    )
}

export default BtnSecondary