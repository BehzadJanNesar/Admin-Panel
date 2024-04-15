import React from 'react'
import FormHandler from '../../../HandelFunctions/FormHandler'

export default function AddUser() {
   console.log(FormHandler)
   return (
      <form>
         {FormHandler()}
      </form>
   )
}
