"use client";
import Link from "next/link";
import { LiaPowerOffSolid } from "react-icons/lia";
import { GoClock } from "react-icons/go";
import { GoImage } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import "./Navbar.css";
function Navbar(){
    return(
        <div >
            <div id="Navbar" className="fixed top-0 z-50 w-full" >
                <div className="flex flex-row bg-transparent my-8  justify-between w-full">
                    <div className="header-text flex-col md:ml-20 ml-10 hidden sm:block text-[#FFFFFF] font-light md:text-3xl text-md">
                        <div>
                            Techno Management Fest of
                        </div>
                        <div>
                            Jadavpur University
                        </div>
        

                    </div>
                    <div className="login-text bg-black rounded-tr-3xl rounded-bl-3xl text-white md:mr-20 ml-auto mr-10 md:py-2 py-4 md:my-4 mt-2 px-2 md:text-sm text-xs w-32 mb-auto text-center">
                        login | Sign Up

                    </div>

                </div>
                <div className="bg-gradient-to-b from-[#FFFFFF66]  to-[#1B00474D] z-50 h-[200px] fixed w-[45px] top-[35vh] left-[5vw] rounded-t-3xl rounded-b-3xl p-[2px]">
                    <div className="flex flex-col h-full bg-gradient-to-b from-[#6100FF40] via-[#6100FF40] to-[#6100FF80]
                      rounded-t-3xl rounded-b-3xl justify-around gap-2 py-2">
                        <Link href="#" className="my-auto mx-auto"><LiaPowerOffSolid size={35} color="#FFFFFF66"/></Link>
                        <Link href="#" className="mx-auto my-auto"><GoClock size={33} color="#FFFFFF66"/></Link>
                        <Link href="#" className="mx-auto my-auto"><GoImage size={35} color="#FFFFFF66"/></Link>
                        <Link href="#" className="mx-auto my-auto"><CiMail size={35} color="#FFFFFF66" style={{"strokeWidth":"0.45px"}}/></Link>


                    </div>

                </div>
                
                

            </div>
            
            
        </div>
        
    );
};
export default Navbar;


