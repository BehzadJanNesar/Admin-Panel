export const InitialStateSidebar = {
   Active: true,
   users: [],
};
export function SidebarReducerFunc(state, action) {
   switch (action.type) {
      case "Active":
         return { ...state, ...{ Active: action.data } };
      case "addUser":
         console.log(action.data);
         return { ...state, users: [...action.data] };

      default:
         return;
   }
}
