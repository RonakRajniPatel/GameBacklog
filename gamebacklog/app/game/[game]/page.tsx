"use client";
import Image from "next/image";
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
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col items-center w-full px-2 2xl:max-w-screen-2xl bg-red-500">
        <h1 className="text-xl font-bold">{game.title}</h1>
        <div className="object-scale-down size-3/4 md:w-1/12">
          <Image
            src={"/images/gameCover.jpg"}
            width={1000}
            height={1363}
            alt={game.title}
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col w-2/3 pb-2 font-thin text-lg leading-tight bg-purple-500">
          <h2 className="font-normal text-xl text-center">
            {"Score: "}
            {game.score}
          </h2>
        </div>
        <div className="flex flex-col w-2/3 pb-2 font-thin text-lg leading-tight bg-green-500">
          <h2 className="font-normal text-xl text-center">
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
              <span className="rounded-lg bg-gray-200 text-b" key={index}>
                {genre}
                {index < game.genres.length - 1 && ", "}
              </span>
            ))}
          </h3>
          <h3>Date Rleased: {formattedDate}</h3>
          <h3>Platform: {game.platform}</h3>
        </div>
        <div className="flex flex-col w-2/3 pb-2 bg-blue-500 text-lg font-thin">
          <h2 className="font-normal text-xl">
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
        <div className="bg-yellow-500 pb-2 w-2/3 flex flex-col">
          <h2 className="font-normal text-lg">{game.story}</h2>
        </div>
      </div>
    </div>
  );
}
