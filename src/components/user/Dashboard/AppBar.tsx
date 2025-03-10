import React, {Fragment, useState} from "react";
import Search from "./Search";
import NotificationButton from "./NotificationButton";

import NavMenu from "./NavMenu";




export default function AppBar() {
    const [search, setSearch] = useState(null)

    function handleInput() {

        setSearch("md:w-[15rem] transition-all duration-1000")

    }

    return <Fragment>
        <header className="w-full bg-gray-100 flex h-20 sticky top-0 border-none shadow-none border-none p-2 md:px-4">
            <div className="m-auto h-4/5 bg-white rounded-3xl px-8 flex justify-items-stretch justify-between  items-center p-2 shadow-lg w-full md:w-[calc(100%-8rem)]">
                <div className="flex align-baseline flex-row  text-xl justify-between items-center">
                    <h1 className="font-bold text-[var(--primary-color)]">TAAMA</h1>
                </div>
                <div className="flex  justify-around align-baseline items-center gap-x-8">
                    <div className=" flex gap-x-4 flex-1 max-md:hidden">
                        <Search _class={search}></Search>
                        <NotificationButton elm={10}/>
                    </div>
                    <NavMenu></NavMenu>
                </div>
            </div>
        </header>
    </Fragment>
}