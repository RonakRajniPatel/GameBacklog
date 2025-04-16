"use client";
import Image from "next/image";
import { useState } from "react";

interface HoverImageProps {
  src: string;
  alt: string;
  style: string;
}
async function submitGameStatus(payload: {
  reviewId: {
    gameid: number;
    appuserid: number;
  };
  review: string;
  ratings: number;
  hours: number;
  datestarted: string;
  datefinished: string;
  status: number;
  game: {
    gameid: number;
  };
}) {
  try {
    console.log("Payload:", JSON.stringify(payload));
    const response = await fetch("http://localhost:8080/review/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.text();
    console.log("Successfully posted:", data);
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

const HoverImage: React.FC<HoverImageProps> = ({ src, alt, style }) => {
  let hover_width = "";
  let outer_constraints = "";

  if (style == "cover") {
    hover_width = "w-2/5";
    outer_constraints = "";
  } else if (style == "featured") {
    hover_width = "w-1/5";
    outer_constraints = "w-full md:w-3/5";
  }
  return (
    <div className={`group relative ${outer_constraints}`}>
      <Image src={src} alt={alt} width={1920} height={1080} className="" />
      <div className="hidden md:block">
        <div
          className={`absolute right-0 top-0 hidden group-hover:inline ${hover_width} h-full object-contain`}
        >
          <div className="h-1/4 bg-purple-500 opacity-85">
            <button
              className="h-full w-full"
              onClick={() =>
                submitGameStatus({
                  reviewId: {
                    gameid: 2,
                    appuserid: 1,
                  },
                  review: "Absolutely breathtaking open world.",
                  ratings: 10,
                  hours: 40.5,
                  datestarted: "2022-01-01T05:00:00.000+00:00",
                  datefinished: "2022-02-01T05:00:00.000+00:00",
                  status: 1,
                  game: {
                    gameid: 2,
                  },
                })
              }
            >
              Played
            </button>
          </div>
          <div className="h-1/4 bg-red-500 opacity-85">
            <button
              className="h-full w-full"
              onClick={() =>
                submitGameStatus({
                  reviewId: {
                    gameid: 2,
                    appuserid: 1,
                  },
                  review: "Absolutely breathtaking open world.",
                  ratings: 10,
                  hours: 40.5,
                  datestarted: "2022-01-01T05:00:00.000+00:00",
                  datefinished: "2022-02-01T05:00:00.000+00:00",
                  status: 2,
                  game: {
                    gameid: 2,
                  },
                })
              }
            >
              Drop
            </button>
          </div>
          <div className="h-1/4 bg-green-500 opacity-85">
            <button
              className="h-full w-full"
              onClick={() =>
                submitGameStatus({
                  reviewId: {
                    gameid: 2,
                    appuserid: 1,
                  },
                  review: "Absolutely breathtaking open world.",
                  ratings: 10,
                  hours: 40.5,
                  datestarted: "2022-01-01T05:00:00.000+00:00",
                  datefinished: "2022-02-01T05:00:00.000+00:00",
                  status: 3,
                  game: {
                    gameid: 2,
                  },
                })
              }
            >
              Played
            </button>
          </div>
          <div className="h-1/4 bg-blue-500 opacity-85">
            <button
              className="h-full w-full"
              onClick={() =>
                submitGameStatus({
                  reviewId: {
                    gameid: 2,
                    appuserid: 1,
                  },
                  review: "Absolutely breathtaking open world.",
                  ratings: 10,
                  hours: 40.5,
                  datestarted: "2022-01-01T05:00:00.000+00:00",
                  datefinished: "2022-02-01T05:00:00.000+00:00",
                  status: 4,
                  game: {
                    gameid: 2,
                  },
                })
              }
            >
              Played
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverImage;
