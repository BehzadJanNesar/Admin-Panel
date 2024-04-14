import React, { useEffect, useReducer } from 'react'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './usersStyle.css'
import AxiosFanc from '../../../../HandelFunctions/axios';
import { InitialStateSidebar, SidebarReducerFunc } from '../../../../hooks/Reducer/Reducer';

export default function Users() {

   const [addUserState, dispatchAddUser] = useReducer(SidebarReducerFunc, InitialStateSidebar)

   useEffect(() => {
      async function LoadUser() {
         const data = await AxiosFanc()
         const newState = {
            type: "addUser",
            data: data
         }
         dispatchAddUser(newState)
      }
      LoadUser()
   }, []);
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
               {
                  addUserState.users.map(user => {
                     const { id, name, username, email } = user
                     return (
                        <tr className="h-[4rem] bg-[#32363f]">
                           <td>{id}</td>
                           <td>{name}</td>
                           <td>{username}</td>
                           <td>{email}</td>
                           <td className="[&>*]:inline-block">
                              <FaRegTrashAlt className="w-[1.4rem] h-[1.4rem] me-[1rem] text-red-700" />
                              <Link
                                 className="flex justify-center items-center translate-y-[0.4rem]"
                                 to={"user/edit/2"}
                              >
                                 <FaRegEdit className="w-[1.6rem] h-[1.6rem] text-yellow-800" />
                              </Link>
                           </td>
                        </tr>
                     )
                  })
               }
            </tbody>

         </table>
      </div>
   )
}
