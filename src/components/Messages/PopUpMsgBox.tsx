import React, { useEffect } from 'react';

const PopUpMsgBox = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded shadow-lg text-white ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'}`}>
            <span>{message}</span>
            <button className="ml-4" onClick={onClose}>Close</button>
        </div>
    );
};

export default  PopUpMsgBox;