import React from "react";
import Image from "next/image";

import data from "../data.json";

import LinkCards from "@/components/LinkCards";

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
      <LinkCards links={data.links} />
    </div>
  );
}
