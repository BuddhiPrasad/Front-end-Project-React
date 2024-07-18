import React from 'react'

import Logo from '../../public/assets/Logo.svg'
import facebook from '../../public/assets/Facebook.svg'
import x from '../../public/assets/X.svg'
import Feed from '../../public/assets/Feed.svg'
import Image from 'next/image'

import { FooterLinks } from "../constants";
import Link from 'next/link';

const Footer = () => {
  return (

        <div className='pt-[40px] pb-[40px]'>

        <div className='flex flex-col lg:flex-row'>
            <div className='lg:w-1/3 flex items-center justify-center lg:justify-start gap-x-[12px]'>
                <Image src={Logo} alt='Logo'/>
                <p className='font-bold text-[#36485C] text-[18px]'>Front-End 2024</p>
            </div>

            <div className='lg:w-2/3 flex flex-col items-center gap-y-[32px] pt-[56px] lg:flex-row lg:justify-end'>
                {FooterLinks.map((item) => (
                        <div key={item.title} className='flex flex-col gap-6 text-base min-w-[170px]'>
                            <h3 className='font-semibold text-center lg:text-right'>{item.title}</h3>
                            <div className='flex flex-col gap-5'>
                                {item.links.map((link)=>(
                                    <Link key={link.title} href={link.url} className='text-gray-500 text-center lg:text-right'>{link.title}</Link>
                                ))}
                            </div>
                        </div>
                ))}
            </div>
        </div>
            

            <div>
                <p className='pt-[56px] text-center text-[14px] font-medium'>© Copyright 2024. Your Site. All rights reserved.</p>
            </div>
            <div className='flex items-center justify-center gap-x-[56px] pt-[40px]'>
                <Image src={facebook} alt='facebook'/>
                <Image src={x} alt='x'/>
                <Image src={Feed} alt='feed'/>
            </div>

        </div>
  )
}

export default Footer
