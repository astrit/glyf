import Icon from "@/icon/icon"
import Link from "@/link/link"

import "./affiliates.css"

export const Links = [
  { brand: "raycast", href: "https://raycast.com/?via=astrit" },
  {
    brand: "coolors",
    href: "https://coolors.co/?ref=5e9c74d518a3f413571ae92f",
  },
  {
    brand: "studio",
    href: "#",
  },
  {
    brand: "central",
    href: "#",
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
      {shuffledLinks.map(({ href, brand }) => (
        <Link key={href + brand} href={href} target="_blank" className={brand}>
          <Icon name={brand} />
          <span>{brand}</span>
        </Link>
      ))}
    </section>
  )
}
