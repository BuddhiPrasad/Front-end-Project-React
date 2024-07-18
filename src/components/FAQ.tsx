"use Client"

import React from 'react'
import { faqList } from "../constants";

import * as Accordion from '@radix-ui/react-accordion';


import Plus from '../../public/assets/Plus.svg'
import Image from 'next/image';

const FAQ = () => {
  return (
    <div className='flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-[24px]'>
        <div className='lg:w-1/3 lg:py-[32px] lg:pr-[56px]'>
            <h3 className='text-[#EB2891] text-[14px] font-medium lg:text-base'>Frequently Asked Questions</h3>
            <h1 className='py-4 text-2xl font-medium lg:text-[46px] lg:leading-[56px]'>Let’s clarify some of your questions</h1>
            <p className='pb-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
        </div>
        
        <div className='lg:w-2/3'>
            <Accordion.Root type='single' defaultValue='item-1' collapsible className='flex flex-col gap-y-4'>
                {faqList.map((item, index)=>(
                    <div key={index}>
                        <Accordion.Item value={'item-${index + 1}'} className='bg-[#E3F1FF] p-[16px] rounder-[8px]'>
                            <Accordion.Header>
                                <Accordion.Trigger className='flex w-full items-center justify-between'>
                                    <p className='text-left font-medium text-[#122026] lg:text-[18px]'>{item.question}</p>
                                    <span><Image src={Plus} alt='Plus' className=' h-10 w-10 lg:h-6 lg-w-6'/></span>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content><p className='pt-2 text-[#36485C]'>{item.answqe}</p></Accordion.Content>
                        </Accordion.Item>                        
                        
                    </div>
                ))}
            </Accordion.Root>
        </div>

    </div>
  )
}

export default FAQ
