import Head from "next/head";
import Header from "@/header";
import Box from "@/box";

export default function error404() {
  return (
    <Box>
      <Head>
        <title>404</title>
      </Head>
      <Header />
      <h1>404</h1>
    </Box>
  );
}
