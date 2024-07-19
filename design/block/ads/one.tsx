"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

// Define a type for the ad
interface Ad {
  statlink?: string
  image?: string
  company?: string
  description?: string
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

  return (
    <div className="ads-one">
      {ad && ad.statlink && (
        <a
          href={ad.statlink}
          target="_blank"
          rel="sponsored noopener noreferrer"
        >
          {ad.image && (
            <Image
              width="40"
              height="40"
              src={ad.image}
              alt={ad.company || ""}
            />
          )}
          {ad.company && <div>{ad.description}</div>}
          {/* {ad.company && (
            <div>
              <span>{ad.company}</span> {ad.description}
            </div>
          )} */}
        </a>
      )}
    </div>
  )
}
