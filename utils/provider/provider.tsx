"use client"

import React, { createContext, useState } from "react"
import Pattern from "@/pattern/pattern"
import json from "~/data.json"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { Toaster } from "sonner"

interface Data {
  categories: any
}

type Types = {
  loading: boolean
  data: Data | null
  selectedCategory: string | null
  setSelectedCategory: (category: string | null) => void
}

export const Controller = createContext<Types>({
  loading: false,
  data: null,
  selectedCategory: null,
  setSelectedCategory: () => {},
})

export function Provider({ children, ...props }: ThemeProviderProps) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Data | null>(json)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "featured"
  )

  const value = {
    loading,
    data,
    selectedCategory,
    setSelectedCategory,
  }

  return (
    <NextThemesProvider {...props}>
      <Controller.Provider value={value}>
        {children}
        <Toaster
          richColors
          theme="dark"
          position="bottom-right"
          expand={false}
          closeButton={true}
          duration={4428}
        />
        <Pattern />
      </Controller.Provider>
    </NextThemesProvider>
  )
}