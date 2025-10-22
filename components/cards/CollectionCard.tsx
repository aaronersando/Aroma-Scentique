import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CollectionCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  image,
  title,
  description,
  href,
}) => {
  return (
    <Link
      href={href}
      className="relative block overflow-hidden rounded-lg group"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <h3 className="text-3xl font-playfair font-bold mb-2 text-white">
            {title}
          </h3>
          <p className="text-sm font-inter mb-4 text-white/90">{description}</p>
          <div className="flex items-center gap-2 text-white font-montserrat text-sm uppercase tracking-wide">
            <span>Explore Collection</span>
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-2"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
