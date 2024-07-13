import Progress from "@/progress/progress"

import "./search.css"

export default function Search() {
  return (
    <section className="search">
      <input
        placeholder="e.g arrow →"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        pattern="[A-Za-z0-9\-]+"
      />
      <label>
        <svg viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </label>
      <select name="" id="">
        <option value="">All categories</option>
      </select>
      <button type="reset">✗</button>
      <div>/</div>
      <Progress />
    </section>
  )
}
