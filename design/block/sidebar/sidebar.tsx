"use client"

import { useContext, useEffect, useMemo, useState } from "react"
import Ads from "@/ads/ads"
import { toUnicode } from "$/func/func"
import { toast } from "sonner"

import "./sidebar.css"

import Affiliates from "@/affiliates/affiliates"

interface Symbol {
  name?: string
  symbol?: string
  unicode?: string
  html_entity?: string
  category?: any
}

const generateHtmlEntity = (symbol: string = "") => {
  return `&#${symbol.charCodeAt(0)};`
}

export default function Sidebar({
  symbol,
  name,
  category,
}: {
  symbol: Symbol | null | string
  name: string
  category: string
}) {
  const glyph = useMemo(
    () => (typeof symbol === "string" ? { symbol: symbol } : symbol),
    [symbol]
  )

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
          toast(`${glyph.symbol} copied!`)
        } else if (event.key === "c" && event.metaKey && event.shiftKey) {
          event.preventDefault()
          navigator.clipboard.writeText(toUnicode(glyph.symbol))
          toast(`${toUnicode(glyph.symbol)} copied!`)
        }
      }
    }

    document.addEventListener("keydown", handleCopy)
    return () => {
      document.removeEventListener("keydown", handleCopy)
    }
  }, [glyph])

  return (
    <>
      {/* <section className="sidebar"> */}
      <header>
        <div className="tabber">
          <button className="active">Unicode</button>
          <button>SVG</button>
          <button>Pattern</button>
        </div>
        <figure>
          {glyph && glyph.symbol}
          <div className="code">
            <input
              type="text"
              value={glyph ? toUnicode(glyph.symbol) : " "}
              readOnly
            />
            <button>❏</button>
          </div>
        </figure>
        <div className="content">
          <details>
            <summary>
              <p>{name}</p>
              <span>+</span>
            </summary>
            <div className="info">
              <p>
                <strong>Unicode:</strong>
                {glyph ? toUnicode(glyph.symbol) : " "}
              </p>
              <p>
                <strong>HTML Entity:</strong>{" "}
                {glyph ? generateHtmlEntity(glyph.symbol) : ""}
              </p>
              <p>
                <strong>Category:</strong> {category}
              </p>
              <p>
                <strong>CSS Marker:</strong>
                <br />
                <code>
                  {`::marker{ content: "${glyph ? toUnicode(glyph.symbol) : " "}"}`}
                </code>
              </p>
              <p>favicon</p>
            </div>
          </details>
          <div className="export">
            <button className="export-copy">:: Copy</button>
            <div className="download">
              Downloads
              <button className="export-download">↓</button>
            </div>
          </div>
        </div>
      </header>
      font size
      <input type="range" />
      <footer>
        <Affiliates />
        <Ads />
      </footer>
    </>
  )
}
