/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../../../assets/farhad_image.jpg'
import { IoMdDownload } from "react-icons/io";
import './Banner.css'

import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div id='banner-bg' className='my-10 ' >
            <div className="card-side md:space-y-0 space-y-3 bg-base-100 md:flex items-center justify-evenly">
                <div><img src={image} className='w-[300px] h-[300px] rounded-full border-sky-400 border-4 md:ml-0 ml-10  banner-image' alt="banner_image" /></div>
                <div className="">
                    <div data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="800">
                        <h2 className="text-4xl font-bold">FARHAD <span className='text-sky-400'>HOSSAIN</span></h2>
                        <p className='mt-2 text-lg'>Welcome to my portfolio,</p>
                        {/* <p className='text-lg'>where you will find everything about my <br />
                            career, web development journey, and more. Explore and discover!</p> */}
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'where you will find everything about my',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                // 'where you will fdfdfdd',
                                // 1000,
                                // 'where you will dddddddddddddddd',
                                // 1000,
                                // 'where you will ddgagddasdad',
                                // 1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1.1em', display: 'inline-block' }}
                            repeat={Infinity}
                            className='text-sky-400'
                        />
                        <p>career, web development journey, and more. Explore and discover!</p>
                        <div className="card-actions mt-3">
                            <div className='flex gap-3'>
                                <div>
                                    <Link to="https://www.linkedin.com/in/farhad-hossain-87b74a2a4/" target='_blank'>
                                        <FaLinkedin className='text-4xl text-sky-500 rounded-full'></FaLinkedin>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="https://github.com/Farhad-Hossain-45" target='_blank'>
                                        <FaGithub className='text-4xl text-sky-500 rounded-full'></FaGithub>
                                    </Link>
                                </div>

                                <div>
                                    <Link to="https://www.facebook.com/farhadahmed45/" target='_blank'>
                                        <FaFacebookSquare className='text-4xl text-sky-500 rounded-full'></FaFacebookSquare>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="https://www.instagram.com/__farhad_ahmed_/" target='_blank'>
                                        <FaInstagram className='text-4xl text-sky-500 rounded-full'></FaInstagram>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="https://wa.me/+8801865189601" target='_blank'>
                                        <FaWhatsapp className='text-4xl text-sky-500 rounded-full'></FaWhatsapp>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className='mt-4'>
                            <a download href="/public/resume.pdf">
                                 <button  className='btn btn-outline btn-accent mr-5'>  <IoMdDownload className='' /> RESUME</button>
                                 
                            </a>
                            <Link to="/contact">
                                <button className='btn btn-outline btn-accent mr-5'>CONTACT</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;