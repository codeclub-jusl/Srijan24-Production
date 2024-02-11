import Script from 'next/script'
import './Countdown.css'
import './flipdown/flipdown.css'
// run the flipdown script in the client machine

const Countdown = () => {
    return (
        <div className='flex justify-center items-center '>
            <div id='flipdown' className='flipdown'>
                <Script src='js/flipdown.js' />
            </div>
        </div>
    )
}

export default Countdown
