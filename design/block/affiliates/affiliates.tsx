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

export default function Affiliates() {
  return (
    <section className="affiliates">
      {Links.map(({ href, brand }) => (
        <Link key={href} href={href} target="_blank" className={brand}>
          <Icon name={brand} />
          <span>{brand}</span>
        </Link>
      ))}
    </section>
  )
}
