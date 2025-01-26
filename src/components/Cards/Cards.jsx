import Link from "next/link";
import Image from "next/image";

const Cards = () => {
  const cards = [
    {
      image: "/images/ambassador.jpeg",
      title: "Campus Ambassador",
      locked: false,
      href: "https://forms.gle/TUUZX1gZfJG627jdA"
    },
    {
      image: "/images/events.jpg",
      title: "Events",
      locked: true,
      href: "/events"
    },
    {
      image: "/images/merchandise.jpg",
      title: "Merchandise",
      locked: true,
      href: "/merchandise"
    },
    {
      image: "/images/workshop.jpg",
      title: "Workshop",
      locked: true,
      href: "/workshop"
    },
    {
      image: "/images/speakers.jpg",
      title: "Speakers and Guests",
      locked: true,
      href: "/speakers-and-guests"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto p-4">
      {cards.map((card, index) => (
        card.locked ? (
          <div 
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md cursor-not-allowed h-48"
          >
            <div className="relative h-full w-full">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover filter blur-[2px]"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                <p className="text-white text-base mb-1">{card.title}</p>
                <p className="text-white/90 text-sm">Coming Soon...</p>
              </div>
            </div>
          </div>
        ) : (
          <Link key={index} href={card.href} className="relative overflow-hidden rounded-lg shadow-md h-48">
            <div className="relative h-full w-full">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white text-base">{card.title}</p>
              </div>
            </div>
          </Link>
        )
      ))}
    </div>
  );
};

export default Cards;