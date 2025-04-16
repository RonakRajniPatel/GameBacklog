import * as React from "react";

import Image from "next/image";
import HoverImage from "./ui/hoverimage";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Activity() {
  const items = Array(12).fill({
    title: "The Legend of Zelda: Breath of the Wild",
    image: "/placeholder.svg?height=300&width=200",
    gameid: 1105,
  });

  return (
    <>
      {/* Carousel Row */}
      <div className="w-full">
        <header className="ml-28 text-4xl font-bold">Recent Activity</header>
      </div>

      <div className="mx-auto w-full max-w-fit md:px-56">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="h-full w-full pb-4"
        >
          <CarouselContent className="">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-2/6 pl-2 md:pl-4 lg:basis-1/6"
              >
                <Card className="m-1.5 overflow-hidden rounded-lg border-none bg-slate-100 shadow-lg drop-shadow-xl">
                  <CardContent className="px-2.5 pb-1 pt-2.5">
                    <HoverImage
                      src={"/images/gameCover.jpg"}
                      alt={item.title}
                      style={"cover"}
                    />
                  </CardContent>
                  <CardFooter className="px-1.5 pb-1">
                    <button className="m-0 border-none bg-transparent p-0 px-1.5 pb-1 text-left text-sm font-semibold leading-snug text-inherit">
                      <Link href={`/game/${item.gameid}`}>{item.title}</Link>
                    </button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="top-2/3 hidden md:block" />
          <CarouselNext className="top-2/3 hidden md:block" />
        </Carousel>
      </div>
    </>
  );
}
