'use client'

import Image from 'next/image';
import React, { useEffect } from 'react';
import { FaLocationArrow, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <footer data-aos="fade-up">
            <section style={{ backgroundImage: 'url(/others/choose_img.jpg)' }} className='bg-cover bg-center bg-no-repeat bg-fixed'>
                <div className='text-white px-5 py-16 md:px-32 md:py-16 bg-[#0000009a] md:flex items-center justify-between'>
                    <div>
                        <p className='text-color'>NEED A TABLE ON COFFEE HOUSE</p>
                        <h2 className='text-4xl mt-4 font-semibold'>Booking Table For Your & Family Members</h2>
                    </div>
                    <div className='mt-6 md:mt-0'>
                        <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#B99272] rounded-md group hover:text-[#B99272] duration-300">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                            <span className="relative text-sm uppercase">BOOKING TABLE</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className='grid md:grid-cols-2 lg:grid-cols-4 px-5 py-16 md:px-32 md:py-16 bg-color-second'>
                <div>
                    <Image className='mx-auto md:mx-0' src='/logo.png' alt='Coffee Place' width={200} height={200}></Image>
                </div>
                <div className='text-white mt-6 md:mt-6 text-center md:text-start'>
                    <div className='grid gap-4 mt-4'>
                        <h3 className='text-2xl '>Working Hours</h3>
                        <li className=''>Sunday - Thursday <br /> <span className='text-color ml-6'>08:00 am - 09:00pm</span></li>
                        <li className=''>Only Friday <br /> <span className='text-color ml-6'>03:00 pm - 09:00pm</span></li>
                        <h4 className='text-[#FF650C] ml-6'>Saturday Close</h4>
                    </div>
                </div>
                <div className='text-white mt-6 md:mt-6 '>
                    <h3 className='text-2xl text-center md:text-start'>Contact Us</h3>
                    <ul className='grid gap-4 mt-4'>
                        <li className='flex items-center gap-3 mx-auto md:mx-0'><FaLocationArrow className='text-color' size={34} /> <p><span className='text-color'>Location:</span><br />55 Main Street, New York</p></li>
                        <li className='flex items-center gap-3 mx-auto md:mx-0'><FaRegEnvelope className='text-color' size={34} /> <p><span className='text-color'>Email Address:</span><br />info@developersajeeb.com</p></li>
                        <li className='flex items-center gap-3 mx-auto md:mx-0'><FaPhoneAlt className='text-color' size={34} /> <p><span className='text-color'>Phone Number:</span><br />+8801743370840</p></li>
                    </ul>
                </div>
                <div className='text-white mt-6 md:mt-6 text-center md:text-start'>
                    <h3 className='text-2xl'>Gallery</h3>
                    <div className='grid grid-cols-3 gap-3 mt-4'>
                        <Image src='/gallery/grid_gal1 (1).jpg' alt='Gallery Image' width={100} height={100} className='w-36 h-24 object-cover'></Image>
                        <Image src='/gallery/grid_gal2.jpg' alt='Gallery Image' width={100} height={100} className='w-36 h-24 object-cover'></Image>
                        <Image src='/gallery/grid_gal3.jpg' alt='Gallery Image' width={100} height={100} className='w-36 h-24 object-cover'></Image>
                        <Image src='/gallery/grid_gal4.jpg' alt='Gallery Image' width={100} height={100} className='w-36 h-24 object-cover'></Image>
                        <Image src='/gallery/grid_gal5.jpg' alt='Gallery Image' width={100} height={100} className='w-36 h-24 object-cover'></Image>
                        <Image src='/gallery/grid_gal1 (1).jpg' alt='Gallery Image' width={100} height={100} className='w-36 h-24 object-cover'></Image>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;