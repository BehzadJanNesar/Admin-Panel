import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { SiPhpmyadmin } from "react-icons/si";
import { FaBars } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { MdTableChart } from "react-icons/md";
import { FaChartColumn } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { SideBarContext } from '../../../hooks/Context/context';
import './sidebarStyle.css';

export default function SideBar() {

   const { sidebarState, ShowSidebar } = useContext(SideBarContext)

   return (
      <div className={`${sidebarState.Active ? "w-[20%]" : "w-[6%]"} transition-all duration-[.4s] h-screen overflow-hidden`}>
         <div className='h-[10.5%] flex items-center justify-around bg-[#32363f] border-r-[0.5px] border-[#ffffff86]'>
            {/* <h1 className={`${!sidebarState.Active ? "hide-item" : ""} text-3xl text-white font-bold text-center transition-all duration-[.4s]`}>Admin Panel</h1> */}
            <SiPhpmyadmin className={`${sidebarState.Active ? "text-[5rem]" : "text-[3rem]"} text-white cursor-pointer transition-all duration-[.3s]`} />
            <FaBars onClick={ShowSidebar} className={`${sidebarState.Active ? "text-[2rem]" : "text-[1.5rem]"} text-white cursor-pointer transition-all duration-[.3s]`} />
         </div>
         <nav className="h-[89.5%] bg-[#32363f] flex flex-col gap-3 p-5 overflow-hidden">

            <NavLink to={"/"} className={`${({ isActive }) => isActive ? "active_link" : ""} sidebar-item hover:bg-[#2b2e37]`}>
               {/* <NavLink to={"/"} style={({ isActive }) => { return isActive ? { background: "white", color: "blue" } : "" }}> */}
               <FaUser className='text-xl text-blue-900' />
               <span className={`${!sidebarState.Active ? "hide-item" : ""} transition-all duration-[.4s]`}>Users</span>
            </NavLink>

            <NavLink to={"/Dashboard"} className={`${({ isActive }) => { return isActive ? "active_link" : "" }} sidebar-item hover:bg-[#2b2e37]`}>
               <AiFillDashboard className='text-xl text-yellow-500' />
               <span className={`${!sidebarState.Active ? "hide-item" : ""} transition-all duration-[.4s]`}>Dashboard</span>
            </NavLink>

            <NavLink to={"/table"} className={`${({ isActive }) => { return isActive ? "active_link" : "" }} sidebar-item hover:bg-[#2b2e37]`}>
               <MdTableChart className='text-xl text-purple-600' />
               <span className={`${!sidebarState.Active ? "hide-item" : ""} transition-all duration-[.4s]`}>Table</span>
            </NavLink>

            <NavLink to={"/chart"} className={`${({ isActive }) => { return isActive ? "active_link" : "" }} sidebar-item hover:bg-[#2b2e37]`}>
               <FaChartColumn className='text-xl text-teal-500' />
               <span className={`${!sidebarState.Active ? "hide-item" : ""} transition-all duration-[.4s]`}>Charts</span>
            </NavLink>

            <NavLink to={"/setting"} className={`${({ isActive }) => { return isActive ? "active_link" : "" }} sidebar-item hover:bg-[#2b2e37]`}>
               <IoIosSettings className='text-xl text-rose-600' />
               <span className={`${!sidebarState.Active ? "hide-item" : ""} transition-all duration-[.4s]`}>Settings</span>
            </NavLink>
         </nav>
      </div>
   )
}
