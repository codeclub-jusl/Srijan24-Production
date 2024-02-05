

import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Cards from "@/components/Cards/Cards";
import Timeline from "@/components/Timeline/Timeline";
import Gallery from '@/components/Gallery';
import About from '@/components/About/About';
import about from "../../public/images/about/about.png"
import Image from 'next/image';
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Home from "@/components/Home";
export default () => {

  return (
    <>
      <Hero/>
      <div className='mascotGap'/>

      {/* <div className='w-full h-screen bg-[#030022] fixed -z-10 aboutBg'>
        <Image src={about} fill className='relative object-cover' />
      </div> */}

      {/* <Navbar /> */}
      <Cards />
      <Gallery />
      <About />
      {/* <Timeline /> */}
      <Footer/>
    </>
  );
}
