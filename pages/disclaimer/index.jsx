import { BannerWithoutSwiper } from "@/components/Banner";
import React from "react";
import styles from "@/styles/disclaimer.module.scss";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import LinksLayout from '@/layout/LinksLayout'
const Index = ({ frontMatter, mdxSource }) => {
  console.log(frontMatter,mdxSource)
  const data = {
    title: {
      enableTypewriter: true,
      typewriter: {
        words: ["DISCLAIMER FOR NCE Infotech"],
        loop: true,
        cursorStyle: "!",
        typeSpeed: 110,
        deleteSpeed: 80,
        delaySpeed: 1000,
      },
      content: "",
    },
    content: {
      paragraph: [
        'By accessing and using the nceinfotech.com website (the "Website"), operated by NCE .',
        'INFOTECH Private Limited ("we," "us," or "our"), you agree to comply with and be bound by the following disclaimer. If you do not agree with this disclaimer, please refrain from using our services.',
      ],
    },
    bannerImage: {
      url: "/image/banner/disclaimer.png",
      alt: "disclaimer",
      reverse: false,
    },
    button: {
      content: "Contact Us",
      link: "/",
    },
  };
  return (
    <div>
      <div className={styles.__banner}>
        <BannerWithoutSwiper data={data} />
      </div>
      <LinksLayout>
      <MDXRemote {...mdxSource} />
      </LinksLayout>
    </div>
  );
};
export async function getServerSideProps() {
  const filePath = path.join("./MDX/Links", "copyright_notice" + ".mdx");

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
export default Index;
