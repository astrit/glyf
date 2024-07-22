"use client"

import React, { useContext } from "react"
import Reklama from "@/ads/one"
import { Controller } from "$/provider/provider"

import "./search.css"

interface Symbol {
  name: string
  symbol: string
  unicode?: string
  html_entity?: string
}

interface Category {
  slug: string
  title: string
  description: string
  symbols: Symbol[]
}

interface DataContext {
  categories: {
    category: Category[]
  }
}

export default function Search() {
  const { data, setSelectedCategory } = useContext(Controller) as unknown as {
    data: { categories: { category: Category[] } }
    setSelectedCategory: (category: string | null) => void
  }

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value)
  }

  return (
    <section className="search">
      <input
        placeholder="e.g arrow →"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        pattern="[A-Za-z0-9\-]+"
        maxLength={32}
      />
      <div className="left">
        <label>
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </label>
        <select onChange={handleCategoryChange}>
          {/* <option value="">All categories</option> */}
          {data.categories.category.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <div className="right">
        <Reklama />
        <div className="cts">
          <button type="reset">✗</button>
          <div className="slash">/</div>
        </div>
      </div>
      {/* <Progress /> */}
    </section>
  )
}
