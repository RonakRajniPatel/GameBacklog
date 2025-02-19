"use client";

import React from "react";
import Image from "next/image";
import HoverImage from "./ui/hoverimage";
import { Button } from "./ui/button";

export function TrackedGame(props: any) {
  const { review } = props;
  console.log("Tracked Game");
  console.log(review);
  const game = {
    title: "The Legend of Zelda: Breath of the Wild",
    platform: "Nintendo Switch",
    status: "Played",
    hours: 136,
    ratings: 5,
    date_played: new Date("2017-03-03"),
    review:
      "The Legend of Zelda: Breath of the Wild is the first 3D open-world game in the Zelda series. Link can travel anywhere and be equipped with weapons and armor found throughout the world to grant him various bonuses. Unlike many games in the series, Breath of the Wild does not impose a specific order in which quests or dungeons must be completed. While the game still has environmental obstacles such as weather effects, inhospitable lands, or powerful enemies, many of them can be overcome using the right method. A lot of critics ranked Breath of the Wild as one of the best video games of all time.",
  };
  const formattedDate = game.date_played.toISOString().split("T")[0];
  const [overflowLength, setOverflowLength] = React.useState(650);

  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggleExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };
  const shown_review = isExpanded
    ? game.review
    : game.review.slice(0, overflowLength);
  return (
    <div
      className={`flex h-auto max-h-44 w-full flex-row rounded-lg bg-gray-200 pb-4 md:max-h-96 md:pb-0`}
    >
      <div className={`flex h-full w-3/12 flex-row bg-yellow-500 md:w-1/6`}>
        <Image
          src={"/images/gameCover.jpg"}
          width={1000}
          height={1363}
          alt={game.title}
          className="rounded object-scale-down p-3 pb-0 md:hidden"
        />
        <div className="p-6 pb-0">
          <HoverImage
            src={"/images/gameCover.jpg"}
            alt={game.title}
            style="cover"
          />
        </div>
      </div>
      <div className="flex h-full w-9/12 flex-col bg-red-500 p-4 md:w-5/6">
        <div className="flex h-full w-full flex-col bg-blue-500 md:hidden">
          <h1 className="flex overflow-hidden text-xl font-semibold">
            {game.title}
          </h1>
          <div className="mt-auto flex w-full flex-row justify-between bg-purple-500 pt-2 text-sm font-thin leading-tight">
            <h3 className="text-md flex flex-row bg-green-500 font-semibold leading-tight">
              Rating: {game.ratings}
            </h3>
            <h3 className="text-md flex flex-row bg-pink-500 font-semibold leading-tight">
              Status: {game.status}
            </h3>
          </div>
        </div>
        <div
          className={`hidden ${isExpanded ? "h-fit" : "h-2/5"} flex-row bg-blue-500 md:flex`}
        >
          <div className="w-7/12 overflow-hidden">
            <h1 className="flex flex-col pr-20 text-4xl font-medium">
              {game.title}
            </h1>
          </div>
          <div className="flex w-5/12 flex-col pt-2 text-lg font-thin leading-tight">
            <h3>Status: {game.status}</h3>
            <h3>Hours Played: {game.hours}</h3>
            <h3>Ratings: {game.ratings}</h3>
            <h3>Date Played: {formattedDate}</h3>
            <h3>Platform: {game.platform}</h3>
          </div>
        </div>
        <div className="hidden h-3/5 w-full overflow-hidden object-top pt-5 text-lg font-normal md:block">
          <h3 className="bg-purple-500">
            {shown_review}
            {game.review.length < overflowLength || isExpanded ? "" : "..."}
            <Button
              variant="link"
              onClick={toggleExpansion}
              className={`text-lg font-normal ${game.review.length < overflowLength ? "hidden" : ""}`}
            >
              {isExpanded ? "Show Less" : "Show More"}
            </Button>
          </h3>
        </div>
      </div>
    </div>
  );
}
