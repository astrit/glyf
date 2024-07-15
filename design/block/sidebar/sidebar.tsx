import "./sidebar.css"

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="tabber">
        <button className="active">Unicode</button>
        <button>SVG</button>
        <button>Pattern</button>
      </div>
      <figure></figure>
      <header>
        <h2>Name of the glyp</h2>
        <span>Category name</span>
      </header>
    </section>
  )
}
