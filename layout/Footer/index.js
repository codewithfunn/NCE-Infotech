// import Components
import Copyright from "./Copyright";
import Links from "./Links";
import NewsLetter from "./NewsLetter";
import LegalInformation from "./LegalInformation";
import Socials from "./Socials";
// import Styles
import styles from "./styles.module.scss";
// import Icons
import { VscChevronRight } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitterX, BsPinterest } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

export const Divider = () => {
  return (
    <div className={styles.footer__divider}>
      <hr />
    </div>
  );
};
export default function Footer({ country }) {
  const legalInformation = [
    {
      name: "Privacy Policy",
      link: "/privacy_policy",
    },
    {
      name: "Terms & Conditions",

      link: "/terms_and_conditions",
    },
    {
      name: "Terms Of Use",

      link: "/term_of_use",
    },
    {
      name: "Copyright Notice",
      link: "/copyright_notice",
    },
  ];
  const links = [
    {
      heading: "Engage With Us",
      links: [
        {
          name: "About us",
          icon: <VscChevronRight />,
          link: "/about_us",
        },
        {
          name: "Contact us",
          icon: <VscChevronRight />,
          link: "/contact_us",
        },
        {
          name: "Disclaimer",
          icon: <VscChevronRight />,
          link: "/disclaimer",
        },
        {
          name: "Pricing",
          icon: <VscChevronRight />,
          link: "/pricing",
        },
      ],
    },
    {
      heading: "Our Services",
      links: [
        {
          name:"IT Service",
          icon: <VscChevronRight />,
          link: "/it_services",
        },
        {
          name: "Career",
          icon: <VscChevronRight />,
          link: "/career",
        },
        {
          name: "Software Solution",
          icon: <VscChevronRight />,
          link: "/software_solution",
        },
        {
          name: "Website Design",
          icon: <VscChevronRight />,
          link: "/website_design",
        },
        {
          name: "Security Services",
          icon: <VscChevronRight />,
          link: "/security_services",
        },
      ],
    },
    {
      heading: "Customer Support",
      links: [
        {
          name: "Product & Services",
          icon: <VscChevronRight />,
          link: "/product_and_services",
        },
        {
          name: "Promotional Offers",
          icon: <VscChevronRight />,
          link: "/promotional_offers",
        },
        {
          name: "FAQ",
          icon: <VscChevronRight />,
          link: "/faq",
        },
        {
          name: "Blogs",
          icon: <VscChevronRight />,
          link: "/blogs",
        },
      ],
    },
  ];
  const socials = [
    {
      name: "Facebook",
      link: "/",
      icon: <FaFacebookF />,
      hover_color: "#4267B2",
    },
    {
      name: "Instagram",
      link: "/",
      icon: <BsInstagram />,
      hover_color: "#E1306C",
    },
    {
      name: "Twitter",
      link: "/",
      icon: <BsTwitterX />,
      hover_color: "#1DA1F2",
    },
    {
      name: "LinkedIn",
      link: "/",
      icon: <BiLogoLinkedin />,
      hover_color: "#0077B5",
    },
    {
      name: "Pinterest",
      link: "/",
      icon: <BsPinterest />,
      hover_color: "#BD081C",
    },
  ];
  return (
    <>
      <footer className={styles.footer}>
        <div className={`${styles.footer__container} ${styles.max_width_1280}`}>
          <Links links={links} />
          <NewsLetter />
          <Socials socials={socials} />
          <Divider />
          <Copyright country={country} />
          <LegalInformation legalInformation={legalInformation} />
        </div>
      </footer>
    </>
  );
}
