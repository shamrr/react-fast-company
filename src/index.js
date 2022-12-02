import React from 'react';
import reactDOM from 'react-dom/client';
import './index.css';
import Users from './components/users';

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Users/>
    </React.StrictMode>
);
