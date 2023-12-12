import React from 'react'
import ReactDOM from 'react-dom/client'
import {  HelmetProvider } from 'react-helmet-async';

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={Route}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
