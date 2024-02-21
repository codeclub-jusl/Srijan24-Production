import Link from "next/link";
import styles from './overallNav.module.css';
import Image from "next/image";
import Script from "next/script";
export default function OverallNav() {
    /*const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = (e)=>{
        if(e.currentTarget.scrollTop > lastScrollY){
            setShowNavbar(false);
        }
        else{
            setShowNavbar(true);
        }
        setLastScrollY(e.currentTarget.scrollTop);
    }*/
    return (
        <div>
            <div className={styles.box}>
                <Image src="/assets/Srijan logo.png" width={180} height={180}></Image>
            </div>
            <div className={styles.box1}>
                <Link href="/events"><p>Events</p></Link>
                <Link href="/login"><p>LogIn</p></Link>
            </div>
        </div>
    )
}