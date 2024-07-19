import "./hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <h1>
        6000+
        <br />
        Free Glyphs
      </h1>
      <ul>
        <li>String</li>
        <li>Figma Variable</li>
        <li>SVG</li>
        <li>CSS Pattern</li>
      </ul>

      <div>
        <div>© — CSS.GG ↗</div>
        <ul>
          <li>Figma</li>
          <li>Github</li>
          {/* 
          <Button
          // to="https://www.figma.com/community/file/834587122842084475/css.gg"
          to="https://www.figma.com/community/file/1284635132283811437/gylf.app-%E2%80%94-6000%2B-Variable-Glyphs"
          title="Figma"
          count="$4.00"
          svg="figma"
        />

        {/* <Button
          to="https://www.youtube.com/c/astrit?sub_confirmation=1"
          title="@astrit"
          svg="youtube"
        /> */}
        </ul>
      </div>
    </section>
  )
}
