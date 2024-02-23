import React from 'react'
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
const Index = ({frontMatter, mdxSource}) => {
  return (
    <div>
        <MDXRemote {...mdxSource} />
    </div>
  )
}

export default Index
export async function getServerSideProps() {
    const filePath = path.join("./mdxData/ourPolicy", "copyrightNotice" + ".mdx");
  
    const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
  
    const { data: frontMatter, content } = await matter(markdownWithMeta);
    const mdxSource = await serialize(content);
    return {
      props: {
        frontMatter: frontMatter,
        mdxSource: mdxSource,
      },
    };
  }