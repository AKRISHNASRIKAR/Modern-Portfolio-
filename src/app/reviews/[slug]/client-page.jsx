"use client";

import dynamic from "next/dynamic";

// Lazy load the layout and MDX
const FilmReviewLayout = dynamic(
  () => import("@/components/FilmReviewLayout"),
  {
    ssr: false,
  }
);
const MDXContent = dynamic(() => import("@/components/MDXContent"), {
  ssr: false,
});

export default function ReviewClientWrapper({ review }) {
  return (
    <FilmReviewLayout
      frontMatter={review.frontMatter}
      mdxSource={review.content}
    />
  );
}
