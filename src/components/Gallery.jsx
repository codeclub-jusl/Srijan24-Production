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
          <Image className="item first big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/1.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/2.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/3.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery"  src="/images/Galleria/4.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/5.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>

          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/6.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/7.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/8.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/9.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/10.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>

          <Image className="item first big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/11.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/12.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/13.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery"  src="/images/Galleria/14.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item first big object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/15.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>

          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/16.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/17.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/18.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/19.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/20.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>

          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/21.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/22.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/23.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/24.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
          <Image className="item object-cover w-full h-full" data-fancybox="gallery" src="/images/Galleria/25.jpg" width={200} height={150} alt='gallery' draggable={false} placeholder='blur' blurDataURL='/images/blur.jpg'/>
        </div>
      </div>
      </div>
    )
}

export default Gallery