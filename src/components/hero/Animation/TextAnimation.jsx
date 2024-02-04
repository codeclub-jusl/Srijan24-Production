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
              <h1 className='mb-2 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-4xl'>Explore Our</h1>
              <p className="animate-text" ref={animateTextRef}>
                <span className='mb-2 text-4xl font-bold  text-violet-400 sm:text-5xl md:mb-12 md:text-6xl'>30+</span>
                <span className='mb-2 text-4xl font-bold  text-cyan-700 sm:text-5xl md:mb-12 md:text-6xl'>Management</span>
                <span className='mb-2 text-4xl font-bold  text-sky-800 sm:text-5xl md:mb-12 md:text-6xl'>Coding</span>
                <span className='mb-2 text-4xl font-bold  text-green-400 sm:text-5xl md:mb-12 md:text-6xl'>Finance</span>
                <span className='mb-2 text-4xl font-bold  text-orange-400 sm:text-5xl md:mb-12 md:text-6xl'>Gaming</span>
                <span className='mb-2 text-4xl font-bold  text-rose-400 sm:text-5xl md:mb-12 md:text-6xl'>Robotics</span>
              </p>
              <h2 className='mb-2 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-4xl'>events</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextAnimation;