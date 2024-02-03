import TextAnimation from '@/components/hero/Animation/TextAnimation'
import React from 'react'
import logo from '/assets/Srijan logo.png';
import violetCircle from '/assets/vector.png';
import innerIcon from '/assets/Subtract.png';
const Body = () => {
  return  (<>
{/* <div className="pb-6 sm:pb-8 lg:pb-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <section className="flex flex-col items-center">
      <div className="flex max-w-xl flex-col items-center pb-16 pt-8 text-center lg:pb-48 lg:pt-32">
        <div className="mb-4 font-semibold md:mb-6 md:text-lg xl:text-xl">
          <img src='/assets/Subtract.png' alt=''/>
          <div className='my-1 z-2'>
          <img src='/assets/Srijan logo.png' alt='' />
          </div>
        </div>

        <h1 className="mb-8 text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Explore Our</h1>
        <TextAnimation/>
        <h2 className="mb-8 text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">events</h2>
          <a href="#" className="inline-block text-orange-200:rose:600 md:text-base">21st March-24th March</a>
        </div>
    </section>
  </div>
</div> */}
    <div className="flex flex-col items-center">
      <div className="text-5xl font-bold mb-4">
        F.E.T.S.U. Presents
      </div>
      <div className="text-2xl mb-4">
        srijani 24 4
      </div>
      <div className="mb-4">
        Explore our 30+ events
      </div>
      <div className="text-xl mb-4">
        21st March - 24th March
      </div>
      <img src={logo} alt="Logo" className="w-32 h-32 mb-4 z-2" />
      <img src={innerIcon} alt="Violet Circle" className="w-32 h-32 mb-4 z-1" />
      <img src={innerIcon} alt="Inner Icon" className="w-16 h-16" />
    </div>
  </>
  )
 }
export default Body