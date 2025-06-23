//src\lib\getReviews.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const reviewsDir = path.join(process.cwd(), "content/reviews");

export function getAllReviews() {
  const files = fs.readdirSync(reviewsDir);

  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(reviewsDir, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents); // Parses frontmatter

    return {
      slug,
      ...data, // title, date, poster, rating, etc.
    };
  });
}
