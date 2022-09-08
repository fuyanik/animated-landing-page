import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Routes from './Routes/routes.js';
import AOS from 'aos';
import { BrowserRouter } from 'react-router-dom';

import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>
);

