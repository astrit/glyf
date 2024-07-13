"use client"

import { usePathname } from "next/navigation"
import Link from "@/link/link"

import "@/nav/nav.css"

const Links = [
  { href: "/", label: "Icons", title: "Glyf APP" },
  { href: "/", label: "Patterns", title: "Glyf APP" },
  { href: "/", label: "Colors", title: "Glyf APP" },
  { href: "/", label: "Layouts", title: "Glyf APP" },
]

export default function Nav() {
  const current = usePathname()
  return (
    <nav>
      {Links.map(({ href, label, title }) => (
        <Link
          key={href}
          href={href}
          data-title={title}
          className={current === href ? "active" : ""}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
