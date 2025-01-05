import React from "react";

interface Props {
  normaltitle: string;
  highlightedtitle: string;
  description: string;
  items?: string;
  text?: string;
}
export default function SectionTitle({
  normaltitle,
  highlightedtitle,
  description,
  items,
  text,
}: Props) {
  return (
    <div className={`w-full pb-6 flex flex-col ${items}`}>
      <h1 className={`w-full font-semibold mb-1 text-3xl ${text}`}>
        {normaltitle} <span className="text-primary"> {highlightedtitle}</span>
      </h1>
      <p className={`text-gray-600 w-full max-w-[600px]  ${text}`}>
        {description}
      </p>
    </div>
  );
}
