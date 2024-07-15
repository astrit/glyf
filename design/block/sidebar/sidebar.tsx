import "./sidebar.css"

interface Symbol {
  name?: string
  symbol?: string
  unicode?: string
  html_entity?: string
}

export default function Sidebar({
  symbol,
  name,
}: {
  symbol: Symbol | null | string
  name: string
}) {
  if (typeof symbol === "string") {
    symbol = { symbol: symbol }
  }

  return (
    <section className="sidebar">
      <div className="tabber">
        <button className="active">Unicode</button>
        <button>SVG</button>
        <button>Pattern</button>
      </div>
      <figure>{symbol && symbol.symbol}</figure>
      <header>
        <h2>{name}</h2>
        {/* <span>Category name</span> */}
      </header>
    </section>
  )
}
