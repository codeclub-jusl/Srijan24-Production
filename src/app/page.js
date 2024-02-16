import React from 'react'

import Cards from '@/components/Cards/Cards'
import Timeline from '@/components/Timeline/Timeline'
import Gallery from '@/components/Gallery'
import About from '@/components/About/About'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Timeline2 from '@/components/Timeline2/Timeline2'
import MobileTimeline from '@/components/Timeline2/MobileTimeline'

export default () => {
    return (
        <>
            <Hero />
            <div className='mascotGap' />
            <Cards />
            <Gallery />
            <About />
            {/* <Timeline /> */}
            <Timeline2/>
            <MobileTimeline/>
            <Footer />
        </>
    )
}
