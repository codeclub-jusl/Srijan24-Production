'use client'
import React, { useEffect, useRef } from 'react';
import './style.css';

const TextAnimation = () => {
  const animateTextRef = useRef(null);

  useEffect(() => {
    const txts = animateTextRef.current ? animateTextRef.current.children : [];
    const txtsLen = txts.length;
    let index = 0;

    const textInTimer = 3000;
    const textOutTimer = 2800;

    const animateText = () => {
      if (!txts || txtsLen === 0) {
        return; // Bail out if txts is not initialized or empty
      }

      for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove('text-in', 'text-out');
      }
      txts[index].classList.add('text-in');

      setTimeout(() => {
        txts[index].classList.add('text-out');
      }, textOutTimer);

      setTimeout(() => {
        if (index === txtsLen - 1) {
          index = 0;
        } else {
          index++;
        }
        animateText();
      }, textInTimer);
    };

    animateText();
  }, [animateTextRef]);

  return (
    <div>
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="home-text">
              <h1 className='mb-2 text-4xl font-bold text-white sm:text-3xl md:mb-12 z-10 montserrat'>Explore Our</h1>
              <p className="animate-text animatedText z-[1] overflow-hidden" ref={animateTextRef}>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#FF0099] to-[#6100FF] '>35+</span>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#6100FF] to-[#00E0FF] '>Management</span>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#D907FF] to-[#F4E2FF] '>Coding</span>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#FF0099] to-[#6100FF] '>Finance</span>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] to-[#FF0099] '>Gaming</span>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#FBFBFB] to-[#5600E1] '>Robotics</span>
              </p>
              <h2 className='mb-1 text-4xl font-bold text-white sm:text-3xl montserrat'>events</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextAnimation;


