import React from "react";

import TwitterIcon from "@/components/Icons/TwitterIcon";
import GitHubIcon from "@/components/Icons/GitHubIcon";

interface SocialsProps {
  socials: { href: string; title: string }[];
}

export default function Socials({ socials }: SocialsProps) {
  return (
    <div className="flex items-center gap-4 mt-6 text-white">
      {socials.map((social) => (
        <a
          aria-label={`${social.title} Link`}
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.href.includes("twitter") ? (
            <TwitterIcon />
          ) : social.href.includes("github") ? (
            <GitHubIcon />
          ) : null}
        </a>
      ))}
    </div>
  );
}
