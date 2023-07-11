import React from 'react';
import Header from '../components/Header/Header';
import Image from 'next/image';
import TotalService from '../components/TotalService/TotalService';

const About = () => {
  return (
    <>
      <Header></Header>
      <main className='text-white bg-color-second'>
        <section className='px-5 py-16 md:px-32 md:py-28'>
          <div className='grid md:grid-cols-2 items-center gap-10 md:gap-28'>
            <div className='text-white'>
              <p className='text-color' data-aos="fade-up">WHY CHOOSE US</p>
              <h2 className='text-4xl my-5 font-semibold' data-aos="fade-up">New London Coffee Founded For Extraordinary Test</h2>
              <p className='text-gray-400' data-aos="fade-up">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis</p>
              <ul className='my-10'>
                <li className='flex items-center gap-6 mb-6' data-aos="fade-up">
                  <Image src='/others/choose_icon1.png' width={80} height={100} alt='choose icon'></Image>
                  <div>
                    <h3 className='text-xl'>Natural Coffee Beans</h3>
                    <p className='text-gray-400 mt-2'>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                  </div>
                </li>
                <li className='flex items-center gap-6' data-aos="fade-up">
                  <Image src='/others/choose_icon2.png' width={80} height={100} alt='choose icon'></Image>
                  <div>
                    <h3 className='text-xl'>100% ISO Certification</h3>
                    <p className='text-gray-400 mt-2'>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                  </div>
                </li>
              </ul>
              <button class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#B99272] rounded-md group hover:text-[#B99272] duration-300" data-aos="fade-up">
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                <span class="relative text-sm uppercase">Explore More</span>
              </button>
            </div>
            <Image src='/others/about_img2.jpg' width={200} height={100} alt='Choose Us' className='w-full h-full object-cover' data-aos="zoom-in"></Image>
          </div>
        </section>

        <section className='bg-black px-5 py-16 md:px-32 md:py-28'>
          <TotalService></TotalService>
        </section>

        <section className='py-16 md:px-32 md:py-28'>
          
        </section>
      </main>
    </>
  );
};

export default About;