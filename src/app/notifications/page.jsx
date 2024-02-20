"use client";
import "./notifications.css";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Notification()
{
    const data={
        invitation : [
            {
                title : "Handsome Boy",
                description : "Wah kya larka haa , very handsome , isse to maza ayega"
            },
            {
                title : "Confession to Arhana",
                description : "You have been invited to confess Arhana Kundu at FETSU presents CIIPPUS 2023"
            }
        ],
        notification : [
            {
                title : "Apnar gaand marano hoye geche",
                time : "Feb 20 2024 02:06:35 GMT+0530"
            },
            {
                title : "Paytm pe 500 rupay gawa diye",
                time : "Feb 20 2024 02:06:35 GMT+0530"
            },
            {
                title : "Aaaaahhh Khide peyeche , ekhon khabo , kheye bari giye snan korbo , kore ektu ghumobo",
                time : "Feb 20 2024 02:06:35 GMT+0530"
            },
            {
                title : "Na bhai amake ektu bari jete hobe taka tulte . Tai ami jete parbo na . Tora ja  , ei je amake bolli jete etei onek .",
                time : "Feb 20 2024 02:06:35 GMT+0530"
            },
            {
                title : "Na bhai toder onek dosh ache . Ekdin age bolle ki hoy , kom se kom ek bochor age bolbi to , tahole ami bari giye taka tule rakhtam",
                time : "Feb 20 2024 02:06:35 GMT+0530"
            }
        ]
    };
    function calcDiff(date1,date2)
    {
        var diff = Math.floor(date1.getTime() - date2.getTime());
        var seconds = Math.floor(diff/1000);
        var minutes = Math.floor(seconds/60);
        var hours = Math.floor(minutes/60);
        var days = Math.floor(hours/24);
        var months = Math.floor(days/30);
        var years = Math.floor(months/12);
    
        if(years>0)
        {
            return `${years} years ${months%12===0 ? null : months%12} months ago`;
        }
        else if(months>0)
        {
            return `${months} months ago`;
        }
        else if(days>0)
        {
            return `${days} days ago`;
        }
        else if(hours>0)
        {
            return `${hours} hours ago`;
        }
        else if(minutes>0)
        {
            return `${minutes} minutes ago`;
        }
        else
        {
            return `${seconds} seconds ago`;
        }
    }
    function handleInvitation(index)
    {
        console.log("Clicked on " , index)
    }
    return <>
        <div id="notificationBody" className='bg-gradient-to-br from-black via-sky-950 to-black text-white min-h-screen font-body'>
            <div id="invitation">
                <div className="header">Invitations</div>
                <div className="notifybody">
                    {data.invitation.map((item , index) => {
                        return <div key={index} className="invitationItem" onClick={()=>handleInvitation(index)}>
                            <div id="inviteTitle">{item.title}<FaArrowRightLong id="arrowIcon" /></div>
                            <div id="inviteDesc">{item.description}</div>
                        </div>
                    })}
                </div>
            </div>
            <div id="notification">
                <div className="header">Notifications</div>
                <div className="notifybody" id="nobody">
                    {data.notification.map((item , index) => {
                        return <div key={index} className="notificationItem">
                            <div>{item.title}</div>
                            <span>{calcDiff(new Date(),new Date(item.time))}</span>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </>
}