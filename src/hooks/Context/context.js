import { createContext, useReducer } from "react";
import { InitialStateSidebar, SidebarReducerFunc } from "../Reducer/Reducer";

export const SideBarContext = createContext({
   ShowSidebar: () => {},
});

export function SideBarProvider({ children }) {
   const [sidebarState, dispatchSidebar] = useReducer(SidebarReducerFunc, InitialStateSidebar);

   function ShowSidebar() {
      dispatchSidebar({
         type: "Active",
         data: !sidebarState.Active,
      });
   }
   const contextValue = {
      ShowSidebar,
      sidebarState,
   };
   return <SideBarContext.Provider value={contextValue}>{children}</SideBarContext.Provider>;
}
