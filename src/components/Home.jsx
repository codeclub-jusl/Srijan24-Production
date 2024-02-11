import Image from 'next/image'
import './Home.css'
import saturnLeft from '../assets/saturnLeft.png'
import saturnRight from '../assets/saturnRight.png'
import smallSaturn from '../assets/smallSaturn.png'
import valleyWithDrops from '../assets/valleyWithDrops.png'
import cybercityOutline from '../assets/cybercityOutline.png'
import LoginButton from './LoginButton'
import backgroundStars from '../assets/backgroundStars.png'
import SrijanCentrepiece from './SrijanCentrepiece'
import mascotfront from '../assets/mascot-front.png'
import './Home.css'
import Countdown from './Countdown'

const Home = () => {
    return (
        <div>
            <div id='top' className='flex flex-col items-center'>
                <div
                    id='background-stars'
                    className='flex justify-center items-center'
                >
                    <Image alt='backgroudn-stars' src={backgroundStars} />
                </div>
                <div id='header-text'>
                    Techno Management Fest of <br /> Jadavpur University
                </div>
                <div id='login-button'>
                    <LoginButton id='login-button' />
                </div>
                
                <div id='saturn-left'>
                    <Image alt='saturn-left' src={saturnLeft} />
                </div>
                <div id='saturn-right'>
                    <Image alt='saturn-right' src={saturnRight} />
                </div>

                <div id='small-saturn'>
                    <Image alt='small-saturn' src={smallSaturn} />
                </div>

                <div id='srijan-centrepiece'>
                    <SrijanCentrepiece />
                </div>
            </div>
            <div id='countdown'>
                {/* <Countdown /> */}
                <Countdown />
            </div>

            <div
                id='valley-and-robot'
                className='flex justify-center items-center'
            >
                <div id='mascot-intro' className='flex flex-col items-center'>
                    <h1
                        className='flex text-white text-4xl font-bold'
                        id='mascot-intro'
                    >
                        Hey there! I am Kapla
                    </h1>
                    <p className='text-white text-lg flex ' id='mascot-desc'>
                        Your smart assistant for Srijan 2024
                    </p>
                </div>
                <div id='mascot-front'>
                    <Image alt='mascot-front' src={mascotfront} />
                </div>
                <div id='valley-with-drops'>
                    <Image alt='valley-with-drops' src={valleyWithDrops} />
                </div>
                <div id='cybercity-outline'>
                    <Image alt='cybercity-outline' src={cybercityOutline} />
                </div>
            </div>
        </div>
    )
}
export default Home
