import React from "react";
import Head from "next/head";

export default function MetaTags() {
  return (
    <Head>
      <title>LinkTree Clone: Nirmalya Nayak</title>
      <meta
        name="description"
        content="LinkTree with Next.js + TypeScript + Tailwind CSS"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
