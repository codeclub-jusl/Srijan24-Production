import React from 'react';
import Navbar from "@/components/Navbar";
import Cards from "@/components/Cards/Cards";
import Timeline from "@/components/Timeline";
import Gallery from '@/components/Gallery';
import About from '@/components/About/About';

export default function Home() {

  return (
    <>
       <Navbar/>
       <Gallery/>
       <About/>
       <Timeline />
    </>
  );
}
