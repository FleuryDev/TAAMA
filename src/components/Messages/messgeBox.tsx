import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';

enum MSG_CODE {
    success = 200,
    error = 500,
    warning = 400,

}
export default function MessageBox({ type, message }: { type: MSG_CODE, message: any }) {


    return createPortal(
        <Fragment>
            <div className={"border-l-4 fixed top-20 right-4  p-4 " + style[type]} role="message">
                <p className="font-bold">{message} </p>
                <p></p>
            </div>
        </Fragment>, document.body
    )

}
const style = {
    400: "bg-orange-100  border-orange-500 text-orange-700 ",
    200: "bg-green-100  border-green-500 text-green-700 ",
    500: "bg-red-100  border-red-500 text-red-700 ",
}