"use client"

import React, { useContext, useEffect, useState } from "react"
import Link from "@/link/link"
import { Controller } from "$/provider/provider"
import Fuse from "fuse.js"

import "./categories.css"

import Shortcuts from "@/shortcuts/shortcuts"
import Trail from "@/trail/trail"

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

export default function Categories() {
  const { data, selectedCategory, setSelectedCategory } = useContext(
    Controller
  ) as unknown as {
    data: DataContext
    selectedCategory: string | null
    setSelectedCategory: (category: string | null) => void
  }

  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([])

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCategories(data?.categories.category || [])
    } else {
      const filtered =
        data?.categories.category
          .filter((category) =>
            category.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .sort((a, b) => a.title.localeCompare(b.title)) || []
      setFilteredCategories(filtered)
    }
  }, [searchTerm, data])

  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(slug)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const currentIndex = filteredCategories.findIndex(
      (category) => category.slug === selectedCategory
    )
    if (event.key === "ArrowDown") {
      const nextIndex =
        currentIndex < filteredCategories.length - 1 ? currentIndex + 1 : 0
      setSelectedCategory(filteredCategories[nextIndex].slug)
    } else if (event.key === "ArrowUp") {
      const prevIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredCategories.length - 1
      setSelectedCategory(filteredCategories[prevIndex].slug)
    }
    if (event.key === "Escape") {
      ;(event.currentTarget as HTMLInputElement).blur() // Remove focus from input
      setSearchTerm("") // Clear the input value
    }
  }

  return (
    <aside className="categories">
      <Trail />
      <section className="list">
        <input
          type="text"
          placeholder="○ Search categories"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <nav>
          {filteredCategories.map((category) => (
            <button
              key={category.slug + category.symbols.length + category.title}
              data-count={category.symbols.length}
              onClick={() => handleCategoryClick(category.slug)}
              className={selectedCategory === category.slug ? "active" : ""}
            >
              <div>
                <span>
                  {category.symbols.length > 0
                    ? `${category.symbols[0].symbol}`
                    : ""}
                </span>
                {category.title}
              </div>
            </button>
          ))}
        </nav>
      </section>
      <Shortcuts />
    </aside>
  )
}
