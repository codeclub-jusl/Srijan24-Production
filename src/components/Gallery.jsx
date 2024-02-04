"use client"
import React, {useEffect} from 'react'
import "./Galleria.scss"

const Gallery = () => {

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
    
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          addAnimation();
        }
    
        function addAnimation() {
          scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
              const duplicatedItem = item.cloneNode(true);
              duplicatedItem.setAttribute("aria-hidden", true);
              scrollerInner.appendChild(duplicatedItem);
            });
          });
        }
      }, []);
    
     
   

    return (
        <div className="outer-container-scroll" data-direction="right" data-speed="fast">
          <h1 className="gallery-text">GALLERY</h1>
        <div className="scroller" data-direction="right" data-speed="fast">
        <div className="scroller__inner">
         
          <img className="item first big object-cover w-full h-full" data-fancybox="gallery" src="./images/Galleria/1.jpg" />
          <img className="item object-cover w-full h-full" data-fancybox="gallery" src="./images/Galleria/2.jpg"/>
        
          <img className="item big object-cover w-full h-full" data-fancybox="gallery" src="./images/Galleria/3.jpg"/>
          <img className="item object-cover w-full h-full" data-fancybox="gallery"  src="./images/Galleria/4.jpg"/>
       
        
          <img className="item big object-cover w-full h-full" data-fancybox="gallery" src="./images/Galleria/5.jpg"/>
          <img className="item object-cover w-full h-full" data-fancybox="gallery" src="./images/Galleria/6.jpg"/>
          <img className="item big object-cover w-full h-full" data-fancybox="gallery" src="./images/Galleria/7.jpg"/>
          <img className="item object-cover w-full h-full" data-fancybox="gallery" src="./images/Galleria/8.jpg"/>

          <img className="item big object-cover w-full h-full" data-fancybox="gallery" src="./images/Galleria/9.jpg"/>
          <img className="item object-cover w-full h-full" data-fancybox="gallery" src="./images/Galleria/10.jpg"/>
          <img className="item first big object-cover w-full h-full" data-fancybox="gallery" src="./images/Galleria/11.jpg"/>
          <img className="item object-cover w-full h-full" data-fancybox="gallery" src="./images/Galleria/12.jpg"/>

          <img className="item big object-cover w-full h-full" data-fancybox="gallery" src="./images/Galleria/13.jpg"/>
          <img className="item object-cover w-full h-full" data-fancybox="gallery"  src="./images/Galleria/14.jpg"/>
          <img className="item first big object-cover w-full h-full" data-fancybox="gallery" src="./images/Galleria/15.jpg"/>
          <img className="item object-cover w-full h-full" data-fancybox="gallery" src="./images/Galleria/17.jpg"/>
        
          
        </div>
      </div>
      </div>
    )
}

export default Gallery
