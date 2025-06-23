// File: components/ClientReviewPage.jsx
"use client";

import dynamic from "next/dynamic";

const FilmReviewLayout = dynamic(
  () => import("@/components/FilmReviewLayout"),
  {
    ssr: false,
  }
);
const MDXContent = dynamic(() => import("@/components/MDXContent"), {
  ssr: false,
});

export default function ClientReviewPage({ review }) {
  return (
    <FilmReviewLayout {...review}>
      <MDXContent source={review.content} />
    </FilmReviewLayout>
  );
}
