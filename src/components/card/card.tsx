import React from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col shadow min-h[210px] md:min-h-[400px] rounded-xl">
      <img
        className="h-48 md:h-80 rounded-t-xl object-cover"
        src={imgSrc}
        alt={"project ${title}"}
      />

      <div className="py-3 px-6 space-y-2">
        <h1 className="font-semibold text-base md:text-xl">{title}</h1>
        <p className="text-sx md:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
