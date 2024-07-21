import Image from 'next/image'
import React from 'react'


import logo from '../../public/assets/logo - root code.png'

const Navvarrootcode = () => {
  return (

    <div className='bg-white navbarShadow z-100 sticky top-0 flex flex-col'>
      <div className='container flex justify-between items-center py-[24px] lg:py-0 lg:h-17 mx-[150px]'>
        <div className='hover:cursor-pointer'>
            <Image height={100} width={100} src={logo} alt='logo' className='h-7 md:h-9 lg:h-8 w-27 md:w-34 lg:w-30.5'/>
        </div>

        <div className='hidden lg:flex font-lg py-2 font-normal'>
            <h1 className='py-4'>Hello</h1>
            <h1>Hello2</h1>
            <h1>Hello3</h1>
            <h1>Hello4</h1>
            <h1>Hello4</h1>
            <h1>Hello4</h1>
        </div>
      </div>
    </div>
  )
}

export default Navvarrootcode
