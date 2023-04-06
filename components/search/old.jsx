import React, { useState, useEffect, useRef } from "react";
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

function appSearch() {
  var appInput, inputValue, appGrid, appIcon, iconName, i, searchKey;
  appInput = document.getElementById("s");
  inputValue = appInput.value.toUpperCase();
  // appGrid = document.getElementsByClassName(".category");
  appIcon = document.getElementsByClassName(".card");

  for (i = 0; i < appIcon.length; i++) {
    iconName = appIcon[i].getAttribute("class");
    iconTag = appIcon[i].getAttribute("title");

    iconKey = iconName.replace("-", " ") + iconTag;

    searchKey = iconKey;

    if (searchKey.toUpperCase().indexOf(inputValue) > -1) {
      appIcon[i].style.display = "";
    } else {
      appIcon[i].style.display = "none";
    }
  }
}

export default function Search() {
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
    // appSearch();

    // var appInput, inputValue, appGrid, appIcon, iconName, i, searchKey;
    // const appInput = document.getElementById("s");
    // const inputValue = appInput.value.toUpperCase();
    // // appGrid = document.getElementsByClassName(".category");
    // const appIcon = document.querySelectorAll(".card");

    // for (i = 0; i < appIcon.length; i++) {
    //   const iconName = appIcon[i].getAttribute("class");
    //   const iconTag = appIcon[i].getAttribute("title");

    //   const iconKey = iconName.replace("-", " ") + iconTag;

    //   const searchKey = iconKey;

    //   if (iconTag.toUpperCase().indexOf(inputValue) > -1) {
    //     appIcon[i].style.display = "";
    //     console.log("working");
    //   } else {
    //     appIcon[i].style.display = "none";
    //     console.log("working");
    //   }
    // }
  }, []);

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
    <Form>
      <Input
        id="s"
        placeholder="Search 4300 glyphs — press / to start searching"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        pattern="[A-Za-z0-9\-]+"
      />
      <Scroll />
    </Form>
  );
}
