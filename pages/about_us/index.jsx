import React from "react";
// Styles
import styles from "@/styles/aboutUs.module.scss";
// Components
import { BannerWithoutSwiper } from "@/components/Banner";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import LinksLayout from '@/layout/LinksLayout'
import { serialize } from "next-mdx-remote/serialize";
import { MdOutlineLocalOffer } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const index = ({frontMatter, mdxSource}) => {
  const data = {
    title: {
      enableTypewriter: true,
      typewriter: {
        words: ["About Us"],
        loop: true,
        cursorStyle: "|",
        typeSpeed: 110,
        deleteSpeed: 80,
        delaySpeed: 1000,
      },
      content: "",
    },
    content: {
      paragraph: [
        "Welcome to NCE Infotech, where passion meets expertise in Salesforce solutions!",
        "We are a dynamic team comprising Salesforce consultants, architects, developers, and testers. Our collective expertise is rooted in Salesforce.com implementation, customization, and integration, spanning the entire development and implementation life cycle.",
        "Our team comprises experienced Salesforce consultants, architects, developers, and testers, each bringing their own unique skills and expertise to the table. Together, we share a common goal: to empower businesses with innovative, efficient, and scalable Salesforce solutions that drive growth, enhance productivity, and maximize ROI.",
      ],
    },
    bannerImage: {
      url: "/image/Banner/about_us.png",
      alt: "AboutBannerImg",
    },
    button: {
      content: "Contact Us",
      link: "/",
    },
  };
  return (
    <div className={styles.__container}>
      <div className={`${styles.__banner} ${styles.max_width_1280}`}>
        <BannerWithoutSwiper data={data} />
      </div>
      <LinksLayout>
      <MDXRemote {...mdxSource} />
      </LinksLayout>
    </div>
  );
};
export async function getServerSideProps() {
  const filePath = path.join("./MDX/Links", "about_us" + ".mdx");

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
export default index;
