import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import Theme from "./setting/Themes/Themes";

function Setting(props) {


    return (
        <div  className={"w-full block flex-none bg-white h-full p-4 rounded-3xl"}>
            <section className={ "w-full flex justify-between p-2 border-b"}>
                <div className={"mx-auto section-nav  rounded-2xl shadow-md text-lg text-gray-500 *:p-2  *:flex-auto *:px-4 w-max flex flex-wrap align-baseline items-center justify-between"}>
                    <NavLink className={" transition-all duration-500"} to="profile">Profile</NavLink>
                    <NavLink className={" transition-all duration-500"} to="configuration">Configuration</NavLink>
                    <NavLink className={" transition-all duration-500"} to="data">Files</NavLink>
                    <NavLink className={" transition-all duration-500"} to="themes">Themes</NavLink>
                </div>
            </section>
            <div className={"block"}>
                <Outlet></Outlet>
            </div>
           </div>
    );
}

export default Setting;