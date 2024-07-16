"use client"

import { useContext } from "react"
import { Controller } from "$/provider/provider"

import "./sidebar.css"

interface Symbol {
  name?: string
  symbol?: string
  unicode?: string
  html_entity?: string
}

export default function Sidebar({
  symbol,
  name,
}: {
  symbol: Symbol | null | string
  name: string
}) {
  const { loading } = useContext(Controller)

  if (typeof symbol === "string") {
    symbol = { symbol: symbol }
  }

  return (
    <section className="sidebar">
      <div className="tabber">
        <button className="active">Unicode</button>
        <button>SVG</button>
        <button>Pattern</button>
      </div>
      <figure>{symbol && symbol.symbol}</figure>
      <header>
        <h2>{name}</h2>
      </header>
      <footer>
        <button className="download">Download</button>
        <button className="copy">Copy </button>
      </footer>
    </section>
  )
}
