import React from 'react';
import Navbar from "@/components/Navbar";
import Cards from "@/components/Cards";
import Timeline from "@/components/Timeline";
import Gallery from '@/components/Gallery';
import About from '@/components/About';

export default function Home() {

  return (
    <>
       <Navbar/>
       <Timeline />
       <Gallery/>
       <About/>
    </>
  );
}
