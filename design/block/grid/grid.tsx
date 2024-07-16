"use client"

import React, { useContext, useMemo } from "react"
import Link from "@/link/link"
import { toURL } from "$/func/func"
import { Controller } from "$/provider/provider"

import "./grid.css"

// Define interfaces for your data structure
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
  const { loading, data } = useContext(Controller)

  const memoizedCategories = useMemo(() => {
    if (!data) {
      return []
    }

    // Directly use categories without flattening or sorting symbols
    return data.categories.category
  }, [data])

  // if (loading || !data) {
  //   return (
  //     <div className="grid">
  //       <div>Loading...</div>
  //     </div>
  //   )
  // }

  return (
    <div className="grid">
      {memoizedCategories
        .slice(0, 1)
        .map((category: Category, categoryIndex: number) =>
          category.symbols.map((symbol: Symbol, symbolIndex: number) => (
            <Link
              href={`/${toURL(symbol.name)}`}
              key={`${categoryIndex}-${symbolIndex}` + symbol.symbol}
              className="symbol"
            >
              {symbol.symbol}
            </Link>
          ))
        )}
      {/* <span>{symbol.symbol}</span> */}
    </div>
  )
}
