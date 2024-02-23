"use client";
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default () => 
{
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
          function myFunction()
          {
            router.push('/');
          };
          myFunction();
        }, 20000);
    
        return () => clearTimeout(timer);
      }, []);
    return <>
    <main id="not_found_main">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="textNotFound">
            <h1>OOPS!</h1>
            <p>Page not found!</p>
        </div>
        <div id="notFoundImage">
            <Image src="/images/astronaut.png" alt="#" height={300} width={300} />
        </div>
    </main>
    </>
}