import React from 'react'

import Logo from '../../public/assets/Logo.svg'
import Image from 'next/image'


import { FooterLinks } from "../constants";
import Link from 'next/link';

const Footer = () => {
  return (
    
    <footer>
        <div className='flex px-2.5 py-4 max-w-screen-xl mx-auto'>
            <div>
                <Image src={Logo} alt='Logo'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies diam. Integer dapibus est eu arcu tincidunt, </p>
            </div>

            <div className='flex'>
                {FooterLinks.map((item) => (
                        <div key={item.title} className=''>
                            <h3 className='font-semibold'>{item.title}</h3>
                            <div>
                                {item.links.map((link)=>(
                                    <Link key={link.title} href={link.url} className='flex'>{link.title}</Link>
                                ))}
                            </div>
                        </div>
                ))}
            </div>
                
            <div>

            </div>
        </div>
    </footer>
  )
}

export default Footer
