import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Cards from "@/components/Cards/Cards";
import Timeline from "@/components/Timeline/Timeline";
import Gallery from '@/components/Gallery';
import About from '@/components/About/About';
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'

export default () => {
  
  return (
    <>
      <Hero/>
      <div className='mascotGap'/>
      <Cards />
      <Gallery />
      <About />
      {/* <Timeline /> */}
      <Footer/>
    </>
  );
}
