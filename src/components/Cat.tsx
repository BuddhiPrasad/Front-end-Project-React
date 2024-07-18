import React from 'react'

import Feature3Next from '../../public/assets/Feature3Next.svg'
import Image from 'next/image'

const Cat = () => {
  return (
    <div className='w-full rounded-[16px] bg-gradient-to-r from-fuchsia-500 to-pink-500 py-[52px] px-[42px] text-center lg:my-[60px] lg:px-[200px] lg:py-[60px]'>
      <h1 className='text-white text-[32px] font-medium lg:text-[56px]'>Monitor your website like a pro</h1>
      <p className='text-white pt-6 font-medium lg:text-[18px]'>Join over 800+ happy site owners boosting productivity and efficiency!</p>

      <div className='mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]'>
        <button className='py-[16px] px-[32px] bg-white rounded-[4px] text-pink-600 w-fit font-medium'>
            Try for Free
        </button>

        <button className='flex w-full items-center justify-center gap-x-3 mt-[32px] text-white font-medium lg:w-fit lg:mt-0'>
            Contact Sale <span><Image src={Feature3Next} alt='Feature3Next'/></span>
        </button>
      </div>
    </div>
  )
}

export default Cat
