import React, {useState} from 'react';
import Popup from "./Popup";
import UList from "./UList";
import ListItem from "./ListItem";

function NavMenu(props) {
    const [openMenu, setOpenMenu] = useState(false)
    function handleOpenMenu() {

        setOpenMenu((st)=> !st)
    }
    return (<>
        <button onClick={handleOpenMenu} className="md:hidden  flex w-8 h-8 fill-[var(--primary-color)]">
            <svg className="w-full scale-75" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 448 512">
                <path
                    d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
            </svg>
        </button>
    <div
        className="flex w-10  max-md:hidden overflow-hidden  h-10  rounded-full border-2 border-[var(--primary-color)]">
        <img onClick={handleOpenMenu}   src="/Fleury.jpg" className="object-cover w-12 h-auto " alt="user"/>

    </div>
    { openMenu&&
    <Popup  class={"absolute top-16 z-[105] ml-auto right-20 bg-white"}>
        <UList class={"py-2 "}>
            <ListItem onClick={handleOpenMenu} > Profiles </ListItem>
            <ListItem onClick={handleOpenMenu}> Actions </ListItem>
        </UList>
    </Popup>
    }</>
    );
}

export default NavMenu;