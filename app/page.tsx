"use client"

import React, { useContext } from "react"
import { Controller } from "$/provider/provider"

export default function HomePage() {
  const { data } = useContext(Controller)

  if (!data || !data.pages) {
    return null
  }

  const { title, description } = data.pages[0]

  return <div>Some</div>
}
