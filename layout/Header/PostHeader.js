import Image from "next/image";
import React from "react";
import Logo from "../../public/svg/logo.svg";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const PostHeader = () => {
  const data = {
    heading: {
      logo: <Logo />,
    },
    links: [
      {
        id: 1,
        name: "Home",
        link: "/",
      },
      {
        id: 2,
        name: "About",
        link: "/about",
      },
      {
        id: 3,
        name: "Services",
        link: "/",
        subLinks: [
          {
            id: 1,
            name: "IT Service",
            link: "/",
          },
          {
            id: 2,
            name: "Industries",
            link: "/",
            subLinks: [
              {
                id: 1,
                name: "Platform",
                link: "/",
              },
              {
                id: 2,
                name: "NCE Digital Services",
                link: "/",
              },
              {
                id: 3,
                name: "NCE Security",
                link: "/",
              },
              {
                id: 4,
                name: "Software Solution",
                link: "/",
              },
              {
                id: 5,
                name: "Payroll Solution",
                link: "/",
              },
            ],
          },
          {
            id: 3,
            name: "Website Design",
            link: "/",
          },
          {
            id: 4,
            name: "Device & Assets",
            link: "/",
          },
          {
            id: 5,
            name: "Social Media",
            link: "/",
          },
        ],
      },
      {
        id: 4,
        name: "Resources",
        link: "/resources",
      },
      {
        id: 5,
        name: "Career",
        link: "/career",
      },
      {
        id: 6,
        name: "Contact",
        link: "/contact",
      },
    ],
  };

  const recursiveLink = (data) => {
    return (
      <ul onMouseEnter={() => console.log("hii")}>
        {data?.subLinks?.map((link) => (
          <li key={link?.id}>
            <Link href={link?.link} className="flex flex-row items-center justify-between">
              <span>{link?.name}</span>
              {link.subLinks && <FaChevronRight />}
            </Link>
            {link?.subLinks && recursiveLink(link)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.PostHeader}>
      <div className={styles.PostHeader__logo}>{data?.heading?.logo}</div>
      <ul className={styles.PostHeader__links}>
        {data?.links?.map((link) => (
          <li key={link?.id} className={styles.PostHeader__links__link}>
            <Link
              href={link?.link}
              className={link.subLinks && styles.__hasSubLinks}
            >
              {link?.name}
            </Link>
            {link?.subLinks && (
              <ul onMouseEnter={() => console.log("hii")} >
                {recursiveLink(link)}
              </ul>
            )}
          </li>
        ))}
        <div className={styles.PostHeader__links__button}>
          <button>Get Started</button>
        </div>
      </ul>
    </div>
  );
};

export default PostHeader;
