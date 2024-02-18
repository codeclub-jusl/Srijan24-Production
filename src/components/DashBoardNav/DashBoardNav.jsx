import Image from "next/image";
import Link from "next/link";
import './DashBoardNav.css';
export default function DashBoardNav() {
    return (
        <>
            <div className="box">
                <Link href="/testprop"><p>My Profile</p></Link>
                <Link href="/watchlist"><p>My Watchlist</p></Link>
            </div>
            <div className="box1">
                <Link href="/registeredevents"><p>Registered Events</p></Link>
                <Link href="/pendingregistration"><p>Pending Registrations</p></Link>
            </div>
        </>
    )
}