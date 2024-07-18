import React, { useEffect, useRef, useState } from "react"

import "./ads.css"

export default function Ads() {
  const [isAds, setAds] = useState(null)
  const isScriptAdded = useRef(false) // Step 2: Create a ref to track script addition

  useEffect(() => {
    if (!isScriptAdded.current) {
      // Only proceed if the script hasn't been added
      const script = document.createElement("script")
      script.src =
        "//cdn.carbonads.com/carbon.js?serve=CWYDE537&placement=glyfapp"
      script.id = "_carbonads_js"
      script.async = true

      const ads = document.querySelector("#ads")
      if (ads) {
        ads.appendChild(script)
        isScriptAdded.current = true // Mark script as added
      }
    }
  }, []) // Dependency array remains empty to run only once

  return <div id="ads"></div>
}
