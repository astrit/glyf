"use client"

import { useContext, useEffect, useState } from "react"
import Sidebar from "@/sidebar/sidebar"
import { toURL } from "$/func/func"
import { Controller } from "$/provider/provider"

interface Symbol {
  name: string
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

export default function Slug({ params }: { params: { slug: string } }) {
  const { slug } = params

  const controller = useContext<ControllerInt | undefined>(
    Controller as unknown as React.Context<ControllerInt | undefined>
  )

  const [symbol, setSymbol] = useState<string | null>(null)

  useEffect(() => {
    if (controller && controller.data) {
      const flattenedSymbols: Symbol[] =
        controller.data.categories.category.flatMap(
          (category) => category.symbols
        )
      const matchingSymbol = flattenedSymbols.find(
        (s) => toURL(s.name) === slug.toLowerCase()
      )
      if (matchingSymbol && matchingSymbol.symbol) {
        setSymbol(matchingSymbol.symbol)
      }
    }
  }, [slug, controller])

  return (
    <section>
      <Sidebar symbol={symbol} />
    </section>
  )
}
