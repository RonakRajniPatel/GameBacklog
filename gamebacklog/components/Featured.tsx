import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import * as React from "react"

import Image from "next/image"

export function Featured() {
  const items = Array(12).fill({
    title: "The Legend of Zelda: Breath of the Wild",
    image: "/placeholder.svg?height=300&width=200",
  })
  return (
    <Carousel className="w-full max-w-6xl mx-auto pb-10"
    
      opts={{
        align: "start",
        loop: true,
    }}>
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-rectangle items-center justify-center p-3 pt-5">
                  <div className="w-full h-full flex flex-row">
                    <div className="group relative w-3/5">
                      <Image
                        src={"/images/featured.jpg"}
                        width={1920}
                        height={1080}
                        alt={item.title}
                        className="object-cover rounded"
                      />
                      <div className="hidden group-hover:inline absolute top-0 right-0 w-1/5 h-full object-contain">
                        <div className="bg-purple-500 h-1/4 opacity-85">Played</div>
                        <div className="bg-red-500 h-1/4 opacity-85">Drop</div>
                        <div className="bg-green-500 h-1/4 opacity-85">Want</div>
                        <div className="bg-blue-500 h-1/4 opacity-85">Still</div>
                      </div>
                    </div>
                    <div className="flex w-2/5 place-content-center p-2 pt-3 text-center font-sans font-semibold">
                      <div>
                          <h1 className="text-4xl">
                            The Legend of Zelda: Breath of the Wild
                          </h1>
                          <h3 className="font-normal text-2xl pt-20">
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
