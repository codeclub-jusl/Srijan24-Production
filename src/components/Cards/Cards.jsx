import Link from "next/link";
import "./Cards.css";
import Image from "next/image";

export default function Cards(){
  return (
    <>
      <div className="cardsContainer">
        <div className="cardBox disabledCard">
          <Image src={"/images/ambassador.jpeg"} height={300} width={250} alt="cardImage" className="cardImage"/>
          <p>Campus Ambassador</p>
          <div className="lockedCard">Locked</div>
        </div>
        <Link href={"/events"} className="cardBox">
          <Image src={"/images/events.jpg"} height={300} width={250} alt="cardImage" className="cardImage"/>
          <p>Events</p>
          {/* <div className="lockedCard">Locked</div> */}
        </Link>
        <div className="cardBox disabledCard">
          <Image src={"/images/merchandise.jpg"} height={300} width={250} alt="cardImage" className="cardImage"/>
          <p>Merchandise</p>
          <div className="lockedCard">Locked</div>
        </div>
        <div className="cardBox disabledCard">
          <Image src={"/images/workshop.jpg"} height={300} width={250} alt="cardImage" className="cardImage"/>
          <p>Workshop</p>
          <div className="lockedCard">Locked</div>
        </div>

      </div>
    </>
  )
}