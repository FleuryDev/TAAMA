import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session or authentication token
        // For example, if using localStorage:
        localStorage.removeItem('app_user_token');
        alert('Vous êtes déconnecté !')
        // Redirect to homepage
        navigate('/');
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;