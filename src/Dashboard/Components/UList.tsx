import React from 'react';

function UList(props) {
    return (
        <ul className={"flex flex-col w-full "+ props.class}>
            {props.children}
        </ul>
    );
}

export default UList;