"use client"

import React, { useContext, useEffect, useMemo } from "react"
import Link from "@/link/link"
import { toURL } from "$/func/func"
import { Controller } from "$/provider/provider"

import "./grid.css"

interface Symbol {
  name: string
  symbol: string
  unicode?: string
  html_entity?: string
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
    // Filter categories based on selectedCategory
    return selectedCategory
      ? data.categories.category.filter(
          (cat: { slug: string }) => cat.slug === selectedCategory
        )
      : data.categories.category
  }, [data, selectedCategory])

  const symbols = useMemo(
    () =>
      memoizedCategories.map(
        (category: { symbols: any[] }, categoryIndex: any) =>
          category.symbols.map(
            (symbol: { name: any; symbol: any }, symbolIndex: any) => (
              <Link
                href={`/${toURL(symbol.name)}`}
                key={`${categoryIndex}-${symbolIndex}-${symbol.symbol}`} // Updated key for better uniqueness
                className="symbol"
                data-symbol={symbol.symbol}
              />
            )
          )
      ),
    [memoizedCategories]
  )

  return <div className="grid">{symbols}</div>
}
