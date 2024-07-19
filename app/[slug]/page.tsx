"use client"

import { Suspense, useContext, useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import Sidebar from "@/sidebar/sidebar"
import { toURL } from "$/func/func"
import { Controller } from "$/provider/provider"

interface Symbol {
  name?: string
  symbol?: string
}

interface Category {
  title: string | undefined
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
  categoryTitle?: string // New field for category title
}

const findMatchingSymbol = (
  categories: Category[],
  slug: string
): { symbol: Symbol | undefined; categoryTitle: string | undefined } => {
  for (const category of categories) {
    const symbol = category.symbols.find(
      (s) => toURL(s.name) === slug.toLowerCase()
    )
    if (symbol) {
      return { symbol, categoryTitle: category.title } // Return both symbol and category title
    }
  }
  return { symbol: undefined, categoryTitle: undefined } // Return undefined if not found
}

const flattenSymbols = (categories: Category[]): Symbol[] => {
  return categories.flatMap((category) => category.symbols)
}

export default function Slug({ params }: { params: { slug: string } }) {
  const { slug } = params
  const goTo = useRouter()
  const controller = useContext<ControllerInt | undefined>(
    Controller as unknown as React.Context<ControllerInt | undefined>
  )

  const [symbolState, setSymbolState] = useState<SymbolState | null>(null)

  useEffect(() => {
    if (controller) {
      const { symbol, categoryTitle } = findMatchingSymbol(
        controller?.data?.categories?.category,
        slug
      )
      if (symbol) {
        setSymbolState({
          symbol: symbol.symbol,
          name: symbol.name,
          categoryTitle,
        })
      }
    }
  }, [slug, controller])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (controller) {
        const flattenedSymbols = flattenSymbols(
          controller.data.categories.category
        )
        const currentIndex = flattenedSymbols.findIndex(
          (s) => toURL(s.name) === slug
        )
        // (event.key === "ArrowUp" || event.key === "ArrowDown") &&
        // event.shiftKey
        if (event.key === "ArrowRight" && event.shiftKey) {
          const nextIndex = (currentIndex + 1) % flattenedSymbols.length
          const nextSymbol = flattenedSymbols[nextIndex]
          goTo.push(`/${toURL(nextSymbol.name)}`) // Navigate to the next symbol's page
        } else if (event.key === "ArrowLeft" && event.shiftKey) {
          const prevIndex =
            (currentIndex - 1 + flattenedSymbols.length) %
            flattenedSymbols.length
          const prevSymbol = flattenedSymbols[prevIndex]
          goTo.push(`/${toURL(prevSymbol.name)}`) // Navigate to the previous symbol's page
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [controller, slug, goTo])

  const { symbol, name, categoryTitle } = symbolState ?? {}

  return (
    <Sidebar
      symbol={symbol ?? null}
      name={name ?? " "}
      category={categoryTitle ? categoryTitle : ""}
    />
  )
}
