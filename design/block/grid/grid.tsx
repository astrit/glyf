"use client"

import React, { useContext, useEffect, useMemo } from "react"
import Image from "next/image"
import { useAds } from "@/ads/one"
import { Links } from "@/affiliates/affiliates"
import Icon from "@/icon/icon"
import Link from "@/link/link"
import { toUnicode, toURL } from "$/func/func"
import { Controller } from "$/provider/provider"
import Fuse from "fuse.js"
import { toast } from "sonner"

import "./grid.css"

interface Symbol {
  name: string
  symbol: string
  unicode?: string
  html_entity?: string
}

interface Event {
  altKey: boolean
  preventDefault: () => void
  shiftKey: boolean
}

interface Category {
  slug: string
  title: string
  description: string
  symbols: Symbol[]
}

interface Data {
  categories: {
    category: Category[]
  }
}

interface Ad {
  statlink?: string
  image?: string
  company?: string
  description?: string
  callToAction?: string
  companyTagline?: string
}

interface AdData {
  ads: Ad[]
}

function copyToClipboardSymbol(symbol: string) {
  navigator.clipboard.writeText(symbol).then(
    () => {
      toast(`${symbol} — Symbol copied!`)
    },
    (err) => {
      console.error("Could not copy symbol: ", err)
    }
  )
}

function copyToClipboardUnicode(symbol: string) {
  const unicodeStr = symbol ? toUnicode(symbol) : " "
  navigator.clipboard.writeText(unicodeStr).then(
    () => {
      toast(`${unicodeStr} — Unicode copied!`)
    },
    (err) => {
      console.error("Could not copy unicode: ", err)
    }
  )
}

function handleClick(e: Event, symbol: Symbol) {
  if (e.altKey) {
    e.preventDefault()
    copyToClipboardUnicode(symbol.symbol)
  } else if (e.shiftKey) {
    e.preventDefault()
    copyToClipboardSymbol(symbol.symbol)
  }
}

export default function Grid() {
  const { data, selectedCategory, setSelectedCategory, searchQuery } =
    useContext(Controller)

  const adData = useAds()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        (event.key === "ArrowUp" || event.key === "ArrowDown") &&
        event.shiftKey
      ) {
        event.preventDefault()
        const categories = data?.categories.category
        const currentIndex = categories.findIndex(
          (cat: Category) => cat.slug === selectedCategory
        )
        let newIndex
        if (event.key === "ArrowUp") {
          newIndex =
            currentIndex - 1 < 0 ? categories.length - 1 : currentIndex - 1
        } else {
          newIndex = (currentIndex + 1) % categories.length
        }
        setSelectedCategory(categories[newIndex].slug)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [data, selectedCategory, setSelectedCategory])

  const memoizedCategories = useMemo(() => {
    if (!data) {
      return []
    }
    return selectedCategory
      ? data.categories.category.filter(
          (cat: Category) => cat.slug === selectedCategory
        )
      : data.categories.category
  }, [data, selectedCategory])

  const allSymbols = useMemo(() => {
    return memoizedCategories.flatMap((category: Category) => category.symbols)
  }, [memoizedCategories])

  const fuse = useMemo(() => {
    return new Fuse(allSymbols, {
      keys: ["name", "symbol"],
      threshold: 0.3,
    })
  }, [allSymbols])

  const filteredSymbols = useMemo(() => {
    if (searchQuery.length === 0) {
      return allSymbols
    }
    return fuse.search(searchQuery).map((result) => result.item)
  }, [searchQuery, fuse, allSymbols])

  const symbolLinks = useMemo(() => {
    return filteredSymbols.map((symbol: Symbol, index: number) => (
      <Link
        href={`/${toURL(symbol.name)}`}
        key={`${index}-${symbol.symbol}`}
        className="symbol"
        data-symbol={symbol.symbol}
        onClick={(e: Event) => handleClick(e, symbol)}
        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
          e.currentTarget.setAttribute("title", symbol.name)
        }
        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
          e.currentTarget.removeAttribute("title")
        }
      />
    ))
  }, [filteredSymbols])

  const affiliateLinks = useMemo(() => {
    if (searchQuery.length > 0) return []
    const numberOfAffiliates = filteredSymbols.length > 40 ? 2 : 1
    const affiliatePositions = Array.from({ length: numberOfAffiliates }, () =>
      Math.floor(Math.random() * (filteredSymbols.length + 1))
    )

    const usedLinkIndexes = new Set<number>()

    return affiliatePositions.map((position, index) => {
      let selectedLinkIndex: number
      do {
        selectedLinkIndex = Math.floor(Math.random() * Links.length)
      } while (usedLinkIndexes.has(selectedLinkIndex))

      usedLinkIndexes.add(selectedLinkIndex)
      const selectedLink = Links[selectedLinkIndex]

      return (
        <Link
          href={selectedLink.href}
          key={`affiliate-${index}`}
          className={`symbol affiliate ${selectedLink.brand}`}
          rel="sponsored noopener noreferrer"
          target="_blank"
        >
          <Icon name={selectedLink.brand} />
          <footer>
            <span>{selectedLink.brand}</span>
            <div>{selectedLink.description}</div>
          </footer>
        </Link>
      )
    })
  }, [filteredSymbols])

  const adLinks = useMemo(() => {
    if (searchQuery.length > 0 && adData.ads.length == 0) return []
    // console.log("adData from adLinks", adData)
    return (
      adData.ads
        // .filter((ad) => ad.company && ad.company.trim() !== "")
        .map((ad, index) => (
          <>
            {ad.company && (
              <Link
                href={"#"}
                key={`ad-${index}`}
                rel="sponsored noopener noreferrer"
                className={`symbol affiliate`}
                target="_blank"
              >
                {ad.image && (
                  <Image
                    width="24"
                    height="24"
                    src={ad.image}
                    alt={ad.company || ""}
                  />
                )}
                <footer>
                  <span>{ad.company}</span>
                  <div>{ad.companyTagline}</div>
                </footer>
              </Link>
            )}
          </>
        ))
    )
  }, [adData, searchQuery])

  const combinedLinks = useMemo(() => {
    if (searchQuery.length > 0) {
      return symbolLinks // Only return symbol links when searching
    }
    const combined = [...symbolLinks]
    affiliateLinks.forEach((link, index) => {
      combined.splice(
        Math.floor(Math.random() * (combined.length + 1)),
        0,
        link
      )
    })
    adLinks.forEach((link, index) => {
      combined.splice(
        Math.floor(Math.random() * (combined.length + 1)),
        0,
        link
      )
    })
    return combined
  }, [symbolLinks, affiliateLinks, adLinks])

  return (
    <div className="grid">
      <header>
        <h2>
          {searchQuery.length > 0
            ? `${filteredSymbols.length} result${filteredSymbols.length !== 1 ? "s" : ""} for "${searchQuery}"`
            : selectedCategory}
        </h2>
        <div className="options">
          <button>◧</button>
          <span>·</span>
          <button>⊟</button>
          <button>⊞</button>
        </div>
      </header>
      <div className="glyf">{combinedLinks}</div>
    </div>
  )
}
