"use client";
import "./merchendise.css"
import Image from "next/image";
import { useState , useEffect} from "react";
import Form from "./Form";
export default function Merchendise()
{
    const tshirts = ["/images/black_front.png" , "/images/black_back.png" , "/images/tshirt_front.png" , "/images/tshirt_back.png" , "/images/white_front.png" , "/images/white_back.png"]
    const [imageUrl , setImageUrl] = useState("/images/black_front.png");
    const [num , setNum] = useState(1);
    const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedCount = (num+1)%6;
            setNum(updatedCount);
            setImageUrl(tshirts[num])
        }, 3000);
        return () => clearInterval(intervalId);
      }, [num]);
    function handleSubmit(event)
    {
        event.preventDefault();
        console.log("Submitted");
    }
    return <div className="bg-gradient-to-r from-[#916bcf] to-[#ff3ab0]" id="merchendise-body">
        <header>Introducing you to JUSL Srijan 2024 Merchendise</header>
        <div id="merchendise-main">
            <div id="Image-Container">
                <Image src={imageUrl} height={300} width={300} alt="Picture of the author" />
                <div id="picPositions">
                    <button style={{backgroundColor : num===1 ? "white" : "purple"}} className="tshirtPosition"></button>
                    <button style={{backgroundColor : num===2 ? "white" : "purple"}} className="tshirtPosition"></button>
                    <button style={{backgroundColor : num===3 ? "white" : "purple"}} className="tshirtPosition"></button>
                    <button style={{backgroundColor : num===4 ? "white" : "purple"}} className="tshirtPosition"></button>
                    <button style={{backgroundColor : num===5 ? "white" : "purple"}} className="tshirtPosition"></button>
                    <button style={{backgroundColor : num===0 ? "white" : "purple"}} className="tshirtPosition"></button>
                </div>
            </div>
            <div id="ButtonContainer">
                <div id="cost">Only in 399 &#8377;</div>
                <button id="order" className="formButtons" onClick={toggleModal}>Click to Order</button>
            </div>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <Form handleSubmit={handleSubmit} toggleModal={toggleModal}/>
                    </div>
                </div>
            )}
        </div>
    </div>;
};
