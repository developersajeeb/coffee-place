'use client'

import { useEffect } from 'react';
import style from './Header.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <header className={`${style.bgImage} px-4 py-28 md:p-36 bg-cover bg-center text-white`}>
            <h1 className='text-5xl md:text-8xl my-6 md:my-8 font-bold' data-aos="fade-right">About Us</h1>
        </header>
    );
};

export default Header;