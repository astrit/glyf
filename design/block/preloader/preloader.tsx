"use client"

import { useContext, useEffect, useRef } from "react"
import { Controller } from "$/provider/provider"

import "@/preloader/preloader.css"

export default function Preloader() {
  const { loading } = useContext(Controller)
  const preloaderRef = useRef(null)

  useEffect(() => {
    if (!loading && preloaderRef.current) {
      ;(preloaderRef.current as unknown as HTMLDivElement).style.opacity = "0"
    }
  }, [loading])

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="load"></div>
    </div>
  )
}
