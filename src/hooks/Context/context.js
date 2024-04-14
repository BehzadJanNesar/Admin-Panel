import { createContext, useEffect, useReducer } from "react";
import { InitialStateSidebar, SidebarReducerFunc } from "../Reducer/Reducer";
import AxiosFanc from "../../HandelFunctions/axios";

export const SideBarContext = createContext({
   ShowSidebar: () => {},
   DeleteUser: () => {},
});

export function SideBarProvider({ children }) {
   const [sidebarState, dispatchSidebar] = useReducer(SidebarReducerFunc, InitialStateSidebar);
   const [addUserState, dispatchAddUser] = useReducer(SidebarReducerFunc, InitialStateSidebar);

   useEffect(() => {
      async function LoadUser() {
         const data = await AxiosFanc();
         const newState = {
            type: "addUser",
            data: data,
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
   function DeleteUser(id) {
      const filter = addUserState.users.filter((item) => item.id !== id);
      console.log(filter);
      const newState = {
         type: "delete",
         data: [...filter],
      };
      dispatchSidebar(newState);
   }
   const contextValue = {
      ShowSidebar,
      sidebarState,
      DeleteUser,
      addUserState,
   };
   return <SideBarContext.Provider value={contextValue}>{children}</SideBarContext.Provider>;
}
