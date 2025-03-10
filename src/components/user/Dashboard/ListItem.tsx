import React from 'react';

function ListItem(props) {
    let addClass;
    if (props.class) {
        addClass = props.class
    } else {
        addClass = " hover:bg-gray-100 px-2 py-1 border-b"
    }
    return (
        <li onClick={props.onClick} className={"w-full flex flex-wrap cursor-pointer "+ addClass  }>
            {props.children}
        </li>
    );
}

export default ListItem;