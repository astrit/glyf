// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import Head from "next/head";
// import Header from "@/header";
// import Box from "@/box";
// import { styled } from "@/theme";
// import SVGMap from "g/svg/svg";
// import Footer from "@/footer";
// import Carbon from "u/ads";
// import Search from "@/search";
// import Hero from "@/hero";
// import { toast } from "sonner";
// import Card from "@/search/card";
// import Toaster from "@/search/toaster";
// import CardSkeleton from "@/search/loader";
// import List from "@/search/list";

// const Main = styled("main", {
//   margin: "0 auto",
//   width: "clamp(64vw, 80vw, 1620px)",
//   padding: "1.5rem",

//   "@md": {
//     width: "calc(100% - 10px)",
//   },
// });

// function Symbol() {
//   const router = useRouter();
//   const { name } = router.query;

//   return (
//     <>
//       <Box>
//         <Head>
//           <title>{name} — Glyphs from CSS.GG</title>
//           <meta
//             name="description"
//             content="5000+ cool glyphs at your fingertips! Courtesy of CSS.GG, easy to find and copy to your clipboard."
//           />
//         </Head>
//         <h1>{name}</h1>
//       </Box>
//     </>
//   );
// }

// export default Symbol;

import React from "react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h1>{name} Page</h1>
      <p>This is the {name} page content.</p>
    </div>
  );
};

export default Page;
