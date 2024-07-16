"use client"

import React, { createContext, useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Cursor from "@/cursor/cursor"
import Noise from "@/noise/noise"
import Pattern from "@/pattern/pattern"
import Preloader from "@/preloader/preloader"
import json from "~/data.json"
import dev from "$/env/env"
import { toURL } from "$/func/func"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { Toaster } from "sonner"

interface Data {
  categories: any
  // pages: { [x: string]: any }[]
}

type Types = {
  loading: boolean
  data: Data | null
}

export const Controller = createContext<Types>({
  loading: false,
  data: null,
})

export function Provider({ children, ...props }: ThemeProviderProps) {
  const [loading, setLoading] = useState(true)
  // const [data, setData] = useState<Data | null>(null)
  const [data, setData] = useState<Data | null>(json)
  const pathname = usePathname()

  // useEffect(() => {
  //   setLoading(true)
  //   fetch("/api/data")
  //     .then((response) => response.json())
  //     .then((fetchedData) => {
  //       setData(fetchedData as Data)
  //       setLoading(false)
  //     })
  // }, [pathname])

  const value = {
    loading,
    data,
  }

  return (
    <NextThemesProvider {...props}>
      <Controller.Provider value={value}>
        {/* <Preloader /> */}
        {children}
        <Toaster
          richColors
          theme="dark"
          position="bottom-right"
          expand={false}
          closeButton={true}
          duration={4428}
        />
        {/* {!dev() && <Noise />} */}
        {/* <Cursor /> */}
        <Pattern />
      </Controller.Provider>
    </NextThemesProvider>
  )
}
