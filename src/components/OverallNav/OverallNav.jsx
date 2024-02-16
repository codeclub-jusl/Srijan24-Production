import Link from "next/link";
import './OverallNav.css';
import Image from "next/image";
import Script from "next/script";
export default function OverallNav() {
    return (
        <>
            <div className="box">
                <Image src="/assets/Srijan logo.png" width={250} height={250}></Image>
            </div>
            <div className="box1">
                <Link href="/dasboard"><p>Dashboard</p></Link>
                <Link href="/dasboard"><p>Events</p></Link>
                <Link href="/reg"><p>Merchandise</p></Link>
                <Link href="/reg"><p>Login/SignUp</p></Link>
                <Link href="/reg"><p>SrijanGPT</p></Link>
                <Link href="/reg"><p>AboutUs</p></Link>
                <Image src="/assets/mascot-front2.png" width={100} height={100}></Image>
            </div>
            <Script src="/js/nav.js" />
        </>
    )
}