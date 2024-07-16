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
  const { data } = useContext(Controller) as { data: DataContext } // Type assertion for your data

  console.log(data)
  return (
    <aside className="categories">
      <h2>Categories</h2>
      <nav>
        {data?.categories.category.map((category) => (
          <Link
            key={category.slug + category.symbols.length + category.title}
            data-count={category.symbols.length}
            href={`#${category.slug}`}
          >
            {category.title}
          </Link>
        ))}
      </nav>
      <br />
      <br />
      <br />
      <h2>Navigation</h2>
      CMD + C to copy <br />
      Shift + Click to copy symbol
      <br />
      Option + Click to copy unicode
    </aside>
  )
}
