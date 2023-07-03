import React from 'react';
import style from './Banner.module.css'

const Banner = () => {
    return (
        <header>
            <section className={`${style.bgImage} px-4 py-28 md:p-36 bg-cover bg-center text-white`}>
                <p>Welcome To The Coffee Place</p>
                <h1 className='text-5xl md:text-8xl my-6 md:my-8 font-bold'>Great Coffee <br /> Good Vibes</h1>
                <div className='md:flex gap-4'>
                    <button class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#B99272] rounded-md group hover:text-[#B99272] duration-300">
                        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                        <span class="relative text-sm uppercase">Explore More</span>
                    </button>
                    <button class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-black rounded-md group hover:text-[#B99272] duration-300">
                        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                        <span class="relative text-sm uppercase">Get Delivery</span>
                    </button>
                </div>
            </section>
        </header>
    );
};

export default Banner;