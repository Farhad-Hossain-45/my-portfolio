/* eslint-disable no-unused-vars */
import React from 'react';
import icon_image from "../../assets/website icon.png"

const Logo = () => {
    return (
        <div className='flex items-center'>
            <img className='w-16 h-12 rounded-2xl ' src={icon_image} alt="icon"/>
            <h2 className='ml-3 font-bold text-xl border p-1 border-x-4 border-sky-300 rounded-xl'>FARHAD</h2>
        </div>
    );
};

export default Logo;