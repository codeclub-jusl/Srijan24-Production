"use client";
import "./merchendise.css"
import Image from "next/image";
import { useState , useEffect} from "react";
import Form from "./Form";
// import { Modal } from "reactstrap";
export default function Merchendise()
{
    const [imageUrl , setImageUrl] = useState("/images/Picture1.jpg");
    const [num , setNum] = useState(2);
    const [flag , handleFlag] = useState(true)
    const [isInputFocused, setIsInputFocused] = useState(false);
    const handleInputFocus = () => {
        setIsInputFocused(true);
    };
    
    const handleInputBlur = () => {
        setIsInputFocused(false);
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedCount = num%5 + 1;
            setNum(updatedCount);
            setImageUrl(`/images/Picture${num}.jpg`)
        }, 3000);
        return () => clearInterval(intervalId);
      }, [num]);
    function handleSubmit(event)
    {
        event.preventDefault();
        console.log("Submitted");
    }
    function handleClick()
    {
        handleFlag(!flag);
    }
    return <div className="bg-gradient-to-r from-[#916bcf] to-[#ff3ab0]" id="merchendise-body">
        <header>Introducing you to JUSL Srijan 2024 Merchendise</header>
        <div id="merchendise-main">
            <div>
                <Image id="Merchendise-Image" src={imageUrl} height={300} width={300} alt="Picture of the author" />
                <div id="cost">Only in 399 &#8377;</div>
            </div>
            {flag===true ? <button className="formButtons" style={{boxShadow : "0px 0px 4px 4px violet"}} onClick={handleClick}>click to open the form to order</button> : <Form handleClick={handleClick} handleSubmit={handleSubmit}/>}
        </div>
    </div>;
};
