import React from "react";
import Image from "next/image";

interface StoryCardProps {
  image: string;
  alt: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ image, alt }) => {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
      <Image src={image} alt={alt} fill className="object-cover" />
    </div>
  );
};

export default StoryCard;
