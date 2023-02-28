import Head from "next/head";
// import content from "g/glyphs.json";
import Syms from "g/glyphs.json";

export async function generateStaticParams() {
  return Syms.map((symbols) => ({
    slug: symbols.slug,
  }));
}

export default async function Blog({ params }) {
  const post = Syms.find((symbols) => symbols.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <section>dfsdfsdf</section>;
}
