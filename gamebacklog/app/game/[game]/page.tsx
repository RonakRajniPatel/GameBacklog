"use client";
import Image from "next/image";
import { Review } from "@/components/Review";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useRef } from "react";

export default function Home() {
  const game = {
    title: "The Legend of Zelda: Breath of the Wild",
    platform: "Nintendo Switch",
    publisher: "Nintendo",
    developers: ["Nintendo EDP Production", "Group No. 3"],
    genres: ["Puzzle", "Role-Playing(RPG)", "Adventure"],
    date_released: new Date("2017-03-03"),
    score: 9.3,
    est_playtime: [89, 332],
    story:
      "The Legend of Zelda: Breath of the Wild is the first 3D open-world game in the Zelda series. Link can travel anywhere and be equipped with weapons and armor found throughout the world to grant him various bonuses. Unlike many games in the series, Breath of the Wild does not impose a specific order in which quests or dungeons must be completed. While the game still has environmental obstacles such as weather effects, inhospitable lands, or powerful enemies, many of them can be overcome using the right method. A lot of critics ranked Breath of the Wild as one of the best video games of all time.",
  };

  const formattedDate = game.date_released.toISOString().split("T")[0];
  return (
    <div className="flex min-h-screen max-w-fit justify-center overflow-y-auto">
      <div
        className={`flex w-full flex-col items-center bg-red-500 px-2 md:gap-10`}
      >
        <div className="md:flex md:flex-row md:gap-x-10">
          <div className="bg-pink-500 md:w-8/12">
            <div className="bg-purple-500 text-start text-xl font-bold md:flex md:h-1/6 md:flex-row md:place-items-center">
              <h1 className="bg-blue-300 text-2xl md:w-9/12 md:p-5 md:text-4xl">
                {game.title}
              </h1>
              <h1 className="bg-green-300 text-lg md:w-3/12 md:p-3 md:text-right md:text-4xl">
                Score: {game.score}
              </h1>
            </div>

            <h2 className="hidden bg-yellow-500 p-5 text-lg font-normal md:block">
              {game.story}
            </h2>
            <div className="hidden md:block">
              <h2 className="pt-10 text-lg">Reviews</h2>
              <Review
                content="good"
                author="Ronak"
                date="sometime"
                profile="/images/profile.jpg"
              />
            </div>
          </div>
          <div className="flex flex-col rounded-2xl px-10 md:order-first md:ml-5 md:w-3/12 md:bg-gray-200 md:p-5 md:pt-5">
            <div className="object-scale-down">
              <Image
                src={"/images/gameCover.jpg"}
                width={1000}
                height={1363}
                alt={game.title}
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="flex flex-col bg-green-500 pb-2 text-lg font-thin leading-tight">
              <h2 className="text-xl font-normal">
                <u>Information</u>
              </h2>
              <h3>
                {"Publisher: "} {game.publisher}
              </h3>
              <h3>
                {"Main Developers: "}
                {game.developers[0]}
              </h3>
              <h3>
                Genres:
                {game.genres.map((genre, index) => (
                  <span className="text-b rounded-lg bg-gray-200" key={index}>
                    {genre}
                    {index < game.genres.length - 1 && ", "}
                  </span>
                ))}
              </h3>
              <h3>Date Rleased: {formattedDate}</h3>
              <h3>Platform: {game.platform}</h3>
            </div>
            <div className="flex flex-col bg-blue-500 pb-2 text-lg font-thin">
              <h2 className="text-xl font-normal">
                <u>Time to Beat</u>
              </h2>
              <h3>
                {"Normal: "}
                {game.est_playtime[0]} hours
              </h3>
              <h3>
                {"Completionist: "}
                {game.est_playtime[1]} hours
              </h3>
            </div>

            <Accordion
              type="single"
              collapsible
              className="flex w-full flex-col bg-yellow-500 pb-2 md:hidden"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">Story</AccordionTrigger>
                <AccordionContent className="text-lg font-normal">
                  {game.story}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
