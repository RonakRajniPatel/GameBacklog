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
    <div className="w-full max-w-fit mx-auto px-56">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full pb-4"
      >
        <CarouselContent className="">
          {items.map((item, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/6 xl:basis-1/6 2xl:basis-1/6">
                <Card className="border-none shadow-lg rounded-lg overflow-hidden drop-shadow-xl bg-slate-100 m-1.5">
                  <CardContent className="px-2.5 pt-2.5 pb-1">
                    <div className="group relative">
                      <Image
                        src={"/images/gameCover.jpg"}
                        width={500}
                        height={1000}
                        alt={item.title}
                        className="object-cover rounded"
                      />
                      <div className="hidden group-hover:inline absolute top-0 right-0 w-2/5 h-full object-contain">
                        <div className="bg-purple-500 h-1/4 opacity-85">Played</div>
                        <div className="bg-red-500 h-1/4 opacity-85">Drop</div>
                        <div className="bg-green-500 h-1/4 opacity-85">Want</div>
                        <div className="bg-blue-500 h-1/4 opacity-85">Still</div>
                      </div>
                    </div>
                    </CardContent>
                    <CardFooter className="pb-1 text-left">
                        <h2 className="text-sm font-semibold">{item.title}</h2>
                    </CardFooter>
                </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="top-2/3"/>
        <CarouselNext className="top-2/3"/>
      </Carousel>
    </div>
</>
  )
}
