import React, { Fragment } from 'react';

import { NavLink } from 'react-router-dom';

function OptNav({ items, name, uri, Data }) {
    const a = [];

    for (let item of items) {
        a.push(
            <NavLink className={"hover:bg-[var(--primary-color-op-30)] border-b-2 active:bg-orange-300 hover:border-[var(--primary-color)]"} to={item.uri} key={item.name} ><li>{item.name} </li></NavLink>
        );
    }
    return <Fragment>
        <div className="flex relative  peer-hover:*:block">

            <NavLink className={"peer"} to={uri} key={name} >{name}</NavLink>
            <ul className="absolute font-normal w-max translate-y-5 *:p-1 peer-hover:*:block hover:block *:hidden *:hover:block  text-black bg-white opacity-95  backdrop-blur-sm flex flex-col shadow-md border">
                {a}
            </ul>
        </div>
    </Fragment>
}
export default OptNav
