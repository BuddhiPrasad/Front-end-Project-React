import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { HeaderLinks } from "../constants";

import Logo from '../../public/assets/Logo.svg'
import User from '../../public/assets/User.svg'
import Menu from '../../public/assets/Menu.svg'

const Navbar = () => {
  return (

            <nav className='flex px-2.5 py-4 max-w-screen-xl mx-auto'>
                <div className='flex w-full items-center justify-between'>
                    <div className='flex items-center'>
                        <Image src={Logo} alt='Logo'/>
                        <div className='lg:flex hidden lg:block items-center pl-16 gap-x-14'>
                            {HeaderLinks.map((item) =>(
                                <p>{item.title}</p>
                            ))}
                        </div>
                    </div>

                    <div  className='flex items-center gap-4'>
                        <div>
                            <span className='hidden lg:block'>Open an Account</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Image src={User} alt='User'/>
                            <span className='hidden lg:block'>Sign In</span>
                        </div>

                        <div>
                            <Image src={Menu} alt='Menu' className='lg:hidden'/>
                        </div>
                    </div>
                </div>
            </nav>
  )
}

export default Navbar
