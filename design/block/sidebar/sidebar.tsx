import "./sidebar.css"

interface Symbol {
  name?: string
  symbol?: string
  unicode?: string
  html_entity?: string
}

export default function Sidebar({ symbol }: { symbol: Symbol | null }) {
  return (
    <section className="sidebar">
      <div className="tabber">
        <button className="active">Unicode</button>
        <button>SVG</button>
        <button>Pattern</button>
      </div>
      <figure>{symbol && symbol.symbol}</figure>
      {/* <figure> {symbol.symbol}</figure> */}
      {/* <figure> {symbol.symbol}</figure> */}
      <header>
        <h2>Name of the glyp</h2>
        <span>Category name</span>
      </header>
    </section>
  )
}
