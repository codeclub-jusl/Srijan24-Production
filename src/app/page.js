
import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Cards from "@/components/Cards/Cards";
import Timeline from "@/components/Timeline/Timeline";
import Gallery from '@/components/Gallery';
import About from '@/components/About/About';
import about from "../../public/images/about/about.png"
import Image from 'next/image';
import Countdown from '@/components/hero/Countdown/Countdown'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
export default function Home() {

  return (
    <>
       <div className='w-full h-screen bg-[#030022] fixed -z-10'>
          <Image src={about} fill className='relative object-cover' />
        </div>
       <Navbar/>
      
       <About/>
       <Cards />
       <Gallery />
       <Timeline />
    </>
  );
