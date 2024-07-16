"use client"

import React, { useContext } from "react"
import Link from "@/link/link"
import { Controller } from "$/provider/provider"

import "./categories.css"

// Updated interface to match your data structure
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

// Assuming the structure of your data context
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

  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(slug)
  }
  return (
    <aside className="categories">
      <h2>Categories</h2>
      <nav>
        {data?.categories.category.map((category) => (
          <button
            key={category.slug + category.symbols.length + category.title}
            data-count={category.symbols.length}
            onClick={() => handleCategoryClick(category.slug)}
            className={selectedCategory === category.slug ? "active" : ""}
          >
            {category.title}
          </button>
        ))}
      </nav>
    </aside>
  )
}
