import React, { useState } from 'react';
import PopUpMsgBox from "./PopUpMsgBox";


const MessageComponent = ({body,msgType}) => {
    const [popup, setPopup] = useState({ message: '', type: '', visible: false });
    const showMessage = (message, type) => {
        setPopup({ message, type, visible: true });
    };

    const closePopup = () => {
        setPopup({ ...popup, visible: false });
    };


    if (body){
        showMessage(body,msgType)
    }

    return (
        <div>
            {popup.visible && (
                <PopUpMsgBox message={popup.message} type={popup.type} onClose={closePopup} />
            )}
        </div>
    );

};

export default MessageComponent;
