"use client";
import "./merchendise.css"
import Image from "next/image";
import { useState, useEffect } from "react";
import Form from "./Form";
export default function Merchendise() {
    const tshirts = ["/images/black_front.png", "/images/black_back.png", "/images/tshirt_front.png", "/images/tshirt_back.png", "/images/white_front.png", "/images/white_back.png"]
    const [num, setNum] = useState(0);
    const [modal, setModal] = useState(false);

    function toggleModal() {
        setModal(!modal);
        if (!modal) {
            document.body.classList.add('active-modal');
        }
        else {
            document.body.classList.remove('active-modal');
        }
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedCount = (num + 1) % 6;
            setNum(updatedCount);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [num]);
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted");
    }
    return (
        <>
            <div className='absolute inset-0 -z-80'>
                <Image src="/images/about/about.png" className='' alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100vh' }}></Image>
            </div>
            <div className="bg-gradient-to-r from-[#25015E] to-[#050027]" id="merchendise-body">
                <header>JUSL Srijan 2024 <span id="merch">Merchandise</span></header>
                <div id="merchendise-main">
                    <div id="Image-Button-Container">
                        <div id="ImageHolder">
                            <Image id="tshirt1" src={tshirts[(num + 4) % 6]} height={300} width={300} alt="Picture of the author" />
                            <Image id="tshirt2" src={tshirts[(num + 5) % 6]} height={300} width={300} alt="Picture of the author" />
                            <Image id="tshirt3" src={tshirts[num]} height={300} width={300} alt="Picture of the author" />
                            <Image id="tshirt4" src={tshirts[(num + 1) % 6]} height={300} width={300} alt="Picture of the author" />
                            <Image id="tshirt5" src={tshirts[(num + 2) % 6]} height={300} width={300} alt="Picture of the author" />
                        </div>
                        <div id="picPositions">
                            <button style={{ backgroundColor: num === 1 ? "white" : "purple" }} className="tshirtPosition"></button>
                            <button style={{ backgroundColor: num === 2 ? "white" : "purple" }} className="tshirtPosition"></button>
                            <button style={{ backgroundColor: num === 3 ? "white" : "purple" }} className="tshirtPosition"></button>
                            <button style={{ backgroundColor: num === 4 ? "white" : "purple" }} className="tshirtPosition"></button>
                            <button style={{ backgroundColor: num === 5 ? "white" : "purple" }} className="tshirtPosition"></button>
                            <button style={{ backgroundColor: num === 0 ? "white" : "purple" }} className="tshirtPosition"></button>
                        </div>
                    </div>
                    <div id="ButtonContainer">
                        <div id="cost" >Only in 399 &#8377;</div>
                        <button id="order" onClick={toggleModal}>Click to Order</button>
                    </div>
                    {modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <Form handleSubmit={handleSubmit} toggleModal={toggleModal} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
