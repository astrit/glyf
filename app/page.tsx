"use client"

import React, { useContext } from "react"
import Calendar from "@/calendar/calendar"
import Hero from "@/hero/hero"
import Link from "@/link/link"
import Home from "&/home/home"
import { Controller } from "$/provider/provider"

export default function HomePage() {
  const { data } = useContext(Controller)

  if (!data || !data.pages) {
    return null
  }

  const { title, description } = data.pages[0]

  return <div>Some</div>
  // (
  //   <Home data-title={title} data-description={description}>
  //     <Hero />
  //   </Home>
  // )
}
