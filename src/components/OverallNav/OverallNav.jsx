import Link from "next/link";
import styles from './overallNav.module.css';
import Image from "next/image";
import Script from "next/script";
export default function OverallNav() {
    return (
        <>
            <div className={styles.box}>
                <Image src="/assets/Srijan logo.png" width={250} height={250}></Image>
            </div>
            <div className={styles.box1}>
                <Link href="/dasboard"><p>Dashboard</p></Link>
                <Link href="/events"><p>Events</p></Link>
                <Link href="/merchandise"><p>Merchandise</p></Link>
                <button>Logout</button>
                <Link href="/reg"><p>AboutUs</p></Link>
            </div>
        </>
    )
}