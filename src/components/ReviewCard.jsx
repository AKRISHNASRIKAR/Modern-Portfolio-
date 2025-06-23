"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function ReviewCard({ review }) {
  return (
    <Link href={`/reviews/${review.slug}`} className="w-full">
      <Card className="rounded-2xl mb-4 overflow-hidden bg-[#010409] text-white shadow-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 ease-in-out group w-full cursor-pointer">
        <CardHeader className="p-0 relative h-56">
          <Image
            src={review.poster || "/placeholder.svg"}
            alt={`${review.title} Poster`}
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent"></div>
        </CardHeader>

        <CardContent className="p-4 relative z-20 -mt-10">
          <CardTitle className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
            {review.title}
          </CardTitle>
          <CardDescription className="mt-1 text-sm text-gray-300">
            {review.description || "A short overview of the film."}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex justify-between items-center px-4 pt-0 pb-4 text-sm text-gray-400">
          <span>Rating: ⭐{review.rating}/10</span>
          <span>
            {new Date(review.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
