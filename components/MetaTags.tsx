import React from "react";
import Head from "next/head";

export default function MetaTags() {
  return (
    <Head>
      <title>Nirmalya Nayak | Links</title>
      <meta
        name="description"
        content="LinkTree with Next.js + TypeScript + Tailwind CSS"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:url" content="https://www.nirmalya.info/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Nirmalya Nayak | Links" />
      <meta
        property="og:description"
        content="LinkTree with Next.js + TypeScript + Tailwind CSS"
      />
      <meta property="og:image" content="https://nirmalya.info/profile.jpg" />
    </Head>
  );
}
