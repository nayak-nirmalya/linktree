import React from "react";
import Image from "next/image";

import data from "../data.json";
import Avatar from "/public/assets/images/Avatar.jpg";

export default function Home() {
  return (
    <div className="flex mx-auto w-full justify-center mt-16 items-center flex-col">
      <Image
        className="rounded-full"
        alt={data.name}
        src={Avatar}
        width={96}
        height={96}
      />
      <h1 className="font-semibold mt-4 text-xl">{data.name}</h1>
    </div>
  );
}
