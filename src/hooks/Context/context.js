import { createContext, useEffect, useReducer } from "react";
import { InitialStateSidebar, SidebarReducerFunc } from "../Reducer/Reducer";
import AxiosFanc from "../../HandelFunctions/axios";
import Swal from "sweetalert2";

export const SideBarContext = createContext({
   ShowSidebar: () => {},
   DeleteUser: () => {},
   showdeleteAlert: () => {},
});

export function SideBarProvider({ children }) {
   const [sidebarState, dispatchSidebar] = useReducer(SidebarReducerFunc, InitialStateSidebar);
   const [addUserState, dispatchAddUser] = useReducer(SidebarReducerFunc, InitialStateSidebar);

   useEffect(() => {
      if (!addUserState.users.loaded) return;
      async function LoadUser() {
         const dataUsers = await AxiosFanc();
         const newState = {
            type: "addUser",
            data: { loaded: false, lists: dataUsers },
         };
         dispatchAddUser(newState);
      }
      LoadUser();
   }, []);

   function ShowSidebar() {
      dispatchSidebar({
         type: "Active",
         data: !sidebarState.Active,
      });
   }

   function showdeleteAlert(id) {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            DeleteUser(id);
            Swal.fire({
               title: "Deleted!",
               text: "Your user has been deleted.",
               icon: "success",
            });
         }
      });
   }

   function DeleteUser(id) {
      const filter = addUserState.users.lists.filter((item) => item.id !== id);
      const newState = {
         type: "delete",
         data: filter,
      };
      dispatchAddUser(newState);
   }
   const contextValue = {
      ShowSidebar,
      sidebarState,
      DeleteUser,
      addUserState,
      showdeleteAlert,
   };
   return <SideBarContext.Provider value={contextValue}>{children}</SideBarContext.Provider>;
}
