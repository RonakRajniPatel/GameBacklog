import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import * as React from "react";

import Image from "next/image";
import HoverImage from "./ui/hoverimage";

export function Featured() {
  const items = Array(12).fill({
    title: "The Legend of Zelda: Breath of the Wild",
    image: "/placeholder.svg?height=300&width=200",
  });
  return (
    <div className="w-full md:mx-auto md:max-w-fit md:px-32">
      <Carousel
        className="mx-auto w-full pb-10"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="">
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-blue-500">
                  <CardTitle className="flex h-full items-center justify-center pt-2 text-center text-lg font-semibold">
                    {item.title}
                  </CardTitle>
                  <CardContent className="aspect-rectangle flex items-center justify-center p-3 pt-1 md:pt-5">
                    <div className="flex h-full w-full flex-row">
                      <HoverImage
                        src={"/images/featured.jpg"}
                        alt={item.title}
                        style={"featured"}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div>
          <CarouselPrevious className="hidden md:block" />
        </div>
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </div>
  );
}
