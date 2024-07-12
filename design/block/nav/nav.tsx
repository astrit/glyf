"use client"

import { usePathname } from "next/navigation"
import Link from "@/link/link"

import "@/nav/nav.css"

const Links = [
  { href: "/", label: "Shqip", title: "Shqip" },
  { href: "/language", label: "Language", title: "Language" },
  { href: "/flags", label: "Flags", title: "Flags" },
  { href: "/symbols", label: "Symbols", title: "Symbols" },
  { href: "/history", label: "History", title: "History" },
  { href: "/geography", label: "Geography", title: "Geography" },
  { href: "/facts", label: "Facts", title: "Facts" },
  { href: "/blog", label: "Blog", title: "Blog" },
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
