import Image from 'next/image'
import './About.css'

const About = () => {
    return (
        <section className='about'>
            <div className='about_content w-full h-fit bg-transparent relative -z-0 text-white p-12 sm:p-[120px] flex flex-col justify-center gap-12'>
                <h1 className='relative text-4xl sm:text-5xl font-normal aboutTitle'>
                    About{' '}
                    <span className='font-semibold aboutTitleName'>Jadavpur University</span>
                </h1>
                <p className='relative font-normal text-lg sm:text-xl text-justify aboutText'>
                &emsp;Nestled amidst the heart of Kolkata and steeped in history and innovation, Jadavpur University, founded on 24th December 1955 under the West Bengal Act XXXIII is not just a technical institute but renownedly known as the flag bearer of imparting world class multi disciplinary education amongst its students.<br/>
                &emsp;Founding members of National Council of Bengal, the parent body of the Jadavpur University, in 1906 set the goal "To achieve self reliance through empowerment of Youth by imparting Best of Global Knowledge" and the varisty yet today continues to do the same.<br/>
                &emsp;It has provided research and policy support for state and national governments and international bodies, and conventional and non-conventional technological development for society. The University has produced notable alumni who have made significant contributions to academia and the corporate world.<br/>
                &emsp;The university's commitment to research, innovation, community engagement, its legendary network of alumnus from that very spring of its establishment, and its unwavering contribution to imparting knowledge to curious minds and fostering refined taste of culture and technology has marked its with a distinguished reputation not only in the Indian subcontinent but also at an international level....
                </p>
                <h1 className='relative text-4xl sm:text-5xl font-normal aboutTitle'>
                    About <span className='font-semibold aboutTitleName'>Srijan</span>
                </h1>
                <p className='relative font-normal text-lg sm:text-xl text-justify aboutText'>
                &emsp;In the heart of Kolkata, where passion ignites, Srijan blossoms— an annual ode to innovation and brilliance at Jadavpur's embrace. Born in 2007, a humble spark grew into a dazzling constellation of techno-management marvels.<br/>

                &emsp;Each passing year, Srijan paints the canvas of curiosity with vibrant strokes. From the rhythmic dance of code to the strategic symphony of management, it beckons minds to weave dreams in the realms of innovation, design, and robotics.
                &emsp;Beneath the keen eyes of creators, Srijan becomes a vibrant gathering. Across the city's limits, and beyond state lines, eager minds converge, drawn by the siren call of workshops, nail-biting events and the rhythmic beats of cultural episodes.<br/>

                &emsp;In this ephemeral four-day dance, Srijan isn't just a fest , it's a hymn sung by the brightest minds, resonating through the corridors of Jadavpur's legacy.
                </p>
            </div>
        </section>
    )
}

export default About
