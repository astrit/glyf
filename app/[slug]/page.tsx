"use client"

import { Suspense, useContext, useEffect, useState } from "react"
import Sidebar from "@/sidebar/sidebar"
import { toURL } from "$/func/func"
import { Controller } from "$/provider/provider"

interface Symbol {
  name?: string
  symbol?: string
}

interface Category {
  slug: string
  symbols: Symbol[]
}

interface ControllerInt {
  data: {
    categories: {
      category: Category[]
    }
  }
}

interface SymbolState {
  name?: string
  symbol?: string
}

const findMatchingSymbol = (
  categories: Category[],
  slug: string
): Symbol | undefined => {
  const flattenedSymbols = categories?.flatMap((category) => category.symbols)
  return flattenedSymbols?.find((s) => toURL(s.name) === slug.toLowerCase())
}

export default function Slug({ params }: { params: { slug: string } }) {
  const { slug } = params

  const controller = useContext<ControllerInt | undefined>(
    Controller as unknown as React.Context<ControllerInt | undefined>
  )

  const [symbolState, setSymbolState] = useState<SymbolState | null>(null)

  useEffect(() => {
    if (controller) {
      const matchingSymbol = findMatchingSymbol(
        controller?.data?.categories?.category,
        slug
      )
      if (matchingSymbol) {
        setSymbolState({
          symbol: matchingSymbol.symbol,
          name: matchingSymbol.name,
        })
      }
    }
  }, [slug, controller])

  const { symbol, name } = symbolState ?? {}

  return <Sidebar symbol={symbol ?? null} name={name ?? " "} />
}
