import React from "react";
import GithubCal from "./GithubCal";
import { Separator } from "@radix-ui/react-separator";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="bg-[#010409] text-white min-h-screen flex flex-col">
      <GithubCal />

      <Separator className="my-5 h-[1px] w-[80%] bg-white mx-auto" />

      <main className="flex-1 p-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Projects</h1>
          <p className="text-gray-400 mb-6">
            Here are some of the projects I have worked on.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectCard project={project} />
              </a>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default page;
