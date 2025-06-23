import { getSerializedReview, getReviewSlugs } from "@/lib/mdx";
import ReviewClientWrapper from "./client-page"; // ⬅️ Import client wrapper

export async function generateStaticParams() {
  const slugs = getReviewSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, "") }));
}

export default async function ReviewPage({ params }) {
  const { frontMatter, mdxSource } = await getSerializedReview(params.slug);

  const review = {
    frontMatter,
    content: mdxSource,
  };

  return <ReviewClientWrapper review={review} />;
}
