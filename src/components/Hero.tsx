import React from 'react'


import Image from 'next/image';


import Heroi from '../../public/assets/Gradient.svg'
import Image1 from '../../public/assets/Image.svg'

import Google from '../../public/assets/Google.svg'
import Slack from '../../public/assets/Slack.svg'
import Trustpilot from '../../public/assets/Trustpilot.svg'
import Cnn from '../../public/assets/CNN.svg'
import Cluth from '../../public/assets/Clutch.svg'



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

      <div className='relative flex h-full w-full justify-center'>
            <Image src={Heroi} alt='Hero' className='min-h-[500px] w-full object-cover lg:h-auto'/>
            <div className='absolute bottom-5 flex w-full flex-col items-center'>
                <Image src={Image1} alt='image1' className='-ml-4 h-[300px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]'/>
            </div>
      </div>

      <div className='flex w-full flex-col items-center'>
        <p className='text-white text-center'>Trusted by these companies</p>
        <div className='grid grid-cols-3 items-center justify-center justify-items-center px-[20px]'>
          <Image src={Google} alt='Google'/>
          <Image src={Slack} alt='Slack'/>
          <Image src={Trustpilot} alt='Trustpilot'/>
          <Image src={Cnn} alt='Cnn'/>
          <Image src={Cluth} alt='Cluth'/>
        </div>
      </div>

    
    </div>
  )
}

export default Hero
