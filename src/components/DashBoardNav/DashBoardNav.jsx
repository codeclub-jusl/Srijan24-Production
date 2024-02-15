import Image from "next/image";
import Link from "next/link";
import './DashBoardNav.css'
export default function DashBoardNav() {
    return (
        <>
            <div className="box">
                <Link href="/dasboard"><p>My Profile</p></Link>
                <Link href="/reg"><p>My Watchlist</p></Link>
            </div>
            <div className="box1">
                <Link href="/reg"><p>Registered Events</p></Link>
                <Link href="/reg"><p>Pending Registrations</p></Link>
            </div>
        </>
    )
}