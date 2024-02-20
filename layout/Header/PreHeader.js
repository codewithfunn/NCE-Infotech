import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import styles from "./styles.module.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const Ads = () => {
  return <div className="ads"></div>;
};
const PreHeader = () => {
  const data = {
    contactInfo: [
      {
        id: 1,
        icon: <FaPhoneAlt />,
        content: {
          link: "tel:+91-9429693092",
          value: "+91-9429693092",
        },
      },
      {
        id: 2,
        icon: <IoMail />,
        content: {
          link: "mailto:info@inc-infotech.com",
          value: "info@inc-infotech.com",
        },
      },
      {
        id: 3,
        icon: <FaLocationDot />,
        content: {
          link: "https://www.google.com/maps?q=28.508307,77.08147",
          value: "6th Floor, Enkay Tower Udyog Vihar Gurugram",
        },
      },
    ],
    socials: [
      {
        id: 1,
        icon: <FaFacebookF />,
        content: {
          link: "facebook.com/inc-infotech",
          value: "facebook.com",
        },
      },
      {
        id: 2,
        icon: <FaInstagram />,
        content: {
          link: "facebook.com/inc-infotech",
          value: "instagram",
        },
      },
      {
        id: 3,
        icon: <FaXTwitter />,
        content: {
          link: "twitter.com/inc-infotech",
          value: "twitter",
        },
      },
      {
        id: 4,
        icon: <FaLinkedinIn />,
        content: {
          link: "linkedin.com/inc-infotech",
          value: "linkedin",
        },
      },
    ],
  };
  return (
    <div className={styles.PreHeader}>
      <div className={styles.PreHeader__contactInfo__Container}>
        {data?.contactInfo?.map((item) => {
          return (
            <div className={styles.PreHeader__contactInfo} key={item.id}>
              <div className={styles.PreHeader__contactInfo__icon}>
                {item.icon}
              </div>
              <div className={styles.PreHeader__contactInfo__content}>
                <a href={item?.content?.link}>{item?.content?.value}</a>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.PreHeader__socials__Container}>
        {data?.socials?.map((item) => {
          return (
            <div className={styles.PreHeader__socials} key={item.id}>
              <div className={styles.PreHeader__socials__content}>
                <a href={item?.content?.link}>{item.icon}</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PreHeader;
