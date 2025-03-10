import React, {Fragment} from "react";
import AppBar from "./Components/AppBar";
import SideBar from "./Components/SideBar";
import {Outlet} from "react-router-dom";

export default function Dashboard() {
    return <Fragment>
        <AppBar/>
        <div className="block bg-gray-100 border-none relative w-full flex">
        <SideBar></SideBar>
            <div className="w-auto flex-1 overflow-hidden  p-4 min-h-[calc(100vh-5rem)]">


                <Outlet></Outlet>
            </div>
        </div>
    </Fragment>
}