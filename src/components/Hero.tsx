import React from 'react'


import Image from 'next/image';

import Heroi from '../../public/assets/hero.svg'

const Hero = () => {
  return (
    <div className='pt-3 lg:pt-10'>
      <div className='px-[20px] md:px-[160px] lg:px-[200px]'>
        <h1 className='text-4xl pt-3 text-center'>Create content at scale. Social media using AI & Automation</h1>
        <p className='pt-5 text-center'>
             Create, schedule, publish, and easily manage your social media content at scale with Otrix -AI Powered platform.
        </p>
        <div className='flex w-full pt-8 justify-center gap-4'>
            <button className='bg-indigo-600 w-1/2 py-4 px-8 text-white rounded-xl lg:w-fit'>Get started</button>
            <button className='w-1/2 py-4 px-8 text-indigo-600 rounded-xl lg:w-fit'>View Pricing</button>
        </div>
      </div>

      {/*<div className='px-[20px] md:px-[160px] lg:px-[280px]'>
        <Image src={Heroi} alt='Hero'/>
      </div>*/}
    </div>
  )
}

export default Hero
