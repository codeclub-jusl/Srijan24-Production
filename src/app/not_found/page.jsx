"use client";
import Image from 'next/image';
import "./not_found.css";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function Not_Found()
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
    <main className="main">
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