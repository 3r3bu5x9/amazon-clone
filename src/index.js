import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './common.css'
import userList from "./userList";
import App from "./app";

const users = [...userList]
sessionStorage.setItem('users', JSON.stringify(users))
sessionStorage.setItem('loginStatus', JSON.stringify({status: 0}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
);