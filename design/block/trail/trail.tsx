"use client"

import React, { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "@/link/link"

import "./trail.css"

function Prev() {
  const navigation = useRouter()
  const pathName = usePathname()

  //   if (pathName === "/") {
  //     return null
  //   }

  const goBack = () => {
    navigation.back()
  }

  return (
    <button onClick={goBack} className={pathName === "/" ? "disabled" : ""}>
      ‹
    </button>
  )
}

function Home() {
  //   return <Link href="/">↺</Link>
  return <Link href="/">◦</Link>
}

function Next() {
  const pathName = usePathname()

  //   if (pathName === "/") {
  //     return null
  //   }

  const goNext = () => {
    if (typeof window !== "undefined") {
      window.history.forward()
    }
  }
  return (
    <button onClick={goNext} className={pathName === "/" ? "disabled" : ""}>
      ›
    </button>
  )
}

export default function Trail() {
  const [fontSize, setFontSize] = useState(24)

  const handleRangeChange = (event: { target: { value: string } }) => {
    const newSize = 24 + (parseInt(event.target.value) - 2) * 10
    setFontSize(Math.max(newSize, 10))
  }

  return (
    <div className="trail">
      <div className="left">
        <div className="navigation">
          <Prev />
          <Home />
          <Next />
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
  )
}
