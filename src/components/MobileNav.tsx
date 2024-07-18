import { AlignJustify } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

import { HeaderLinks } from "../constants";
import Image from 'next/image'

import Logo from '../../public/assets/Logo.svg'
import facebook from '../../public/assets/Facebook.svg'
import x from '../../public/assets/X.svg'
import Feed from '../../public/assets/Feed.svg'

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <AlignJustify className='cursor-pointer'/>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col items-center justify-between h-full p-y-8">
            <Image src={Logo} alt='Logo'/>
            <div className="flex flex-col items-center gap-y-6 pt-32">
              
              {HeaderLinks.map((item) =>(
                <p>{item.title}</p>
               ))}
            </div>
            
            <div className='flex items-center justify-center gap-x-[56px] pt-[40px]'>
                <Image src={facebook} alt='facebook'/>
                <Image src={x} alt='x'/>
                <Image src={Feed} alt='feed'/>
            </div>
          </div>
              
          
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav

