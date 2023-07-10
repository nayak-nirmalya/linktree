import React from "react";

interface LinkCardsProps {
  href: string;
  title: string;
  image?: string;
}

export default function LinkCard({ href, title, image }: LinkCardsProps) {
  return <div>LinkCard</div>;
}
