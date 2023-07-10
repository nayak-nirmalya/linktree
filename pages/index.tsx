import React from "react";

import data from "../data.json";

import LinkCards from "@/components/LinkCards";
import Socials from "@/components/Socials";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Head>
        <title>LinkTree Clone: Nirmalya Nayak</title>
        <meta
          name="description"
          content="LinkTree with Next.js + TypeScript + Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header data={data} />
      <LinkCards links={data.links} />
      <Socials socials={data.socials} />
    </div>
  );
}
