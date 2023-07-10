import React from "react";
import LinkCard from "./LinkCard";

interface LinkCardsProps {
  links: { href: string; title: string; image?: string }[];
}

export default function LinkCards({ links }: LinkCardsProps) {
  return (
    <>
      {links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </>
  );
}
