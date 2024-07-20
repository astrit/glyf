"use client"

import React from "react"
import Progress from "@/progress/progress"
import { Toggle } from "@/toggle/toggle"

import "@/footer/footer.css"

import Link from "@/link/link"

function Split() {
  return <span className="split">·</span>
}

function Left({ children }: { children?: React.ReactNode }) {
  return <div className="sides left">{children}</div>
}

function Right({ children }: { children?: React.ReactNode }) {
  // const elements = [""]
  const elements = [<Progress />]
  return (
    <div className="sides right">
      {elements.map((element, index) => (
        <React.Fragment key={index}>
          {element}
          {index < elements.length - 1 && <Split />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="main-footer">
      <Left>
        <Toggle />
        <Link href="https://slant.so" target="_blank" className="slant">
          S L Λ \ T
        </Link>
      </Left>
      <Right />
    </footer>
  )
}
