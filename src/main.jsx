import './styles/main.css';
import './styles/app.css';
import './styles/micons.css';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';
import {AuthProvider} from "./Hooks/Auth/useAuth";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
        <App />
        </AuthProvider>
    </StrictMode>

)
