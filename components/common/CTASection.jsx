import React from 'react'
import BtnPrimary from './Btn/BtnPrimary'

const CTASection = () => {
    return (
        <div className='relative px-16 py-20 flex flex-col items-center gap-8 justify-center'>
            <img src="https://framerusercontent.com/images/Xf7AUW1j1eqkcdYjhG6SQ7cnpJ4.svg" alt="" className='absolute top-4 left-4 w-60'/>
            <h1 className="text-6xl max-w-2xl font-bold text-center">Ready to focus on your creativity?</h1>
            <p className='font-semibold text-center max-w-2xl'>Vagon gives you the ability to create & render projects, collaborate, and stream applications with the power of the best hardware.</p>
            <BtnPrimary text={'Create Vagon Account'} />
            <img src="https://framerusercontent.com/images/PoX6bmE1XXzvbbB1s8v4XsEQUc.svg" alt="" className='absolute bottom-4 right-4 w-60'/>
        </div>
    )
}

export default CTASection