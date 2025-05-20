"use client";

import React from "react";
import Image from "next/image";
import HoverImage from "./ui/hoverimage";
import { Button } from "./ui/button";
import { MdModeEdit } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function TrackedGame(props: any) {
  const { review } = props;
  const game = {
    title: review.game.name,
    platform: "Nintendo Switch",
    status: review.status,
    hours: review.hours,
    ratings: review.ratings,
    date_played: review.datefinished.slice(0, 10),
    review: review.review,
  };

  // define your form
  const formSchema = z.object({
    status: z.string(),
    review: z.string(),
    hours: z.number(),
    rating: z.number(),
    platform: z.string(),
  });

  // create form with default values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: game.status ?? "", // ToggleGroup → string
      review: game.review ?? "",
      hours: game.hours ?? 0,
      rating: game.ratings ?? 0,
      platform: game.platform ?? "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const payload = {
      reviewId: {
        gameid: review.reviewId.gameId,
        appuserid: review.reviewId.appUserId,
      },
      review: values.review,
      ratings: values.rating,
      hours: values.hours,
      datestarted: "2022-01-01T05:00:00.000+00:00",
      datefinished: "2022-02-01T05:00:00.000+00:00",
      status: values.status,
      game: {
        gameid: review.reviewId.gameId,
      },
    };
    try {
      console.log("Payload:", JSON.stringify(payload));
      const response = await fetch("http://localhost:8080/review/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.text();
      console.log("Successfully posted:", data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
    // No need to manually close the drawer, handled by DrawerClose on submit button
  }

  const [overflowLength, setOverflowLength] = React.useState(650);

  // handles form input validation

  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggleExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };
  const shown_review = isExpanded
    ? game.review
    : game.review.slice(0, overflowLength);

  return (
    <Drawer>
      <div
        className={`flex h-auto max-h-44 w-full flex-row rounded-lg bg-gray-200 pb-4 md:max-h-96 md:pb-0`}
      >
        <div className={`flex h-full w-3/12 flex-row bg-yellow-500 md:w-1/6`}>
          <Image
            src={"/images/gameCover.jpg"}
            width={1000}
            height={1363}
            alt={game.title}
            className="rounded object-scale-down p-3 pb-0 md:hidden"
          />
          <div className="p-6 pb-0">
            <HoverImage
              src={"/images/gameCover.jpg"}
              alt={game.title}
              style="cover"
            />
          </div>
        </div>
        <div className="flex h-full w-9/12 flex-col bg-red-500 p-4 md:w-5/6">
          <DrawerTrigger className="place-self-end">
            <MdModeEdit />
          </DrawerTrigger>
          <div className="flex h-full w-full flex-col bg-blue-500 md:hidden">
            <h1 className="flex overflow-hidden text-xl font-semibold">
              {game.title}
            </h1>
            <div className="mt-auto flex w-full flex-row justify-between bg-purple-500 pt-2 text-sm font-thin leading-tight">
              <h3 className="text-md flex flex-row bg-green-500 font-semibold leading-tight">
                Rating: {game.ratings}
              </h3>
              <h3 className="text-md flex flex-row bg-pink-500 font-semibold leading-tight">
                Status: {game.status}
              </h3>
            </div>
          </div>
          <div
            className={`hidden ${isExpanded ? "h-fit" : "h-2/5"} flex-row bg-blue-500 md:flex`}
          >
            <div className="w-7/12 overflow-hidden">
              <h1 className="flex flex-col pr-20 text-4xl font-medium">
                {game.title}
              </h1>
            </div>
            <div className="flex w-5/12 flex-col pt-2 text-lg font-thin leading-tight">
              <h3>Status: {game.status}</h3>
              <h3>Hours Played: {game.hours}</h3>
              <h3>Ratings: {game.ratings}</h3>
              <h3>Date Played: {game.date_played}</h3>
              <h3>Platform: {game.platform}</h3>
            </div>
          </div>
          <div className="hidden h-3/5 w-full overflow-hidden object-top pt-5 text-lg font-normal md:block">
            <h3 className="bg-purple-500">
              {shown_review}
              {game.review.length < overflowLength || isExpanded ? "" : "..."}
              <Button
                variant="link"
                onClick={toggleExpansion}
                className={`text-lg font-normal ${game.review.length < overflowLength ? "hidden" : ""}`}
              >
                {isExpanded ? "Show Less" : "Show More"}
              </Button>
            </h3>
          </div>
        </div>
      </div>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{game.title}</DrawerTitle>
          <DrawerDescription>Edit Review</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ToggleGroup
                        type="single"
                        className="place-self-start"
                        value={field.value?.toString()}
                        onValueChange={(val) => field.onChange(val)}
                      >
                        <FormLabel htmlFor="status">
                          <b>Status</b>
                        </FormLabel>
                        <ToggleGroupItem value="Played">Played</ToggleGroupItem>

                        <ToggleGroupItem value="Drop">Drop</ToggleGroupItem>

                        <ToggleGroupItem value="Want to Play">
                          Want to Play
                        </ToggleGroupItem>

                        <ToggleGroupItem value="Playing">
                          Playing
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="review"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="review">Review</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Type your review here."
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="hours">Hours</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        placeholder="Input hours here."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="rating">Rating</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        placeholder="Input rating here."
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="platform"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="platform">Platform</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Platform" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Switch">Switch</SelectItem>
                        <SelectItem value="Wii-U">Wii-U</SelectItem>
                        <SelectItem value="Emulation">Emulation</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DrawerClose asChild>
                <Button type="submit">Submit</Button>
              </DrawerClose>
            </form>
          </Form>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
