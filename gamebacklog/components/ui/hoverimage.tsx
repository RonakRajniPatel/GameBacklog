"use client";
import Image from "next/image";
import { useState } from "react";

interface HoverImageProps {
  src: string;
  alt: string;
  style: string;
}

const HoverImage: React.FC<HoverImageProps> = ({ src, alt, style }) => {
  if (style == "cover") {
    const hoverWidth = "w-2/5";
  }
  return (
    <div className="group relative">
      <Image src={src} alt={alt} width={1920} height={1080} className="" />
      <div className="hidden md:block">
        <div className="hidden md:block">
          <div className="hidden group-hover:inline absolute top-0 right-0 hoverWidth h-full object-contain">
            <div className="bg-purple-500 h-1/4 opacity-85">Played</div>
            <div className="bg-red-500 h-1/4 opacity-85">Drop</div>
            <div className="bg-green-500 h-1/4 opacity-85">Want</div>
            <div className="bg-blue-500 h-1/4 opacity-85">Still</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverImage;
