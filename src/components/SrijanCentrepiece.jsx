import Image from 'next/image'
import blackSrijanRound from '../assets/srijanLogoRoundBlackSquare.png'
import srijanLogoBlack from '../assets/srijanLogoRectangleBlack.png'
import subtract from '../assets/Subtract.png'
// inverse colors

const SrijanCentrepiece = () => {
    return (
        <div className='flex flex-col items-center'>
            <style>{`
            .invert-colors {
                filter: invert(1);
            }
            #subtract{
                width: 20rem;
            }
                    
            #srijan-logo-black{
                position: absolute;
                width: 20rem;

                
            }


            #black-srijan-round{
                top: 20v;
                position: absolute;
                width: 18rem;
                height: 18rem;
                padding: 0;
                margin-top: 17rem;
                background-image: linear-gradient(180deg, rgba(66,35,190,1) 0%, rgba(78,44,100,1) 100%);
                border-radius: 100%;

                
            }
            #events-text{

                margin-top: 14rem;
                text-align: center;
            }
            
            @media (max-width: 700px) {
                #subtract{
                    width: 15rem;
                }
                #srijan-logo-black{
                    width: 15rem;
                }
                #black-srijan-round{
                    width: 12rem;
                    height: 12rem;
                    margin-top: 12.5rem;
                }
                #events-text{
                    margin-top: 10rem;
                }
            }

            
            `}</style>
            <div id='subtract' className='flex flex-col items-center'>
                <Image src={subtract} />

                <div id='srijan-logo-black'>
                    <Image className='invert-colors' src={srijanLogoBlack} />
                </div>
            </div>
            <div id='black-srijan-round' className='circle'>
                <Image
                    className='invert-colors w-full h-full'
                    src={blackSrijanRound}
                />
            </div>
            <div id='events-text'>
                <h1 className='text-4xl font-bold text-white'> Explore our</h1>
                <div
                    className='text-5xl font-bold text text-purple-500
                '
                >
                    30+
                </div>
                <h1 className='text-3xl text-white'> events</h1>

                <div className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
                    21st March - 24th March
                </div>
            </div>
        </div>
    )
}
export default SrijanCentrepiece
