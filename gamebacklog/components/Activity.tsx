import * as React from "react"

import Image from "next/image"


import { 
  Card, 
  CardContent,
  CardFooter
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Activity() {
  const items = Array(12).fill({
    title: "The Legend of Zelda Breath of the Wild",
    image: "/placeholder.svg?height=300&width=200",
  })

  return (
  <>
     {/* Carousel Row */}
    <div className="w-full">
      <header className="text-4xl font-bold ml-28">
        Recent Activity
      </header>
    </div>
<div className="w-full max-w-6xl mx-auto px-4">
  <Carousel
    opts={{
      align: "start",
      loop: true,
    }}
    className="w-full"
  >
    <CarouselContent className="-ml-2 md:-ml-4">
      {items.map((item, index) => (
        <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/6">
            <Card className="border-none shadow-lg rounded-lg overflow-hidden drop-shadow-xl bg-slate-100 m-1.5">
              <CardContent className="px-2.5 pt-2.5 pb-1">
                <Image
                  src={"/images/gameCover.jpg"}
                  width={1000}
                  height={2000}
                  alt={item.title}
                  className="object-cover w-full h-full rounded"
                />
                </CardContent>
                <CardFooter className="pb-1 text-left">
                  <h2 className="text-sm text-base/4 font-semibold">{item.title}</h2>
                </CardFooter>
            </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious/>
    <CarouselNext/>
  </Carousel>
  </div>
</>
  )
}
