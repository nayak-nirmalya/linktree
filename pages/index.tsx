import React from "react";
import Image from "next/image";

import data from "../data.json";
import Avatar from "/public/assets/images/Avatar.jpg";

export default function Home() {
  return (
    <div className="flex items-center">
      <Image alt={data.name} src={Avatar} width={48} height={48} />
    </div>
  );
}
