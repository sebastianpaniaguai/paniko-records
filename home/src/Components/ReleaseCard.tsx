import React from "react";

export const ReleaseCard = ({ image, title, artist, label, year }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{artist}</p>
        <div className="text-sm">
          <p className="text-gray-400">
            {label} - {year}
          </p>
        </div>
      </div>
    </div>
  );
};
