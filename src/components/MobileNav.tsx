import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import Popup from './Popup';

function MobileNav({ links }) {
    const [openMenu, setOpenMenu] = useState(false)
    function handleOpenMenu() {

        setOpenMenu((st) => !st)
    }
    return (<>

        <button className='text-4xl max-lg:hidden' onClick={handleOpenMenu}>
            <span className='material-icons max-lg:hidden transition-transform  duration-300' style={{ fontSize: "2.5rem" }}>{openMenu ? 'close' : 'search'}</span>
        </button>
        <button className='text-4xl lg:hidden ' onClick={handleOpenMenu}> <span className='material-icons lg:hidden transition-transform  duration-300' style={{ fontSize: "2.5rem" }}>{openMenu ? 'close' : 'menu'}  </span> </button>
        {openMenu &&
            <Popup className={"fixed top-[5.2rem] w-full   transition-all duration-1000 mx-auto z-[105] h-lvh  bg-white"}>
                <div className="flex w-full relative flex-col space-y-4 p-4">
                    <div className=" h-10  flex  border-2 border-gray-200  ">
                        <form action="" className='h-full flex w-full bg-transparent' method="post">
                            <input type="search" className='bg-transparent  flex-1 px-4 outline border-gray-200 outline-white rounded ' placeholder='TAAMA Search' name="data" id="srch" />
                            <button type="submit" className='bg-amber-950 px-2 text-center bg-opacity-80 border-none outline-none text-gray-100'><span className='material-icons'>search</span></button>
                        </form>
                    </div>
                    <div className="flex flex-col max-sm:w-full max-lg:w-8/12   mx-auto space-y-4 ">
                        {links && links.map((link, id) => <NavLink onClick={handleOpenMenu} className={"lg:hidden px-4 py-2 bg-amber-900 bg-opacity-25 w-full"} to={link.uri} key={link.name} >{link.name}</NavLink>)}
                        <NavLink onClick={handleOpenMenu} className={"lg:hidden px-4 py-2 bg-amber-900 bg-opacity-25 w-full"} to={'/user/register'} key={'register'} >Se connecter / S'inscrire</NavLink>
                    </div>
                </div>

            </Popup>
        }</>
    );
}

export default MobileNav;