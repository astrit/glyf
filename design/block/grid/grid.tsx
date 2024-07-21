"use client"

import React, { useContext, useEffect, useMemo, useState } from "react"
import { Links } from "@/affiliates/affiliates"
import Link from "@/link/link"
import { toUnicode, toURL } from "$/func/func"
import { Controller } from "$/provider/provider"
import { toast } from "sonner"

import "./grid.css"

import Icon from "@/icon/icon"

interface Symbol {
  name: string
  symbol: string
  unicode?: string
  html_entity?: string
}

interface Event {
  altKey: boolean
  preventDefault: () => void
  shiftKey: boolean
}

interface Category {
  slug: string
  title: string
  description: string
  symbols: Symbol[]
}

interface Data {
  categories: {
    category: Category[]
  }
}

export default function Grid() {
  const { loading, data, selectedCategory, setSelectedCategory } =
    useContext(Controller)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        (event.key === "ArrowUp" || event.key === "ArrowDown") &&
        event.shiftKey
      ) {
        event.preventDefault()
        const categories = data?.categories.category
        const currentIndex = categories.findIndex(
          (cat: { slug: string | null }) => cat.slug === selectedCategory
        )
        let newIndex
        if (event.key === "ArrowUp") {
          newIndex =
            currentIndex - 1 < 0 ? categories.length - 1 : currentIndex - 1
        } else {
          newIndex = (currentIndex + 1) % categories.length
        }
        setSelectedCategory(categories[newIndex].slug)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [data, selectedCategory, setSelectedCategory])

  const memoizedCategories = useMemo(() => {
    if (!data) {
      return []
    }
    return selectedCategory
      ? data.categories.category.filter(
          (cat: { slug: string }) => cat.slug === selectedCategory
        )
      : data.categories.category
  }, [data, selectedCategory])

  function copyToClipboardSymbol(symbol: string) {
    navigator.clipboard.writeText(symbol).then(
      () => {
        toast(`${symbol} — Symbol copied!`)
      },
      (err) => {
        console.error("Could not copy symbol: ", err)
      }
    )
  }

  function copyToClipboardUnicode(symbol: string) {
    const unicodeStr = symbol ? toUnicode(symbol) : " "
    navigator.clipboard.writeText(unicodeStr).then(
      () => {
        toast(`${unicodeStr} — Unicode copied!`)
      },
      (err) => {
        console.error("Could not copy unicode: ", err)
      }
    )
  }

  function handleClick(e: Event, symbol: Symbol) {
    if (e.altKey) {
      e.preventDefault()
      copyToClipboardUnicode(symbol.symbol)
    } else if (e.shiftKey) {
      e.preventDefault()
      copyToClipboardSymbol(symbol.symbol)
    }
  }

  const symbols = useMemo(
    () =>
      memoizedCategories.map(
        (category: { symbols: any[] }, categoryIndex: any) => {
          // Generate random positions within the current category's symbols array
          let randomPositions = [
            Math.floor(Math.random() * (category.symbols.length + 1)),
          ]
          if (category.symbols.length > 40) {
            // Ensure a second unique position for categories with more than 40 symbols
            let secondRandomPosition
            do {
              secondRandomPosition = Math.floor(
                Math.random() * (category.symbols.length + 1)
              )
            } while (randomPositions.includes(secondRandomPosition))
            randomPositions.push(secondRandomPosition)
          }

          // Map symbols to Link components
          const symbolLinks = category.symbols.map(
            (symbol: Symbol, symbolIndex: any) => (
              <Link
                href={`/${toURL(symbol.name)}`}
                key={`${categoryIndex}-${symbolIndex}-${symbol.symbol}`} // Ensuring key uniqueness
                className="symbol"
                data-symbol={symbol.symbol}
                onClick={(e: Event) => handleClick(e, symbol)}
                onMouseEnter={(e: {
                  currentTarget: {
                    setAttribute: (arg0: string, arg1: any) => any
                  }
                }) => e.currentTarget.setAttribute("title", symbol.name)}
                onMouseLeave={(e: {
                  currentTarget: { removeAttribute: (arg0: string) => any }
                }) => e.currentTarget.removeAttribute("title")}
              />
            )
          )
          randomPositions.forEach((position) => {
            let randomLinkIndex
            const selectedIndices = new Set() // Initialize a set to track selected link indices

            do {
              randomLinkIndex = Math.floor(Math.random() * Links.length)
            } while (selectedIndices.has(randomLinkIndex)) // Ensure the link hasn't been selected already

            selectedIndices.add(randomLinkIndex) // Add the selected index to the set
            const selectedLink = Links[randomLinkIndex]

            const affiliateLink = (
              <Link
                href={selectedLink.href}
                key={`affiliate-${categoryIndex}-${position}`}
                className={`symbol affiliate ` + selectedLink.brand}
                target="_blank"
              >
                <Icon name={selectedLink.brand} />
                <footer>
                  <span>{selectedLink.brand}</span>
                  <div>{selectedLink.description}</div>
                </footer>
              </Link>
            )

            symbolLinks.splice(position, 0, affiliateLink)
          })

          return symbolLinks
        }
      ),
    [memoizedCategories]
  )

  const [fontSize, setFontSize] = useState(24)

  const handleRangeChange = (event: { target: { value: string } }) => {
    const newSize = 24 + (parseInt(event.target.value) - 2) * 10
    setFontSize(Math.max(newSize, 10))
  }

  return (
    <div className="grid">
      <div className="trail">
        <div className="left">
          <div className="navigation">
            {/* <button>← ‹</button> */}
            <button>‹</button>
            <button>◦</button>
            {/* <button>·</button> */}
            <button>›</button>
          </div>
        </div>
        <div className="right">
          <input
            type="range"
            min="0"
            max="4"
            step="1"
            onChange={handleRangeChange}
          />
        </div>
      </div>
      <div className="symbols" style={{ fontSize: `${fontSize}px` }}>
        {symbols}
      </div>
    </div>
  )
}
