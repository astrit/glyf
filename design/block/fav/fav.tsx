"use client"

import { useTheme } from "next-themes"

export default function Favicon() {
  const { resolvedTheme } = useTheme()
  const fill = resolvedTheme === "dark" ? "rgba(255,255,255)" : "rgba(0,0,0)"
  const svgCode = `<svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx='21' cy='21' r='20' fill='#5F19DD'/><path d='M27 12a3 3 0 0 0-3 3v12a3 3 0 1 0 3-3H15a3 3 0 1 0 3 3V15a3 3 0 1 0-3 3h12a3 3 0 0 0 0-6Z' stroke='#fff' stroke-width='2'/></svg>`
  const faviconUrl = `data:image/svg+xml,${encodeURIComponent(svgCode)}`
  // data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='42' fill='none'%3E%3Ccircle cx='21' cy='21' r='20' fill='%235F19DD'/%3E%3Cpath d='M27 12a3 3 0 0 0-3 3v12a3 3 0 1 0 3-3H15a3 3 0 1 0 3 3V15a3 3 0 1 0-3 3h12a3 3 0 0 0 0-6Z' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E
  // const svgCode = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="6" stroke="${fill}" stroke-width="4" /></svg>`;
  // const faviconUrl = `data:image/svg+xml,${encodeURIComponent(svgCode)}`;

  return <link rel="icon" type="image/svg+xml" href={faviconUrl} />
}
