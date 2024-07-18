function toURL(e) {
  return e.toLowerCase().replace(/ /g, "-")
}

// function toUnicode(e) {
//   return `U+${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`
// }

function toUnicode(e) {
  if (typeof e !== "string" || e.length === 0) {
    throw new Error("toUnicode function expects a non-empty string as argument")
  }
  return `U+${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`
}

function levenshteinDistance(s1, s2) {
  const m = s1.length
  const n = s2.length
  const d = []

  for (let i = 0; i <= m; i++) {
    d[i] = [i]
  }
  for (let j = 0; j <= n; j++) {
    d[0][j] = j
  }

  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= m; i++) {
      if (s1[i - 1] === s2[j - 1]) {
        d[i][j] = d[i - 1][j - 1]
      } else {
        d[i][j] = Math.min(d[i - 1][j], d[i][j - 1], d[i - 1][j - 1]) + 1
      }
    }
  }

  return d[m][n]
}

const handleSlashKey = (event) => {
  if (
    event.key === "/" ||
    ((event.keyCode === 191 || event.keyCode === 75) &&
      (event.metaKey || event.ctrlKey))
  ) {
    event.preventDefault()
    const input = document.getElementById("s")
    input.focus()
  } else if (event.key === "Escape") {
    const input = document.getElementById("s")
    searchTerm && setSearchTerm("")
    copiedSymbols && setCopiedSymbols("")
    selectedCategory && setSelectedCategory("")
    input.blur()
    setSelectedGlyph(null)
    setIsContentVisible(false)
  }
}

const handleArrowKey = (event) => {
  if (
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight" ||
    (isContentVisible &&
      (event.key === "spacebar" ||
        event.key === "Enter" ||
        event.key === "Tab"))
  ) {
    event.preventDefault()
    const currentIndex = searchResults.findIndex(
      (item) => item.symbol === selectedGlyph
    )
    const nextIndex =
      event.key === "ArrowLeft" ? currentIndex - 1 : currentIndex + 1
    const nextGlyph = searchResults[nextIndex]

    if (nextGlyph) {
      setSelectedGlyph(nextGlyph.symbol)
      setIsContentVisible(true)
    }
  } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault()
    const currentCategoryIndex =
      event.symbolsData.categories.category.findIndex(
        (category) => category.title === selectedCategory?.title
      )
    const nextCategoryIndex =
      event.key === "ArrowUp"
        ? currentCategoryIndex - 1
        : currentCategoryIndex + 1
    const nextCategory =
      event.symbolsData.categories.category[nextCategoryIndex]

    if (nextCategory) {
      setSelectedCategory(nextCategory)
      // setSelectedCategory(nextCategory);
      // setSelectedGlyph(null);
      // setIsContentVisible(false);
      setSelectedGlyph(nextCategory.symbols[0]?.symbol)
    }
  }
}

export { toURL, toUnicode, levenshteinDistance }
