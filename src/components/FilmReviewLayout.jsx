"use client";
import Image from "next/image";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote";

export default function FilmReviewLayout({ frontMatter, mdxSource }) {
  const { title, date, author, poster, rating } = frontMatter;

  return (
    <article className="relative text-white">
      <div className="relative p-2 h-[30vh] md:h-[60vh] w-full overflow-hidden">
        <Image src={poster} alt={title} fill className="object-cover" />
        <div className="absolute bottom-1 left-10">
          <h1 className="text-2xl md:text-4xl font-extrabold">{title}</h1>
          <p className="text-sm mt-2">
            By {author} • {format(new Date(date), "dd MMM yyyy")}
          </p>
          <p className="mt-1 font-semibold text-yellow-300">★ {rating}/10</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 md:px-2 md:py-4">
        <MDXRemote {...mdxSource} />
      </div>
    </article>
  );
}
