"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

// Define a type for the ad
interface Ad {
  statlink?: string
  image?: string
  company?: string
  description?: string
  callToAction?: string
  companyTagline?: string
}

// Define a type for the state that includes an array of ads
interface AdData {
  ads: Ad[]
}

export default function Reklama() {
  // Use the AdData type for the state
  const [adData, setAdData] = useState<AdData>({ ads: [] })

  useEffect(() => {
    fetch("https://srv.buysellads.com/ads/CWYDE5QE.json")
      .then((response) => response.json())
      .then((data: AdData) => setAdData(data)) // Assume the fetched data matches the AdData type
      .catch((error) => console.error("Fetching ads failed:", error)) // Handle potential errors
  }, [])

  const ad = adData.ads.length > 0 ? adData.ads[0] : null

  console.log(ad)

  return (
    <>
      {ad && ad.statlink && (
        <a
          href={ad.statlink}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="ads-one"
        >
          {ad.image && (
            <Image
              width="40"
              height="40"
              src={ad.image}
              alt={ad.company || ""}
            />
          )}
          {ad.company && (
            <p>
              <span className="ad-company">{ad.company}</span>
              <span>{ad.description}</span>
            </p>
          )}
        </a>
      )}
    </>
  )
}
