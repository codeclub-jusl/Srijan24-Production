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
        <div className="outer-container-scroll">
        <div className="scroller" data-direction="right" data-speed="fast">
        <div className="scroller__inner">
         
          <a className="item first big object-cover w-full h-full" data-fancybox="gallery" style={{background:'url("https://www.w3schools.com/w3css/img_lights.jpg")'}}></a>
          <a className="item object-cover w-full h-full" data-fancybox="gallery" style={{background:'url("https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></a>
          <a className="item object-cover w-full h-full" data-fancybox="gallery" style={{background:'url("https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></a>
          <a className="item big object-cover w-full h-full" data-fancybox="gallery" style={{background:'url("https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></a>
          <a className="item object-cover w-full h-full" data-fancybox="gallery"  style={{background:'url("https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></a>
          <a className="item object-cover w-full h-full" data-fancybox="gallery" style={{background:'url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></a>
          <a className="item object-cover w-full h-full" data-fancybox="gallery" style={{background:'url("https://images.pexels.com/photos/18375731/pexels-photo-18375731/free-photo-of-racecar-phtography.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></a>
          <a className="item big object-cover w-full h-full" data-fancybox="gallery" style={{background:'url("https://images.pexels.com/photos/39574/flower-exotic-colorful-pink-39574.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></a>
          <a className="item object-cover w-full h-full" data-fancybox="gallery" style={{background:'url("https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></a>
          <a className="item big object-cover w-full h-full" data-fancybox="gallery" style={{background:'url("https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></a>
          <a className="item object-cover w-full h-full" data-fancybox="gallery" style={{background:'url("https://images.pexels.com/photos/217114/pexels-photo-217114.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></a>
          <a className="item object-cover w-full h-full" data-fancybox="gallery" style={{background:'url("https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></a>
          <a className="item big object-cover w-full h-full" data-fancybox="gallery" style={{background:'url("https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></a>
          <a className="item object-cover w-full h-full" data-fancybox="gallery" style={{background:'url("https://images.pexels.com/photos/16796363/pexels-photo-16796363/free-photo-of-pic-du-midi-de-bigorre-in-pyrenees.jpeg?auto=compress&cs=tinysrgb&w=600")'}}></a>
      
          
         
        </div>
      </div>
      </div>
    )
}

export default Gallery
