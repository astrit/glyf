import Link from "@/link/link"

import "./categories.css"

export default function Categories() {
  return (
    <aside className="categories">
      <details open>
        <summary>Categories</summary>
        <nav>
          <Link href="/glyph">Glyph</Link>
          <Link href="/glyph">Glyph</Link>
          <Link href="/glyph">Glyph</Link>
          <Link href="/glyph">Glyph</Link>
          <Link href="/glyph">Glyph</Link>
        </nav>
      </details>
    </aside>
  )
}
