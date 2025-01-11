import * as React from "react";

import Image from "next/image";
import HoverImage from "./ui/hoverimage";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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
  });

  return (
    <>
      {/* Carousel Row */}
      <div className="w-full">
        <header className="text-4xl font-bold ml-28">Recent Activity</header>
      </div>

      <div className="w-full max-w-fit mx-auto md:px-56">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full h-full pb-4"
        >
          <CarouselContent className="">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-2/6 lg:basis-1/6"
              >
                <Card className="border-none shadow-lg rounded-lg overflow-hidden drop-shadow-xl bg-slate-100 m-1.5">
                  <CardContent className="px-2.5 pt-2.5 pb-1">
                    <HoverImage
                      src={"/images/gameCover.jpg"}
                      alt={item.title}
                      style={"cover"}
                    />
                  </CardContent>
                  <CardFooter className="pb-1 text-sm font-semibold px-1.5">
                    {item.title}
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="top-2/3 hidden md:block" />
          <CarouselNext className="top-2/3 hidden md:block " />
        </Carousel>
      </div>
    </>
  );
}
