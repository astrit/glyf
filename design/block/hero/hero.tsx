"use client"

import { usePathname, useRouter } from "next/navigation"
import Link from "@/link/link"

import "./hero.css"

export default function Hero() {
  const pathName = usePathname()
  return (
    <section className="hero">
      <h1>
        6000+
        <br />
        Free Glyphs
      </h1>
      <div className="links">
        <div className="left">
          <div className="gg">
            <span>©</span>
            <div>~</div>
            <Link href="https://css.gg" target="_blank">
              CSS＊GG
            </Link>
            <div>✗</div>
            <Link href="https://slant.so" target="_blank" className="slant">
              S L Λ \ T
            </Link>
          </div>
          <small></small>
          <ul>
            <li>String</li>
            <span>·</span>
            <li>Figma Variable</li>
            <span>·</span>
            <li>SVG</li>
          </ul>
        </div>
        <div className="sources">
          <Link
            href="https://www.figma.com/community/file/1284635132283811437/gylf.app-%E2%80%94-6000%2B-Variable-Glyphs"
            target="_blank"
            className="figma"
          >
            <svg viewBox="0 0 17 24">
              <g>
                <path
                  d="M4.1665 24C6.3745 24 8.1665 22.208 8.1665 20V16H4.1665C1.9585 16 0.166504 17.792 0.166504 20C0.166504 22.208 1.9585 24 4.1665 24Z"
                  fill="#0ACF83"
                ></path>
                <path
                  d="M0.166504 12C0.166504 9.792 1.9585 8 4.1665 8H8.1665V16H4.1665C1.9585 16 0.166504 14.208 0.166504 12Z"
                  fill="#A259FF"
                ></path>
                <path
                  d="M0.166504 4C0.166504 1.792 1.9585 0 4.1665 0H8.1665V8H4.1665C1.9585 8 0.166504 6.208 0.166504 4Z"
                  fill="#F24E1E"
                ></path>
                <path
                  d="M8.1665 0H12.1665C14.3745 0 16.1665 1.792 16.1665 4C16.1665 6.208 14.3745 8 12.1665 8H8.1665V0Z"
                  fill="#FF7262"
                ></path>
                <path
                  d="M16.1665 12C16.1665 14.208 14.3745 16 12.1665 16C9.9585 16 8.1665 14.208 8.1665 12C8.1665 9.792 9.9585 8 12.1665 8C14.3745 8 16.1665 9.792 16.1665 12Z"
                  fill="#1ABCFE"
                ></path>
              </g>
            </svg>
            Figma <span>$4.00</span>
          </Link>
          <Link href="https://github.com/astrit/css.gg" target="_blank">
            <svg viewBox="0 0 14 14">
              <path
                d="M7.02751 0.333496C3.34571 0.333496 0.333332 3.40836 0.333332 7.16653C0.333332 10.1845 2.23002 12.7468 4.90769 13.6579C5.2424 13.7149 5.35397 13.4871 5.35397 13.3163C5.35397 13.1454 5.35397 12.7468 5.35397 12.1774C3.51307 12.576 3.12257 11.2664 3.12257 11.2664C2.84365 10.4692 2.39737 10.2414 2.39737 10.2414C1.72795 9.8428 2.39737 9.8428 2.39737 9.8428C3.06679 9.89974 3.4015 10.5261 3.4015 10.5261C4.01513 11.5511 4.96347 11.2664 5.35397 11.0955C5.40975 10.64 5.57711 10.3553 5.80024 10.1845C4.29405 10.0136 2.73208 9.44421 2.73208 6.82488C2.73208 6.08463 3.011 5.45827 3.4015 5.00274C3.4015 4.77497 3.12257 4.09166 3.51307 3.18059C3.51307 3.18059 4.07091 3.00977 5.35397 3.8639C5.91181 3.69307 6.46966 3.63613 7.02751 3.63613C7.58536 3.63613 8.14321 3.69307 8.70105 3.8639C9.98411 2.95283 10.542 3.18059 10.542 3.18059C10.9324 4.14861 10.6535 4.83191 10.5977 5.00274C11.044 5.45827 11.2672 6.08463 11.2672 6.82488C11.2672 9.44421 9.70518 10.0136 8.19899 10.1845C8.42213 10.4122 8.64527 10.8108 8.64527 11.4372C8.64527 12.3482 8.64527 13.0885 8.64527 13.3163C8.64527 13.4871 8.75684 13.7149 9.09155 13.6579C11.7692 12.7468 13.6659 10.1845 13.6659 7.16653C13.7217 3.40836 10.7093 0.333496 7.02751 0.333496Z"
                fill="currentColor"
              ></path>
            </svg>
            Github
            <span>9.7k</span>
          </Link>
          <Link
            href="https://www.youtube.com/c/astrit?sub_confirmation=1"
            target="_blank"
          >
            <svg viewBox="0 -77 512 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M501 56c-5-22-23-39-45-45C416 0 256 0 256 0S96 0 56 11c-22 5-40 23-45 45C0 96 0 179 0 179s0 84 11 123c5 22 23 40 45 46 40 10 200 10 200 10s160 0 200-10c22-6 40-23 45-45 11-40 11-123 11-123s0-84-11-124zm0 0"
                fill="red"
              ></path>
              <path d="M205 256l133-77-133-77zm0 0" fill="#fff"></path>
            </svg>
            @astrit
            <span>3k</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
