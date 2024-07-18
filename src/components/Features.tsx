import React from 'react'

import Feature1 from '../../public/assets/Feature1.svg'
import Feature2 from '../../public/assets/Feature2.svg'
import Feature3 from '../../public/assets/Feature3.svg'

import Check from '../../public/assets/check.svg'

import Feature1Next from '../../public/assets/Feature1Next.svg'
import Feature2Next from '../../public/assets/Feature2Next.svg'
import Feature3Next from '../../public/assets/Feature3Next.svg'
import Image from 'next/image'



const Features = () => {
  return (
    <div className='flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]'>
{/*Feature 1 */}
      <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
      <Image src={Feature1} alt='Feature1' className='hidden w-1/2 sm:block'/>
        <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
          <h3 className='font-medium lg:text-[18px]'>Sales Monitoring</h3>
          <h1 className='pt-[12px] text-2xl lg:text-[42px] lg:leading-[56px]'>Simplify your sales monitoring</h1>
          <Image src={Feature1} alt='Feature1' className='pt-[24px] sm:hidden'/>
          <p className='py-[24px] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.
          </p>
          <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
            <li className='flex items-center gap-x-2'>
              <span><Image src={Check} alt='Check'/></span>Lorem ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-2'>
              <span><Image src={Check} alt='Check'/></span>Lorem ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-2'>
              <span><Image src={Check} alt='Check'/></span>Lorem ipsum dolor sit amet
            </li>
          </ul>
          <p className='flex items-center gap-x-2 pt-[24px] lg:text-[18px]'>Learn More <span><Image src={Feature1Next} alt='Feature1Next'/></span></p>
        </div>
      </div>

{/*Feature 2 */}

      <div className='flex flex-col gap-x-6 sm:flex-row'>
      <Image src={Feature2} alt='Feature2' className='hidden w-1/2 sm:block'/>
        <div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>
          <h3 className='font-medium lg:text-[18px]'>Customer Support</h3>
          <h1 className='pt-[12px] text-2xl lg:text-[42px] lg:leading-[56px]'>Get in touch with your customers</h1>
          <Image src={Feature2} alt='Feature2' className='pt-[24px] sm:hidden'/>
          <p className='py-[24px] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.
          </p>
          <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
            <li className='flex items-center gap-x-2'>
              <span><Image src={Check} alt='Check'/></span>Lorem ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-2'>
              <span><Image src={Check} alt='Check'/></span>Lorem ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-2'>
              <span><Image src={Check} alt='Check'/></span>Lorem ipsum dolor sit amet
            </li>
          </ul>
          <p className='flex items-center gap-x-2 pt-[24px] lg:text-[18px]'>Learn More <span><Image src={Feature2Next} alt='Feature2Next'/></span></p>
        </div>
      </div>



{/*Feature 3 */}
      <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
      <Image src={Feature3} alt='Feature3' className='hidden w-1/2 sm:block'/>
        <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
          <h3 className='font-medium lg:text-[18px]'>SGrowth Monitoring</h3>
          <h1 className='pt-[12px] text-2xl lg:text-[42px] lg:leading-[56px]'>Monitor your site’s new subscribers </h1>
          <Image src={Feature3} alt='Feature3' className='pt-[24px] sm:hidden'/>
          <p className='py-[24px] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.
          </p>
          <div className='flex w-full gap-x-[24px]'>
            <div className='w-1/2 flex flex-col gap-y-3'>
              <h3 className='text-[20px] font-medium'>100+</h3>
              <p className='font-medium'>Lorem ipsum dolor sit</p>
            </div>
            <div className='w-1/2 flex flex-col gap-y-3'>
              <h3 className='text-[20px] font-medium'>800+</h3>
              <p className='font-medium'>Conse adipiscing elit</p>
            </div>
          </div>
          <p className='flex items-center gap-x-2 pt-[24px] lg:text-[18px]'>Learn More <span><Image src={Feature3Next} alt='Feature3Next'/></span></p>
        </div>
      </div>

    </div>
  )
}

export default Features
