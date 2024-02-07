"use client"
import React, {useEffect} from 'react'
import "./Galleria.scss"
import Image from 'next/image'

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
        <div className="outer-container-scroll galleryContainer" data-direction="right" data-speed="fast">
          <h1 className="gallery-text">GALLERY</h1>
        <div className="scroller" data-direction="right" data-speed="fast">
        
        <div className="scroller__inner">
          <Image className="item first big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/1.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/2.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/3.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery"  src="/images/Galleria/4.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/5.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>

          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/6.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/7.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/8.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/9.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/10.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>

          <Image className="item first big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/11.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/12.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/13.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery"  src="/images/Galleria/14.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item first big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/15.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>

          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/16.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/17.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/18.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/19.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/20.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>

          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/21.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/22.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/23.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/24.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/25.png" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
        </div>
      </div>
      </div>
    )
}

export default Gallery