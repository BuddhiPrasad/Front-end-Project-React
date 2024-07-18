import React from 'react'
import Image from 'next/image'

import Check from '../../public/assets/check.svg'

const Pricing = () => {
  return (
    <div className='py-[48px] lg:py-[60px]'>
        <h1 className='text-center text-[24px] font-medium text-2xl lg:text-[42px]'>Flexible plans for you</h1>
        <p className='pt-[16px] pb-[40px] text-center lg:text-[18px]'>No hidden fees!</p>

        <div className='flex flex-col gap-y-6 gap-x-[24px] lg:flex-row'>

            <div className='w-full rounded-[8px] bg-[#f5f4ff] p-6 flex flex-col lg:justify-between'>
                <div>
                    <h3 className='font-medium text-[18px]'>Free Trial</h3>
                    <p className='pt-[12px] '>Perfect for testing the waters</p>
                    <h2 className='pt-[16px] text-2xl font-medium'>0$<span>/mo</span></h2>
                    <ul className='flex flex-col pt-4'>
                        <li className='flex gap-x-4'>
                            <span><Image src={Check} alt='Check'/></span>Lorem ipsum dolor sit amet
                        </li>
                        <li className='flex gap-x-4'>
                            <span><Image src={Check} alt='Check'/></span>Lorem ipsum dolor sit amet
                        </li>
                        <li className='flex gap-x-4'>
                            <span><Image src={Check} alt='Check'/></span>Lorem ipsum dolor sit amet
                        </li>
                    </ul>
                </div>
                <button className='mt-[16px] rounded-[4px] bg-white py-[14px]'>Start Trial</button>
            </div>

            <div className='w-full rounded-[8px] bg-indigo-600 p-6 flex flex-col lg:justify-between'>
                <div>
                    <h3 className='font-medium text-[18px] text-white'>Business</h3>
                    <p className='pt-[12px]  text-white'>Perfect for small businesses</p>
                    <h2 className='pt-[16px] text-2xl font-medium text-white'>500$<span>/mo</span></h2>
                    <ul className='flex flex-col pt-4'>
                        <li className='flex gap-x-4'>
                            <span><Image src={Check} alt='Check'/></span>Lorem ipsum dolor sit amet
                        </li>
                        <li className='flex gap-x-4'>
                            <span className=' text-white'><Image src={Check} alt='Check'/></span>Lorem ipsum dolor sit amet
                        </li>
                        <li className='flex gap-x-4'>
                            <span className=' text-white'><Image src={Check} alt='Check'/></span>Lorem ipsum dolor sit amet
                        </li>
                        <li className='flex gap-x-4'>
                            <span className=' text-white'><Image src={Check} alt='Check'/></span>Lorem ipsum dolor sit amet
                        </li>
                        <li className='flex gap-x-4'>
                            <span className=' text-white'><Image src={Check} alt='Check'/></span>Lorem ipsum dolor sit amet
                        </li>
                    </ul>
                </div>
                <button className='mt-[16px] rounded-[4px] bg-white py-[14px]'>Get Started</button>
            </div>

            <div className='w-full rounded-[8px] bg-[#f5f4ff] p-6 flex flex-col lg:justify-between'>
                <div>
                    <h3 className='font-medium text-[18px]'>Enterprise</h3>
                    <p className='pt-[12px] '>Perfect for big companies</p>
                    <h2 className='pt-[16px] text-2xl font-medium'>Custom</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. 
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <button className='mt-[16px] rounded-[4px] bg-white py-[14px]'>Contact Us</button>
            </div>

        </div>
    </div>
  )
}

export default Pricing
