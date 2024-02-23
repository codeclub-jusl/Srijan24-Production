import Link from "next/link";
import "./Cards.css";
import Image from "next/image";

export default function Cards(){
  return (
    <>
      <div className="cardsContainer font-Montserrat">
        <div className="cardBox disabledCard">
          <Image src={"/images/ambassador.jpeg"} height={300} width={250} alt="cardImage" className="cardImage object-cover"/>
          <p>Campus Ambassador</p>
          <Link href="/ambassador" target="_blank" className="unlockedCard"></Link>
        </div>

        <Link href={"/events"} className="cardBox">
          <Image src={"/images/events.jpg"} height={300} width={250} alt="cardImage" className="cardImage"/>
          <p>Events</p>
          {/* <div className="lockedCard">Locked</div> */}
        </Link>
        <div className="cardBox disabledCard">
          <Image src={"/images/merchandise.jpg"} height={300} width={250} alt="cardImage" className="cardImage object-cover"/>
          <p>Merchandise</p>
          <div className="lockedCard">Locked</div>
        </div>
        <div className="cardBox disabledCard">
          <Image src={"/images/workshop.jpg"} height={300} width={250} alt="cardImage" className="cardImage object-cover"/>
          <p>Workshop</p>
          <div className="lockedCard">Locked</div>
        </div>

      </div>
    </>
  )
}