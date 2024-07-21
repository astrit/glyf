import Icon from "@/icon/icon"
import Link from "@/link/link"

import "./affiliates.css"

export const Links = [
  {
    brand: "raycast",
    href: "https://raycast.com/?via=astrit",
    description: "Your shortcut to everything.",
  },
  {
    brand: "coolors",
    href: "https://coolors.co/?ref=5e9c74d518a3f413571ae92f",
    description: "The super fast color palettes generator!",
  },
  {
    brand: "studio",
    href: "#",
    description: "Beautiful Screen Recordings in Minutes.",
  },
  {
    brand: "central",
    href: "#",
    description: "Central icon system",
  },
]

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default function Affiliates() {
  const shuffledLinks = shuffleArray([...Links])

  return (
    <section className="affiliates">
      {shuffledLinks.map(({ href, brand, description }) => (
        <Link
          key={href + brand}
          href={href}
          target="_blank"
          title={description}
          className={brand}
        >
          <Icon name={brand} />
          <span>{brand}</span>
        </Link>
      ))}
    </section>
  )
}
