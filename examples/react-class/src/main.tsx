import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserbackProvider } from '@userback/react';
import App from './App';
import './index.css';

// Get token from `../../.env`
const token = import.meta.env?.VITE_UB_TOKEN;
const domain = import.meta.env?.VITE_UB_DOMAIN;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <UserbackProvider token={token} options={{ domain }}>
            <App />
        </UserbackProvider>
    </React.StrictMode>,
);
