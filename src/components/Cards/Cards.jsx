import Link from "next/link";
import "./Cards.css";
import Image from "next/image";

export default function Cards(){
  return (
    <>
      <div className="cardsContainer font-Montserrat">
        <Link href={"/ambassador"} className="cardBox">
          <Image src={"/images/ambassador.jpeg"} height={800} width={850} alt="cardImage" className="cardImage"/>
          <p>Campus Ambassador</p>
        </Link>


        <Link href={"/events"} className="cardBox">
          <Image src={"/images/events.jpg"} height={800} width={850} alt="cardImage" className="cardImage"/>
          <p>Events</p>
        </Link>
        <Link href="/merchandise" className="cardBox">
          <Image src={"/images/merchandise.jpg"} height={800} width={850} alt="cardImage" className="cardImage object-cover"/>
          <p>Merchandise</p>
          {/* <div className="lockedCard">Locked</div> */}
        </Link>
        <Link href={"/workshop"} className="cardBox">
          <Image src={"/images/workshop.jpg"} height={800} width={850} alt="cardImage" className="cardImage object-cover"/>
          <p>Workshop</p>
        </Link>

        {/* <div className="cardBox disabledCard">
          <Image src={"/images/speakers.jpg"} height={800} width={850} alt="cardImage" className="cardImage object-cover"/>
          <p>Speakers and Guests</p>
          <div className="lockedCard">Locked</div>
        </div> */}
        <Link href={"/speakers-and-guests"} className="cardBox">
          <Image src={"/images/speakers.jpg"} height={800} width={850} alt="cardImage" className="cardImage"/>
          <p>Speakers and Guests</p>
        </Link>

      </div>
    </>
  )
}