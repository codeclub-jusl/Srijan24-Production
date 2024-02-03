"use client"
import React, { useEffect, useRef } from 'react';
import './style.css';

const TextAnimation = () => {
  const animateTextRef = useRef(null);

  useEffect(() => {
    const text = animateTextRef.current ? animateTextRef.current.children : [];
    const textLen = text.length;
    let index = 0;

    const textInTimer = 3000;
    const textOutTimer = 2800;

    const animateText = () => {
      if (!text || textLen === 0) {
        return; //if text is not initialized or empty
      }

      for (let i = 0; i < textLen; i++) {
        text[i].classList.remove('text-in', 'text-out');
      }
      text[index].classList.add('text-in');

      setTimeout(() => {
        text[index].classList.add('text-out');
      }, textOutTimer);

      setTimeout(() => {
        if (index === textLen - 1) {
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
            <div className="home-text">
              <p className="animate-text" ref={animateTextRef}>
                <span className='mix thirty'>30+</span>
                <span className='mix management'>Management</span>
                <span className='mix coding'>Coding</span>
                <span className='mix finance'>Finance</span>
                <span className='mix gaming'>Gaming</span>
                <span className='mix robotics'>Robotics</span>
              </p>
            </div>
  )
}
export default TextAnimation;