import React from 'react';
import Cards from "@/components/Cards/Cards";
import Gallery from '@/components/Gallery';
import About from '@/components/About/About';
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Timeline2 from '@/components/Timeline2/Timeline2'
import MobileTimeline from '@/components/Timeline2/MobileTimeline'
import OverallNav from '@/components/OverallNav/OverallNav';

export default () => {

  return (
    <>
      <Hero />
      <div className='mascotGap' />
      <Cards />
      <Gallery />
      {/* <Timeline2/> */}
      <div style={{display : 'flex' , flexDirection : 'column' , alignItems : 'center' , justifyContent : 'center' , gap : '20px' , margin : '30px'}}>
        <img src={'/images/Sponsors.png'} width={300} height={300} alt=''  style={{width : '80%'}}/>
        <img src={'/images/PastSponsors.png'} width={300} height={300} alt=''  style={{width : '80%'}}/>
      </div>
      {/* <MobileTimeline/> */}
      <About />
      <Footer />
      <OverallNav></OverallNav>
    </>
  );
}
