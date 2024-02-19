import Image from "next/image";
import Link from "next/link";
import './DashBoardNav.css';
export default function DashBoardNav() {
    return (
        <>
            <div className="box">
                <Link href="/testprop"><p>My Profile</p></Link>
            </div>
            <div className="box1">
                <Link href="/login"><p>Login</p></Link>
            </div>
        </>
    )
}