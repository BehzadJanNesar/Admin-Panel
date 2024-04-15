export const InitialStateSidebar = {
   Active: true,
   users: {
      loaded: true,
      lists: [],
   },
};
export function SidebarReducerFunc(state, action) {
   switch (action.type) {
      case "Active":
         return { ...state, ...{ Active: action.data } };
      case "addUser":
         return { ...state, users: action.data };
      case "delete":
         console.log({ ...state, users: { loaded: false, lists: action.data } });
         return { ...state, users: { loaded: false, lists: action.data } };

      default:
         return state;
   }
}
