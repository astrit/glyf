import React, { Suspense } from "react"
import type { Metadata } from "next"
import Categories from "@/categories/categories"
import Favicon from "@/fav/fav"
import Footer from "@/footer/footer"
import Grid from "@/grid/grid"
import Header from "@/header/header"
import Hero from "@/hero/hero"
import Preloader from "@/preloader/preloader"
import Search from "@/search/search"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"
import Main from "&/main/main"
import Fonts from "$/fonts/fonts"
import { Provider } from "$/provider/provider"

import "#/global/global.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://glyf.app"),
  title: {
    default: "Glyphs → CSS.GG",
    template: "%s · GLYF＊APP",
  },
  description: "",
  openGraph: {
    title: "glyf.app",
    description: "",
    url: "https://glyf.app",
    siteName: "glyf.app",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `https://glyf.app/og?title=Glyf`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Suspense fallback={<Preloader />}>
          <Provider
            attribute="theme"
            defaultTheme="dark"
            enableColorScheme={false}
            enableSystem={true}
          >
            <Favicon />
            <Fonts>
              <Header />
              <Hero />
              <Search />
              <Main>
                <Categories />
                <Grid />
                <aside className="sidebar">{children}</aside>
              </Main>
              {/* <Footer /> */}
            </Fonts>
          </Provider>
        </Suspense>
        <Analytics />
        <GoogleAnalytics gaId="G-0VG2JESCZ8" />
      </body>
    </html>
  )
}
