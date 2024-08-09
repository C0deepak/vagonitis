import React from 'react'
import BtnPrimary from '../common/Btn/BtnPrimary'
import BtnSecondary from '../common/Btn/BtnSecondary'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 py-2 px-16 flex items-center justify-between'>
      <nav className='px-3 py-1.5 bg-white flex items-center gap-4 rounded font-semibold text-sm'>
        <div className='flex items-center gap-4'>
          <img src="https://freelogopng.com/images/all_img/1685901477apple-logo-transparent.png" alt=""className='w-[72px]' />
        </div>
        <div className='p-2 rounded hover:bg-neutral-100'>Products</div>
        <div className='p-2 rounded hover:bg-neutral-100'>Features</div>
      </nav>

      <nav className='p-1.5 bg-white flex items-center gap-2 rounded'>
        <BtnSecondary text={'Sign In'} theme={true} />
        <BtnPrimary text={'Sign Up'} theme={true} />
      </nav>
    </div>
  )
}

export default Navbar