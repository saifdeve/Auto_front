import React from 'react';
import ReactDOM from 'react-dom/client'; // Importer de react-dom/client
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
