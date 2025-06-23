// components/WorkCard.jsx
"use client";
import Image from "next/image";
import React from "react";

export default function WorkCard({
  title,
  role,
  org,
  year,
  description,
  logo,
  link, // new prop
}) {
  const cardContent = (
    <div className="relative flex flex-col md:flex-row items-start gap-4 border border-border bg-card p-4 rounded-xl shadow-sm hover:shadow-md cursor-pointer hover:scale-102 transition transform duration-200">
      {logo && (
        <div className="w-12 h-12 relative">
          <Image
            src={logo}
            alt={`${org} logo`}
            fill
            className="object-contain rounded-md"
          />
        </div>
      )}

      <div className="flex-1">
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <p className="text-sm text-muted-foreground font-medium">{org}</p>
        <div className="flex justify-between items-center text-sm mt-1">
          <span className="text-muted-foreground">{role}</span>
          <span className="text-muted-foreground">{year}</span>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        )}
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
}
