import React from 'react';
import { createPortal } from 'react-dom';

function Popup(props) {

    return createPortal(<div className={"flex flex-col  shadow rounded " + props.className}>

        {props.children}
    </div>, document.body)

}

export default Popup;