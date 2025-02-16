"use client"

import { useContext, useEffect, useMemo, useState } from "react"
import Ads from "@/ads/ads"
import Affiliates from "@/affiliates/affiliates"
import { toUnicode } from "$/func/func"
import { Controller } from "$/provider/provider"
import { toast } from "sonner"

import "./sidebar.css"

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

  const { UI, setUI } = useContext(Controller) as unknown as {
    UI: boolean
    setUI: (value: boolean) => void
  }

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

  const copyToClipboard = () => {
    const inputElement = document.querySelector(
      ".code input"
    ) as HTMLInputElement
    if (inputElement) {
      const textToCopy = inputElement.value
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          toast(`${textToCopy} copied!`)
        })
        .catch((err) => {
          console.error("Error copying text: ", err)
        })
    }
  }

  const copySymbolToClipboard = () => {
    if (glyph && glyph.symbol) {
      navigator.clipboard
        .writeText(glyph.symbol)
        .then(() => {
          toast(`${glyph.symbol} copied!`)
        })
        .catch((err) => {
          console.error("Error copying symbol: ", err)
        })
    }
  }

  useEffect(() => {
    const toggleUI = (event: KeyboardEvent) => {
      if (event.key === "\\" && event.metaKey) {
        setUI(!UI)
      }
    }

    window.addEventListener("keydown", toggleUI)

    return () => {
      window.removeEventListener("keydown", toggleUI)
    }
  }, [UI, setUI])
  if (UI) return null

  return (
    <>
      {/* <aside className="sidebar"> */}
      <div className="preview">
        <div className="tabber">
          <button className="active">Glyph</button>
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
            <button onClick={copyToClipboard}>COPY</button>
          </div>
        </figure>
        <div className="content">
          <details>
            <summary>
              <p title={category}>{name}</p>
              {/* <span>+</span> */}
            </summary>
            <div className="info">
              <fieldset>
                <legend>Unicode</legend>
                <input
                  type="text"
                  value={glyph ? toUnicode(glyph.symbol) : " "}
                  readOnly
                />
              </fieldset>
              <fieldset>
                <legend>HTML Entity</legend>
                <input
                  type="text"
                  value={glyph ? generateHtmlEntity(glyph.symbol) : ""}
                  readOnly
                />
              </fieldset>
              <fieldset>
                <legend>Marker</legend>
                <input
                  type="text"
                  value={`::marker{ content: "${glyph ? toUnicode(glyph.symbol) : " "}"}`}
                  readOnly
                />
              </fieldset>
            </div>
          </details>
          <div className="export">
            <button className="export-copy" onClick={copySymbolToClipboard}>
              <span>❏</span> Copy
            </button>
            <div className="download">
              Download
              <button className="export-download">↓</button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Affiliates />
        <Ads />
      </footer>
      {/* </aside> */}
    </>
  )
}
