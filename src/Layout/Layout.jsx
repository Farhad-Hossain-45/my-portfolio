/* eslint-disable no-unused-vars */
import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../Page/Home/Navbar/Navbar';
import Footer from '../Page/Home/Footer/Footer';

const Layout = () => {
    return (
        <div>
           <div className='max-w-6xl mx-auto'>
           <Navbar></Navbar>
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
            
        </div>
    );
};

export default Layout;