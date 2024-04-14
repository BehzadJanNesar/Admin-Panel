export const InitialStateSidebar = {
   Active: true,
};
export function SidebarReducerFunc(state, action) {
   switch (action.type) {
      case "Active":
         return { ...state, ...{ Active: action.data } };

      default:
         return;
   }
}
