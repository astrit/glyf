"use client"

import React, { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "@/link/link"
import Progress from "@/progress/progress"

import "./trail.css"

const dynamicStyles = new CSSStyleSheet()
dynamicStyles.replaceSync(":root { --dynamic-font-size: 24px; }")

function Prev() {
  const navigation = useRouter()
  const pathName = usePathname()

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
  return <Progress />
}

function Next() {
  const pathName = usePathname()

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

  // const handleRangeChange = (event: { target: { value: string } }) => {
  //   const newSize = 24 + (parseInt(event.target.value) - 2) * 10
  //   setFontSize(Math.max(newSize, 10))
  // }
  const handleRangeChange = (event: { target: { value: string } }) => {
    const newSize = 24 + (parseInt(event.target.value) - 2) * 10
    setFontSize(Math.max(newSize, 10))
    // Step 2: Update the stylesheet with the new font size
    dynamicStyles.replaceSync(
      `:root { --dynamic-font-size: ${Math.max(newSize, 10)}px; }`
    )
  }

  // Step 3: Attach the stylesheet to the component
  useEffect(() => {
    document.adoptedStyleSheets = [
      ...document.adoptedStyleSheets,
      dynamicStyles,
    ]
  }, [])

  return (
    <div className="trail">
      <div className="navigation">
        <Prev />
        <Home />
        <Next />
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
