import React from "react";
import Image from "next/image";

interface HeaderProps {
  data: { name: string; avatar: string };
}

export default function Header({ data }: HeaderProps) {
  return (
    <>
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
    </>
  );
}
