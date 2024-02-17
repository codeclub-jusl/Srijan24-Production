"use client";
import "./watchlist.css";
// import { BsPinAngleFill } from "react-icons/bs";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { ImPushpin } from "react-icons/im";
export default function Watchlist() {
    // Array to be changed
    const wishes = [
        {
            image: "/images/Coding.png",
            name: "Competitive Coding",
            time: "16th March",
            venue: "SMCC building"
        },
        {
            image: "/images/Coding.png",
            name: "Treasure Hunt",
            time: "16th March",
            venue: "SMCC building"
        },
        {
            image: "/images/Coding.png",
            name: "Sherlocks",
            time: "16th March",
            venue: "SMCC building"
        },
        {
            image: "/images/Coding.png",
            name: "Code",
            time: "16th March",
            venue: "SMCC building"
        },
        {
            image: "/images/Coding.png",
            name: "Code",
            time: "16th March",
            venue: "SMCC building"
        },
        {
            image: "/images/Coding.png",
            name: "Code",
            time: "16th March",
            venue: "SMCC building"
        },
        {
            image: "/images/Coding.png",
            name: "Code",
            time: "16th March",
            venue: "SMCC building"
        },
        {
            image: "/images/Coding.png",
            name: "Code",
            time: "16th March",
            venue: "SMCC building"
        }
    ]
    function deleteEvent(name) {
        console.log("Deleted event name", name)
    }
    function Wish(props) {
        return <div className="watch">
            <div><ImPushpin size={27} color="red" style={{ position: "relative", left: "53%" }} /></div>
            <div className="watchComponents"><Image src={props.image} alt="No image" height={300} width={300} /></div>
            <div className="watchComponents" id="eventName">{props.name}</div>
            <div className="watchComponents" id="eventTime">{props.time}</div>
            <div className="watchComponents" id="eventVenue">{props.venue}</div>
            <div id="deleteIcon" onClick={() => deleteEvent(props.name)}>Delete <MdDelete size={24} /></div>
        </div>
    }
    return <>
        <div id="Watchlist-body" className="bg-gradient-to-r from-[#25015E] to-[#050027]">
            <header>Your Watchlist</header>
            <div id="watchlist">
                {wishes.map((item, index) => {
                    return <Wish key={index} image={item.image} name={item.name} time={item.time} venue={item.venue} />
                })}
            </div>
        </div>
    </>;
};
