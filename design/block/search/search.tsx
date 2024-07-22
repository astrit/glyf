"use client"

import React, { useContext, useEffect, useRef } from "react"
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
  const { data, setSelectedCategory, setSearchQuery } = useContext(
    Controller
  ) as unknown as {
    data: { categories: { category: Category[] } }
    setSelectedCategory: (category: string | null) => void
    setSearchQuery: (query: string) => void
  }
  // const { setSearchQuery } = useController()

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "/" || (event.key === "k" && event.metaKey)) {
        event.preventDefault() // Prevent the default action to avoid typing '/' in the input
        inputRef.current?.focus()
      } else if (event.key === "Escape") {
        event.preventDefault() // Prevent the default action for consistency
        if (inputRef.current) {
          inputRef.current.value = "" // Clear the input field
          setSearchQuery("") // Clear the search query state
          inputRef.current.blur() // Remove focus from the input field
        }
      }
    }

    document.addEventListener("keydown", handleKeyPress)

    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [setSearchQuery]) // Include setSearchQuery in the dependency array if it's not stable

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <section className="search">
      <input
        ref={inputRef}
        placeholder="e.g arrow →"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        pattern="[A-Za-z0-9\-]+"
        maxLength={32}
        onChange={handleSearchChange}
      />
      <div className="left">
        <label>
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </label>
        <select onChange={handleCategoryChange}>
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
    </section>
  )
}
