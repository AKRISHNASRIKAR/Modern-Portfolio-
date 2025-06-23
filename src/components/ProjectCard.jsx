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

export default function ProjectCard({ project }) {
  return (
    <Card className="rounded-2xl mb-4 overflow-hidden bg-[#010409] text-white shadow-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 ease-in-out group w-full cursor-pointer">
      <CardHeader className="p-0 relative h-56">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        {/* Subtle gradient overlay for slickness */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent"></div>
      </CardHeader>

      <CardContent className="p-4 relative z-20 -mt-10">
        <CardTitle className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="mt-1 text-sm text-gray-300">
          {project.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex gap-4 p-4 pt-0">
        {project.stack.map((iconPath, i) => (
          <Image
            key={i}
            src={iconPath || "/placeholder.svg"}
            alt="Tech stack icon"
            width={28}
            height={28}
            className="opacity-80 group-hover:opacity-100 transition-opacity"
          />
        ))}
      </CardFooter>
    </Card>
  );
}
