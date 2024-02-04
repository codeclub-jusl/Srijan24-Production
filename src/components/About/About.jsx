import Image from 'next/image'
import './About.css'
import about from '../../../public/images/about/about.png'
import mobile from '../../../public/images/about/mobile.jpg'

const About = () => {
    return (
        <section className='about w-full h-fit sm:h-screen'>
            <div className='w-full h-screen bg-[#030022] absolute -z-10'>
                <Image src={about} fill className='relative object-cover' />
            </div>
            <div className='about_content w-full h-full relative -z-0 text-white p-12 sm:p-[120px] flex flex-col justify-center gap-12'>
                <h1 className='relative text-4xl sm:text-5xl font-normal'>
                    About{' '}
                    <span className='font-semibold'>Jadavpur University</span>
                </h1>
                <p className='relative font-normal text-lg sm:text-xl text-justify'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h1 className='relative text-4xl sm:text-5xl font-normal'>
                    About <span className='font-semibold'>Srijan</span>
                </h1>
                <p className='relative font-normal text-lg sm:text-xl text-justify'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </section>
    )
}

export default About
