import Image from 'next/image'
import './About.css'

const About = () => {
    return (
        <section className='about'>
            <div className='about_content w-full h-fit bg-transparent relative -z-0 text-white flex flex-col justify-center gap-12'>
                <h1 className='relative text-4xl sm:text-5xl font-normal aboutTitle'>
                    About{' '}
                    <span className='font-semibold aboutTitleName'>Jadavpur University</span>
                </h1>
                <p className='relative font-normal text-lg sm:text-xl text-justify aboutText'>
                Nestled amidst the heart of Kolkata and steeped in history and innovation, <b className='yellowColor'>Jadavpur University</b>, founded on 24th December 1955 under the West Bengal Act XXXIII is not just a technical institute but renownedly known as the flag bearer of imparting world class multi disciplinary education amongst its students.<br/>
                Founding members of National Council of Bengal, the parent body of the Jadavpur University, in 1906 set the goal "To achieve self reliance through empowerment of Youth by imparting Best of Global Knowledge" and the varisty yet today continues to do the same
                It has provided research and policy support for state and national governments and international bodies, and conventional and non-conventional technological development for society. The University has produced notable alumni who have made significant contributions to academia and the corporate world.<br/>
                The university's commitment to research, innovation, community engagement, a legendary network of alumnus from that very spring of its establishment, and its unwavering contribution to imparting knowledge and refining the taste of culture and technology has marked its distinguished reputation not only in the Indian subcontinent but also at an international level.
                </p>
                <br />
                <h1 className='relative text-4xl sm:text-5xl font-normal aboutTitle'>
                    About <span className='font-semibold aboutTitleName'>Srijan</span>
                </h1>
                <p className='relative font-normal text-lg sm:text-xl text-justify aboutText'>
                In the heart of Kolkata, where passion ignites, <b className='yellowColor'>Srijan</b> flourishes — an annual tribute to creativity and excellence, cradled by Jadavpur. From its inception in 2007 as a humble spark, it has flourished into an spectacular festival of technology and management.<br/>

                With each passing year Srijan paints the canvas of curiosity with vibrant strokes. From the intricate patterns of coding to the strategic symphony of management, it beckons minds to explore their dreams in innovation, design and robotics.
                Across the city's limits and beyond state lines, eager minds converge, attracted by the allure of workshops, exciting competitions, and the euphoria of cultural episodes.<br/>

                In this four-day spectacle, Srijan transcends from being merely a festival, it becomes a chorus of the most brilliant minds, echoing through the halls of Jadavpur's heritage.

                Join us at <b className='yellowColor'>Jadavpur University</b> to engage in <b className='yellowColor'>35+</b> events ranging from coding competitions, b plan competitions, case studies, equity research events, robotics based competitions, web design, rap battles, treasure hunt and many more to have an experience of a lifetime.<br/>
                We also organise: <br/>
                <b className='yellowColor'>F5 talk show</b> series where in we host renowned personalities and have hosted <b className='yellowColor'>Aman Dhattarwal</b> (<span className='startupName'>Apna College</span>), <b className='yellowColor'>Raj Vikramaditya</b> (<span className='startupName'>Striver, Take U Forward</span>) and many others in the past.
                <br/>Comedy Nights, we have previously hosted <b className='yellowColor'>Rahul Subramanian</b>, <b className='yellowColor'>Anirban Dasgupta</b> and mesmerizing <b className='yellowColor'>DJ nights</b> and soul-stirring <b className='yellowColor'>Band Performances</b> of the best of the bands, creating unforgettable evenings of music and dance.
                </p>
                <p className='queryText'>For any queries reach out to <b className='orangeColor'>Bitan Banerjee</b> (<a href='mailto:bbanerjeeagp@gmail.com' className='queryMail'>bbanerjeeagp@gmail.com</a>) or <b className='orangeColor'>Harsham Mishra</b> (<a href='mailto:harsham.jitendra@gmail.com' className='queryMail'>harsham.jitendra@gmail.com</a>)</p>
            </div>
        </section>
    )
}

export default About
