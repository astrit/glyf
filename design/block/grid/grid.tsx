"use client"

import React, { useContext, useEffect, useMemo } from "react"
import Link from "@/link/link"
import { toUnicode, toURL } from "$/func/func"
import { Controller } from "$/provider/provider"
import { toast } from "sonner"

import "./grid.css"

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

  // Copy
  // Copy
  // Copy
  // Copy

  // Enhanced clipboard copy functions with specific parameter types
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
    const unicodeStr = symbol ? toUnicode(symbol) : ""
    navigator.clipboard.writeText(unicodeStr).then(
      () => {
        toast(`${unicodeStr} — Unicode copied!`)
      },
      (err) => {
        console.error("Could not copy unicode: ", err)
      }
    )
  }

  // Updated handleClick function to handle events more accurately
  function handleClick(e: Event, symbol: Symbol) {
    if (e.altKey) {
      e.preventDefault()
      copyToClipboardUnicode(symbol.symbol)
    } else if (e.shiftKey) {
      e.preventDefault()
      copyToClipboardSymbol(symbol.symbol)
    }
  }

  // Streamlined symbols rendering logic
  const symbols = useMemo(
    () =>
      memoizedCategories.map(
        (category: { symbols: any[] }, categoryIndex: any) =>
          category.symbols.map((symbol: Symbol, symbolIndex: any) => (
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
          ))
      ),
    [memoizedCategories]
  )

  return <div className="grid">{symbols}</div>
}
