import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { SideBarContext } from '../../hooks/Context/context';


export default function Header() {
   const { sidebarState } = useContext(SideBarContext)

   return (
      <nav className={`${sidebarState.Active ? "w-full" : "w-[100%] "} h-fit flex items-center justify-between px-8 bg-[#32363f] py-5 shadow-[0_1px_25px_#00000021] transition-all duration-[.4s]`}>
         <div className="relative w-fit flex items-center">
            <input className="rounded-xl border-none outline-none bg-[#2b2e37] text-white placeholder:text-white px-5 py-1" type="text" placeholder='Search...' />
            <FaSearch className='absolute right-[1vw] text-white' />
         </div>
         <div className="">
            <GoBell className="text-[#f4575d] text-2xl cursor-pointer" />
         </div>
      </nav>
   )
}
