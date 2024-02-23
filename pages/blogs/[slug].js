import React from "react";
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { marked } from "marked";

// import marked from "marked";
import Head from "next/head";
const postPage = (
    // { content, frontmatter: { title, date, cover_image, excerpt, keyword, description }, dataPosts }
    ) => {

  return (
    <>
      <Head>
        {/* <html lang="en" /> */}
        <title>Blog | NCE Infotech - Best IT Solutions</title>
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/favicon_io/favicon.ico" />
        <meta name="Author" content="https://nceinfotech.com/" />
        <meta name="copyright" content="All Rights Reserved by NCE Infotech" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="english" />
      </Head>
      {/* <div className="blogPostBody">
        <div className={`blog-card-page`}>
          <div className="blog-post-heading">
            <h1 className={`blog-post-title`}>{title}</h1>
            <div className={`blog-post-date`}>Posted on {date}</div>
          </div>
          <img src={cover_image} alt="" className="blog-cover-img" />
          <div className="flex-div">
            <div className={`blog-post-body`}>
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
            <div className="PopularBlogList">
              <div className="PopularBlogHeading">
                <h2>Popular Blogs</h2>
                <h3>More Blogs</h3>
              </div>
              <div className="popularBlogPost">
                {dataPosts.map((post, index) => (
                  <div key={index}>
                    <PopularBlog data={post} key={index} title={pageTitle} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>hii</div>
    </>
  );
};
// export async function getStaticPaths() {
//   const files = fs.readdirSync(path.join("blogPost"));
//   // console.log(files)
//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename.replace(".md", ""),
//     },
//   }));
//   // console.log(paths)
//   return {
//     paths,
//     fallback: false,
//   };
// }
// export async function getStaticProps({ params: { slug } }) {
//   // console.log(slug)
//   // Get files from the blogPost dir
//   const files = fs.readdirSync(path.join("blogPost"));
//   // console.log(files)
//   const dataPosts = files.map((filename) => {
//     // Create slug
//     const slug = filename.replace(".md", "");

//     // Get frontMatter
//     const markdownWithMeta = fs.readFileSync(path.join("blogPost", filename), "utf-8");
//     // console.log(markdownWithMeta)

//     const { data: frontmatter } = matter(markdownWithMeta);

//     return {
//       frontmatter,
//       slug,
//     };
//   });
//   // console.log(dataPosts)
//   const markdownWithMeta = fs.readFileSync(path.join("blogPost", slug + ".md"), "utf-8");
//   const { data: frontmatter, content } = matter(markdownWithMeta);
//   return {
//     props: {
//       frontmatter,
//       content,
//       slug,
//       dataPosts,
//     },
//   };
// }
export default postPage;
