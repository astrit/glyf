"use client"

import { useContext, useEffect, useState } from "react"
import Ads from "@/ads/ads"
import { toUnicode } from "$/func/func"
import { toast } from "sonner"

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
  const glyph = typeof symbol === "string" ? { symbol: symbol } : symbol

  // function CopySymbol(symbol: string) {
  //   navigator.clipboard.writeText(symbol)
  //   toast.success("Copied!")
  // }

  useEffect(() => {
    const handleCopy = (event: {
      key: string
      metaKey: boolean
      shiftKey: boolean
      preventDefault: () => void
    }) => {
      if (glyph && glyph.symbol) {
        if (event.key === "c" && event.metaKey && !event.shiftKey) {
          event.preventDefault()
          navigator.clipboard.writeText(glyph.symbol)
          toast.success(`${glyph.symbol} copied!`)
        } else if (event.key === "c" && event.metaKey && event.shiftKey) {
          event.preventDefault()
          navigator.clipboard.writeText(toUnicode(glyph.symbol))
          toast.success(`${toUnicode(glyph.symbol)} copied!`)
        }
      }
    }

    document.addEventListener("keydown", handleCopy)
    return () => {
      document.removeEventListener("keydown", handleCopy)
    }
  }, [glyph])

  return (
    <section className="sidebar">
      <div className="tabber">
        <button className="active">Unicode</button>
        <button>SVG</button>
        <button>Pattern</button>
      </div>
      <figure>
        {glyph && glyph.symbol}
        <input
          type="text"
          value={glyph ? toUnicode(glyph.symbol) : ""}
          readOnly
        />
      </figure>
      <header>
        <h2>{name}</h2>
      </header>
      <Ads />
    </section>
  )
}
