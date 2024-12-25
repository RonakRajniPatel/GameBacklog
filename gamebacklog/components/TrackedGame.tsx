"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export function TrackedGame() {
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
      className={`bg-gray-200 rounded-lg w-full flex flex-row h-auto max-h-44 md:max-h-96 pb-4 md:pb-0`}
    >
      <div className={`flex flex-row w-3/12 md:w-1/6 h-full bg-yellow-500`}>
        <Image
          src={"/images/gameCover.jpg"}
          width={1000}
          height={1363}
          alt={game.title}
          className="rounded p-6 pb-0 md:hidden object-scale-down"
        />
        <div className="p-6 pb-0">
          <div className="hidden md:block group relative">
            <Image
              src={"/images/gameCover.jpg"}
              width={1000}
              height={1363}
              alt={game.title}
              className="object-cover rounded"
            />
            <div className="hidden group-hover:inline absolute top-0 right-0 w-2/5 h-full object-contain">
              <div className="bg-purple-500 h-1/4 opacity-85">Played</div>
              <div className="bg-red-500 h-1/4 opacity-85">Drop</div>
              <div className="bg-green-500 h-1/4 opacity-85">Want</div>
              <div className="bg-blue-500 h-1/4 opacity-85">Still</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-9/12 md:w-5/6 h-full p-4 bg-red-500">
        <div className="flex flex-col w-full h-full md:hidden bg-blue-500">
          <h1 className="flex font-semibold text-xl overflow-hidden">
            {game.title}
          </h1>
          <div className="flex flex-row pt-2 font-thin text-sm leading-tight justify-between bg-purple-500 w-full mt-auto">
            <h3 className="flex flex-row font-semibold text-md leading-tight bg-green-500">
              Rating: {game.ratings}
            </h3>
            <h3 className="flex flex-row font-semibold text-md leading-tight bg-pink-500">
              Status: {game.status}
            </h3>
          </div>
        </div>
        <div
          className={`hidden  ${isExpanded ? "h-fit" : "h-2/5"} md:flex flex-row bg-blue-500`}
        >
          <div className=" w-7/12 overflow-hidden">
            <h1 className="flex flex-col font-medium text-4xl pr-20">
              {game.title}
            </h1>
          </div>
          <div className="flex flex-col w-5/12 pt-2 font-thin text-lg leading-tight">
            <h3>Status: {game.status}</h3>
            <h3>Hours Played: {game.hours}</h3>
            <h3>Ratings: {game.ratings}</h3>
            <h3>Date Played: {formattedDate}</h3>
            <h3>Platform: {game.platform}</h3>
          </div>
        </div>
        <div className="hidden md:block w-full h-3/5 pt-5 font-normal text-lg object-top overflow-hidden">
          <h3 className="bg-purple-500">
            {shown_review}
            {game.review.length < overflowLength || isExpanded ? "" : "..."}
            <Button
              variant="link"
              onClick={toggleExpansion}
              className={`font-normal text-lg ${game.review.length < overflowLength ? "hidden" : ""}`}
            >
              {isExpanded ? "Show Less" : "Show More"}
            </Button>
          </h3>
        </div>
      </div>
    </div>
  );
}
