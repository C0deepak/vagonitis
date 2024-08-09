import React from 'react'

const BtnPrimary = ({ text, theme }) => {
    return (
        <button className={`font-semibold text-sm text-white border ${theme && 'border-teal-600 bg-teal-600'} border-black bg-black outline-none px-4 py-2 rounded`}>
            {text}
        </button>
    )
}

export default BtnPrimary