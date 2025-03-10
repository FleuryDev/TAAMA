import React, {Fragment, useEffect, useState} from "react";

import {Outlet, useRoutes} from "react-router-dom";
import AppBar from "./AppBar";
import SideBar from "./SideBar";
import useAccount from "../../../Hooks/Auth/useAccount";
import {redirect} from "react-router";
import {useAuth} from "../../../Hooks/Auth/useAuth";

export default  function UserDashboard(){
    const {status ,account,Authenticate} =useAccount()
    const [accountState, setAccountState] = useState(status)
        if(!account){
            Authenticate()

        }

    return <Fragment>
        { account ?
            <>
            <AppBar/>
        <div className="block bg-gray-100 border-none relative w-full flex">
            <div className={"block  max-md:w-max md:w-[10rem]"}>

            <SideBar></SideBar>
            </div>
            <div className="w-auto flex-1 overflow-hidden  p-4 min-h-[calc(100vh-5rem)]">
                <Outlet></Outlet>
            </div>
        </div>
            </> : <>Loading..</>
}
    </Fragment>
}