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
    <div className="w-full md:max-w-fit md:mx-auto md:px-32">
      <Carousel
        className="w-full mx-auto pb-10"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="">
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardTitle className="md:hidden text-lg font-semibold text-center flex items-center justify-center h-full pt-2">
                    {item.title}
                  </CardTitle>
                  <CardContent className="flex aspect-rectangle items-center justify-center p-3 pt-1 md:pt-5">
                    <div className="w-full h-full flex flex-row">
                      <HoverImage
                        src={"/images/featured.jpg"}
                        alt={item.title}
                        style={"featured"}
                      />
                      <div className="hidden md:flex  w-2/5 place-content-center p-2 pt-3 text-center font-sans font-semibold">
                        <div>
                          <h1 className="text-2xl lg:text-4xl">
                            The Legend of Zelda: Breath of the Wild
                          </h1>
                          <h3 className="hidden xl:block font-normal text-2xl pt-20">
                            Publisher: Nintendo <br />
                            Developer: Nintendo EDP <br />
                            Release Date: 03/27/2017 <br />
                            User Ratings: 9.3 <br />
                          </h3>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </div>
  );
}
