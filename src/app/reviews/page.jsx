// src/app/reviews/page.jsx
import Link from "next/link";
import { getReviewSlugs } from "@/lib/mdx";
import LetterboxdProfile from "./letterboxdProfile";
import { Separator } from "@/components/ui/separator";
import { reviews } from "@/data/reviewData";
import ReviewCard from "@/components/ReviewCard";
import Footer from "@/components/Footer";

export default function ReviewsListPage() {
  const mdxReviews = getReviewSlugs();

  return (
    <main className="p-8 pb-16">
      <div>
        <LetterboxdProfile />
      </div>
      <Separator className="my-10 bg-slate-800" />
      <h1 className="text-3xl font-bold mb-4">Film Reviews</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.slug} review={review} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
