import React from "react";

interface LinkCardsProps {
  href: string;
  title: string;
  image?: string;
}

export default function LinkCards({ href, image, title }: LinkCardsProps) {
  return <div>LinkCards</div>;
}
