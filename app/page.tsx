"use client"

import React, { useContext } from "react"
import Calendar from "@/calendar/calendar"
import Home from "&/home/home"
import { Controller } from "$/provider/provider"

export default function HomePage() {
  const { data } = useContext(Controller)

  if (!data || !data.pages) {
    return null
  }

  const { title, description } = data.pages[0]

  return (
    <Home data-title={title} data-description={description}>
      Shkurt e shqip.
    </Home>
  )
}
