// src/lib/mdx.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const reviewsDirectory = path.join(process.cwd(), "content/reviews");

export function getReviewSlugs() {
  return fs
    .readdirSync(reviewsDirectory)
    .filter((file) => file.endsWith(".mdx"));
}

export function getReviewBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(reviewsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontMatter: data,
    content,
  };
}

export async function getSerializedReview(slug) {
  const { frontMatter, content } = getReviewBySlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    },
    parseFrontmatter: false,
  });

  return {
    frontMatter,
    mdxSource,
  };
}
