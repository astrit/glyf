import React, { useState, useEffect, useRef } from "react";
import SelectionArea from "@viselect/vanilla";

const Select = ({}) => {
  useEffect(() => {
    const selection = new SelectionArea({
      selectables: [".glyphs > a"],
      boundaries: ["body"],
      behaviour: {
        overlap: "invert",
      },
      features: {
        touch: false,
      },
      singleTap: {
        allow: false,
        intersect: "native",
      },
      quite: true,
    })
      .on("start", ({ store, event }) => {
        if (!event.ctrlKey && !event.metaKey) {
          for (const el of store.stored) {
            el.classList.remove("selected");
          }
          selection.clearSelection();
        }
      })
      .on(
        "move",
        ({
          store: {
            changed: { added, removed },
          },
        }) => {
          for (const el of added) {
            el.classList.add("selected");
          }
          for (const el of removed) {
            el.classList.remove("selected");
          }
        }
      )
      .on("stop", ({ store, store: { stored } }) => {
        document.body.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            for (const el of store.stored) {
              el.classList.remove("selected");
            }
            setSelected(false);
            selection.clearSelection();
          }
        });
        const selectedState = selection._selection.stored.length;
        setSelected(selectedState);
        setCopiedSymbols(
          stored
            .map((el) =>
              selectedState ? el.getAttribute("data-symbol") : null
            )
            .slice(0, 10)
        );
      });
  }, []);

  return null;
};

Select.displayName = "Select";

export default Select;
