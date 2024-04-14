import React from 'react'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './usersStyle.css'

export default function Users() {
   return (
      <div className="w-full h-full flex items-start justify-center py-[3rem]">
         <table className="table-auto w-[80%] text-white border-separate border-spacing-y-2">
            <thead>
               <tr className='bg-[#32363f] h-10'>
                  <th>id</th>
                  <th>name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Oparation</th>
               </tr>
            </thead>
            <tbody className="text-center border-separate border-spacing-2">
               <tr className="h-[4rem] bg-[#32363f]">
                  <td>1</td>
                  <td>Alireza</td>
                  <td>alireza_jodat2001</td>
                  <td>alirezajodat2001@gmail.com</td>
                  <td className="[&>*]:inline-block">
                     <FaRegTrashAlt className="w-[1.4rem] h-[1.4rem] me-[1rem] text-red-700" />
                     <Link
                        className="flex justify-center items-center translate-y-[0.4rem]"
                        to="/user/edit"
                     >
                        <FaRegEdit className="w-[1.6rem] h-[1.6rem] text-yellow-800" />
                     </Link>
                  </td>
               </tr>
               <tr className="h-[4rem] bg-[#32363f]">
                  <td>1</td>
                  <td>Alireza</td>
                  <td>alireza_jodat2001</td>
                  <td>alirezajodat2001@gmail.com</td>
                  <td className="[&>*]:inline-block">
                     <FaRegTrashAlt className="w-[1.4rem] h-[1.4rem] me-[1rem] text-red-700" />
                     <Link
                        className="flex justify-center items-center translate-y-[0.4rem]"
                        to="/user/edit"
                     >
                        <FaRegEdit className="w-[1.6rem] h-[1.6rem] text-yellow-800" />
                     </Link>
                  </td>
               </tr>
            </tbody>

         </table>
      </div>
   )
}
