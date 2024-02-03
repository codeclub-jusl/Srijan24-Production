import Image from 'next/image'
import blackSrijanRound from '../assets/srijanLogoRoundBlackSquare.png'
import srijanLogoBlack from '../assets/srijanLogoRectangleBlack.png'
import './SrijanCenterpiece.css'
import subtract from '../assets/Subtract.png'
import AutoScrollingEvents from './AutoScrollingEvents'
// inverse colors

const SrijanCentrepiece = () => {
    return (
        <div className='flex flex-col items-center'>
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
                <AutoScrollingEvents></AutoScrollingEvents>
                <h1 className='text-3xl text-white'> events</h1>

                <div className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
                    21st March - 24th March
                </div>
            </div>
        </div>
    )
}
export default SrijanCentrepiece
