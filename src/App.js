import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import SideBar from "./components/MainPage/Sidebar/sideBar";
import { SideBarProvider } from "./hooks/Context/context";
import Users from "./components/MainPage/Contents/Users/Users";
import Chart from "./components/MainPage/Contents/Charts/Chart";
import Dashboard from "./components/MainPage/Contents/Dashboard/Dashboard";
import Setting from "./components/MainPage/Contents/Setting/setting";
import Table from "./components/MainPage/Contents/Table/Table";
import AddUser from "./components/MainPage/AddUser/AddUser";

export default function App() {
   return (
      <div className="bg-[#2b2e37] w-full min-h-screen flex flex-row-reverse">
         <Router>
            <SideBarProvider>
               <div className="flex flex-col w-full">
                  <Header />
                  <Routes>
                     <Route path="/user" element={<Users />} />
                     <Route path="user/add" element={<AddUser />}>
                        <Route path=":id" />
                     </Route>
                     <Route path="user/edit" element={<AddUser />}>
                        <Route path=":id" />
                     </Route>
                     <Route path="/dashboard" element={<Dashboard />} />
                     <Route path="/table" element={<Table />} />
                     <Route path="/chart" element={<Chart />} />
                     <Route path="/setting" element={<Setting />} />
                     <Route path="*" element={<Users />} />
                  </Routes>
               </div>
               <SideBar />
            </SideBarProvider>
         </Router>
      </div>
   );
}
