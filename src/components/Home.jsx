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
const Home = () => {
    return (
        <div>
            <style>{`
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                
                
            }
            body{
                background-color: rgb(35,30,60);
                // gradient 
                
            }
 
            #top{
                position: relative;
                background-image: url(${backgroundStars});
                height: 60rem;

                
                
            }
            #login-button{
                position: absolute;
                top: 5vh;
                right: 5vw;
                font-size: 1.5vw;
            }
            #header-text{
                position: absolute;
                top: 5vh;
                left: 5vw;
                font-size: 2vw;
                color: white;
                font-weight: bold;
            }

            #background-stars{
                position: absolute;
                left: auto;
                right: auto
                width: 100%;
                height: 100%;
                z-index: 0;
            }

            #saturn-left{
                position: absolute;
                top: 20vh;
                left: 5vw;
                z-index: 0;
                width: 10vw;

            }

            #saturn-right{
                position: absolute;
                top: 20vh;
                right: 5vw;
                z-index: 0;
                width: 15vw;

            }
            #small-saturn{
                position: absolute;
                top: 45vh;
                right: 10vw;
                z-index: 0;
                width: 5vw;

            }

            #srijan-centrepiece{
                position: absolute;
                top: 14vh;
                left: 50%;
                z-index: 1;
                transform: translateX(-50%);
            }
            @media (max-width: 700px){
                #top{
                    height: 50rem;
                }
                #login-button{
                    position: absolute;
                    bottom: 5vh;
                    right: 5vw;
                    font-size: 0.8rem;
                }
                #header-text{
                font-size: 1rem;

                }
                #srijan-centrepiece{
                    top: 14vh;
                }
            }
            
            
            #valley-and-robot{
                position: relative;
                width: 100%;


            #valley-with-drops{
                
                position: absolute;
                top: 20vw;
                z-index: 1;
               
            }
            #cybercity-outline{
                position: absolute;
                top: 0;


            }
            #mascot-front{
                position: absolute;
                top: 20vw;
                z-index: 2;
                width: 20%;
            }
            #mascot-intro{
                font-size: 2vw;
            }
            #mascot-desc{
                margin-top: 0.5vw;
                font-size: 1vw;

            }
            @media (max-width: 700px){
                #mascot-front{
                    width: 40%;
                }
                #mascot-intro{
                    font-size: 1.5rem;
                }
                #mascot-desc{
                    font-size: 1rem;
                }
            }


 





            

            
            

            `}</style>

            <div id='top' className='flex flex-col items-center'>
                <div id='background-stars'>
                    <Image src={backgroundStars} />
                </div>
                <div id='header-text'>
                    Techno Management Fest of <br /> Jadavpur University
                </div>
                <div id='login-button'>
                    <LoginButton id='login-button' />
                </div>
                <div id='saturn-left'>
                    <Image src={saturnLeft} />
                </div>
                <div id='saturn-right'>
                    <Image src={saturnRight} />
                </div>

                <div id='small-saturn'>
                    <Image src={smallSaturn} />
                </div>

                <div id='srijan-centrepiece'>
                    <SrijanCentrepiece />
                </div>
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
                    <Image src={mascotfront} />
                </div>
                <div id='valley-with-drops'>
                    <Image src={valleyWithDrops} />
                </div>
                <div id='cybercity-outline'>
                    <Image src={cybercityOutline} />
                </div>
            </div>
        </div>
    )
}
export default Home
