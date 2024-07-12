"use client"

import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import Link from "@/link/link"
import Nav from "@/nav/nav"

import "@/header/header.css"


function Left({ children }: { children: ReactNode }) {
  return <div className="sides left">{children}</div>
}

function Right({ children }: { children: ReactNode }) {
  return <div className="sides right">{children}</div>
}

export default function Header() {
  const path = usePathname()

  return (
    <header className="main-header">
      <Left>
        <Nav />
      </Left>
      <Right>
        <Link href="#">Contribute</Link>
        <Link href="#">Donate</Link>
      </Right>
    </header>
  )
}
