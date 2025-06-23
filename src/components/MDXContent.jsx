// src/components/MDXContent.jsx
"use client";
import { MDXRemote } from "next-mdx-remote";

export default function MDXContent({ code }) {
  return <MDXRemote {...code} />;
}
