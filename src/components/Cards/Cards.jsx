import "./Cards.css";
import Image from "next/image";

export default function Cards(){
  return (
    <>
      <div className="cardsContainer">
        <div className="cardBox disabledCard">
          <Image src={"/images/Galleria/1.jpg"} height={100} width={100} alt="cardImage" className="cardImage"/>
          <p>Campus Ambassador</p>
          <div className="lockedCard">Locked</div>
        </div>
        <div className="cardBox disabledCard">
          <Image src={"/images/Galleria/1.jpg"} height={100} width={100} alt="cardImage" className="cardImage"/>
          <p>Events</p>
          <div className="lockedCard">Locked</div>
        </div>
        <div className="cardBox disabledCard">
          <Image src={"/images/Galleria/1.jpg"} height={100} width={100} alt="cardImage" className="cardImage"/>
          <p>Merchandise</p>
          <div className="lockedCard">Locked</div>
        </div>
        <div className="cardBox disabledCard">
          <Image src={"/images/Galleria/1.jpg"} height={100} width={100} alt="cardImage" className="cardImage"/>
          <p>Workshop</p>
          <div className="lockedCard">Locked</div>
        </div>

      </div>
    </>
  )
}