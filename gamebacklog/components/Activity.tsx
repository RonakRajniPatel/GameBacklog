import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Activity() {
  return (

    // Carousel Row
    <div className="w-full ml-28">
      <header className="text-4xl font-bold">
        Recent Activity
      </header>
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="w-full max-w-sm"
      >
        
        <CarouselContent className="">
          {Array.from({ length: 12 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
