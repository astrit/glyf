import "./shortcuts.css"

export default function Shortcuts() {
  return (
    <section className="shortcuts">
      <ul>
        <li>
          Change glyph
          <span>
            <kbd>⇧</kbd> <kbd>←</kbd>
            <kbd>→</kbd>
          </span>
        </li>
        <li>
          Change category
          <span>
            <kbd>⇧</kbd> <kbd>↑</kbd>
            <kbd>↓</kbd>
          </span>
        </li>
        <li>
          Copy glyph
          <span>
            <kbd>⇧</kbd> <kbd>☉</kbd>
          </span>
        </li>
        <li>
          Copy unicode
          <span>
            <kbd>⌥</kbd> <kbd>☉</kbd>
          </span>
        </li>
        <li>
          Copy current glyph
          <span>
            <kbd>⌘</kbd>
            <kbd>C</kbd>
          </span>
        </li>
        <li>
          Copy current unicode
          <span>
            <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>C</kbd>
          </span>
        </li>
        <li>
          Focus search
          <span>
            <kbd>/</kbd>
          </span>
        </li>
        <li>
          Search
          <span>
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </span>
        </li>
        <li>
          Clear search
          <span>
            <kbd>⎋</kbd>
          </span>
        </li>
        <li>
          Hide UI
          <span>
            <kbd>⌘</kbd>
            <kbd>\</kbd>
          </span>
        </li>
      </ul>
    </section>
  )
}
