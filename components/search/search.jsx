import React, { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { styled } from "@/theme";

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  top: "20px",
  zIndex: "1",

  svg: {
    position: "absolute",
    right: "26px",
    top: "0",
    bottom: "0",
    margin: "auto",
  },
});

const Input = styled("input", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "18px",
  fontSize: "8px",
  padding: "26px 34px 26px 80px",
  fontSize: "24px",
  lineHeight: "1",
  background: `rgba(255,255,255,0.06) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045 4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242a1.116 1.116 0 0 0-.045-.042Zm-2.076-9.15a6 6 0 1 1-8.485 8.485 6 6 0 0 1 8.485-8.485Z' fill='white'/%3E%3C/svg%3E") no-repeat left 26px center/28px 28px`,
  backdropFilter: "blur(20px)",
  color: "white",
  border: "none",
  fontWeight: "300",
  outline: "none",
  fontFamily: `"Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  border: "3px solid rgba(255,255,255,0.07)",

  boxShadow:
    "2px 3px 8px rgba(0, 0, 0, 0.06), 0px 28px 12px -8px rgba(0, 0, 0, 0.04)",
  transition:
    "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.4s",

  "&::placeholder": {
    color: "rgba(255,255,255,0.3)",
  },
  "&:focus:placeholder": {
    color: "transparent",
  },
  "&:focus": {
    backgroundColor: "rgba(255,255,255,0.09)",
    borderColor: "rgba(255,255,255,0.2)",
    backgroundPosition: "left 30px center",
    paddingLeft: "86px",
  },
  "&:not(:placeholder-shown)": {
    // color: "red",
  },
});

const List = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
  gap: "24px",
  marginTop: "48px",
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

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [symbolsData, setSymbolsData] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    let prog = document.querySelector(".scroll"),
      leng = prog.getTotalLength(),
      pos = -1;

    prog.style.strokeWidth = 4;
    prog.style.stroke = "hsla(60, 0%, 100%, 1)";
    prog.style.strokeDasharray = leng + " " + leng;
    prog.style.strokeDashoffset = leng;
    prog.getBoundingClientRect();

    function updateProgress() {
      const progress =
        leng -
        (window.pageYOffset * leng) /
          (document.body.scrollHeight - window.innerHeight);
      prog.style.strokeDashoffset = progress;
    }

    function scroll() {
      if (pos == window.pageYOffset) {
        window.requestAnimationFrame(scroll);
        return false;
      } else {
        pos = window.pageYOffset;
        updateProgress();
      }
      window.requestAnimationFrame(scroll);
    }
    scroll();

    setIsLoading(true);
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setSymbolsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!symbolsData) return;
    setIsLoading(true);
    const regex = new RegExp(searchTerm, "i");
    const results = symbolsData.categories.category.flatMap((category) =>
      category.symbols.filter((symbol) =>
        regex.test(symbol.name.replace(/\s+/g, ""))
      )
    );
    setSearchResults(results);
    setIsLoading(false);
  }, [searchTerm, symbolsData]);

  const Scroll = () => (
    <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
      <circle
        className="scroll"
        cx="13"
        cy="13"
        r="10"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <>
      <Form>
        <Input
          id="s"
          placeholder="Search 4300 glyphs — press / to start searching"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          pattern="[A-Za-z0-9\-]+"
          value={searchTerm}
          onChange={handleChange}
        />
        <Scroll />
      </Form>

      {isLoading || !symbolsData ? (
        <p>Loading...</p>
      ) : (
        <List>
          {searchResults.map((item, index) => (
            <Card
              key={index + "searchk"}
              onClick={() => {
                navigator.clipboard.writeText(item.symbol);
                toast.custom(() => (
                  <Toaster>
                    Copied <span>{item.symbol}</span> to clipboard!
                  </Toaster>
                ));
              }}
            >
              {item.symbol}
            </Card>
          ))}
        </List>
      )}
    </>
  );
}
