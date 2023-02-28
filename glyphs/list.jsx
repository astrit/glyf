import React, { useState, useEffect, useRef } from "react";
import Box from "@/box";
import { styled, keyframes } from "@/theme";
import { toast } from "sonner";
import { FixedSizeGrid as Grid } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import SelectionArea from "@viselect/vanilla";

// https://graphemica.com/%5E
// https://graphemica.com/%5E
// https://graphemica.com/%5E
// https://graphemica.com/%5E
// https://graphemica.com/%5E

import Syms from "g/glyphs.json";

const Cards = styled("div", {
  display: "flex",
  gap: "24px",
  flexDirection: "column",
});

const Category = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
  gap: "24px",
  marginTop: "48px",

  h2: {
    // content: "attr(data-category)",
    gridColumn: "1 / -1",
    fontSize: "12px",
    opacity: "0.5",
    fontWeight: "300",
    letterSpacing: "-0.1ch",
    paddingLeft: "20px",
  },
});

const Card = styled("gg", {
  // willChange: "all",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  aspectRatio: "1/1",
  objectFit: "cover",
  objectPosition: "center",
  // fontWeight: "600",
  fontSize: "24px",
  lineHeight: "1",
  color: "#0e0c1b",
  position: "relative",
  // transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  color: "$white_alpha10",
  userSelect: "none",
  position: "relative",
  cursor: "pointer",
  borderRadius: "18px",
  "--opacity": "0",
  background: `hsla(260, 74%, 53%, 1.0)`,
  border: "2px solid hsla(259, 73%, 56%, 1.0)",
  transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  boxShadow:
    "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
  boxSizing: "border-box",

  gl: {
    transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  "&:hover, &.selected": {
    color: "$white_alpha100",
    backgroundColor: "hsla(260, 74%, 56%, 1.0)",
    borderColor: "hsla(209, 99%, 67%, 0.2)",
    borderRadius: "24px",

    gl: {
      transform: "scale3d(1.3,1.3,1.3)",
    },
  },

  "&:active": {
    borderWidth: "12px",
    borderRadius: "28px",
    boxShadow:
      " 0px 1px 6px rgba(0, 0, 0, 0.06), 0px 20px 8px -4px rgba(0, 0, 0, 0.04)",

    gl: {
      transform: "scale3d(1.1,1.1,1.1)",
    },
  },

  "&::after": {
    content: " ",
    position: "absolute",
    display: "flex",
    borderRadius: "18px",
    boxShadow:
      "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
    transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    background:
      "linear-gradient(90deg, hsla(209, 99%, 67%, 1.0) 0%, #b447eb 95%)",
    width: "100%",
    height: "100%",
    zIndex: "-1",
    "@sm": {},
    willChange: "transform, opacity, border-radius, border-width, box-shadow",
  },

  "&:hover::after, &.selected::after": {
    transform: "scale3d(1.12,1.12,1.12)",
    borderRadius: "24px",
    cursor: "pointer",
  },
  "&:active::after": {
    transform: "scale3d(1.02, 1.02, 1.02)",
    borderRadius: "24px",
  },
});

const Toaster = styled("div", {
  display: "flex",
  gap: "10px",
  alignItems: "center",

  span: {
    lineHeight: "1",
    position: "relative",
    borderRadius: "4px",
    background: "hsla(260, 74%, 59%, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "1",
    padding: "8px 16px",
  },
});

// write a function that gets the length of all children from the List array down below and then use that to count the number of symbols in each category

export const Glyphs = ({ props }) => {
  const [isView, setView] = useState();
  const [isSelected, setSelected] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const selection = new SelectionArea({
      selectables: [".card"],
      boundaries: ["body"],
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
        // const selectedState = selection.i.selected.length;
        // document.title = `${selectedState}`;
        setSelected(selectedState);
        // console.log("selectedState", selectedState);
      });
  }, []);

  const List = Syms.categories.category;
  const gh = List.map((glf, index) => {
    // console.log(List.glf);
    return (
      <Category className="category" key={index}>
        <h2>
          {glf.title} — {glf.symbols.length}
        </h2>
        {glf.symbols.map((symbol, index) => {
          return (
            <Card
              key={index}
              className="card"
              onClick={() => {
                navigator.clipboard.writeText(symbol.symbol);
                toast.custom(() => (
                  <Toaster>
                    Copied <span>{symbol.symbol}</span> to clipboard!
                  </Toaster>
                ));
              }}
              title={symbol.name}
            >
              <gl>{symbol.symbol}</gl>
            </Card>
          );
        })}
      </Category>
    );
  });

  return (
    <Cards>
      {/* <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      /> */}
      {isView} {isSelected}
      {gh}
    </Cards>
  );
};

Glyphs.displayName = "Glyphs";
export default Glyphs;

// write a component that searches through the list of symbols and returns the ones that match the search term
// write a component that searches through the list of symbols and adds a class to the ones that match the search term

// export const Search = ({ props }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     const results = Syms.categories.category.flatMap((category) =>
//       category.symbols.filter((symbol) =>
//         symbol.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//     setSearchResults(results);
//   }, [searchTerm]);

//   return (
//     <div className="search">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <ul>
//         {searchResults.map((item, index) => (
//           <li key={index + "searchk"}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
