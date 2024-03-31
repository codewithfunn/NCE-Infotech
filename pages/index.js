import Image from "next/image";
import Banner from "@/components/Banner";
import styles from "@/styles/home.module.scss";
import Link from "next/link";
import { IoCheckmarkDone } from "react-icons/io5";
import { GiMeshBall } from "react-icons/gi";
import { useRouter } from "next/router";
export const AboutUs = () => {
  const data = {
    heading: "ABOUT US",
    content: {
      heading:
        "Work with a software company that develops products & platforms that elevate your customers’ experience, earn their loyalty & grow your business.",
      links: [
        {
          icon: <IoCheckmarkDone />,
          content: "Experience Design",
        },
        {
          icon: <IoCheckmarkDone />,
          content: "Ecommerce Development",
        },
        {
          icon: <IoCheckmarkDone />,
          content: "Digital Experience Platform",
        },
        {
          icon: <IoCheckmarkDone />,
          content: "Data Analytics",
        },
        {
          icon: <IoCheckmarkDone />,
          content: "Digital Transformation",
        },
      ],
    },
  };
  return (
    <div className={styles.about__us}>
      <div className={styles.about__us__heading}>
        <h2>{data?.heading}</h2>
      </div>
      <div className={styles.about__us__content}>
        <div className={styles.about__us__content__text}>
          <p>{data?.content?.heading}</p>
          <ul>
            {data?.content?.links?.map((item, index) => (
              <li key={index}>
                <span>{item?.icon}</span>
                <span>{item?.content}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.about__us__content__btnContainer}>
          <span>Software, App,and Website Development Agency Services</span>
          <button>
            <Link href={"/"}>Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export const TransformativePlatform = () => {
  const data = {
    heading: "Expand & Evolve Your Business With Our Transformative Platforms",
    subheading:
      "Here, NCE Infotech comes to the picture with a confidence of leading you to success! We provide range of services starting from Website Designing Services and Website Development Services including with Ecommerce Solutions, SEO, Open Source Development, iPhone Development, PHP MYSQL Development to make sure that we place you in the prime position.",
    img: {
      url: "/image/Banner/homeBanner-1.png",
      alt: "Transformative_img",
    },
  };
  return (
    <div className={styles.TransformativePlatform__container}>
      <div className={styles.TransformativePlatform}>
        <div className={styles.TransformativePlatform__content}>
          <h2>{data?.heading}</h2>
          <p>{data?.subheading}</p>
        </div>
        <div className={styles.TransformativePlatform__img}>
          <Image
            src={data.img.url}
            alt={data.img.alt}
            width={500}
            height={500}
          />
        </div>
      </div>
      <OurOffers />
    </div>
  );
};
export const OurOffers = () => {
  const router = useRouter();
  const data = {
    heading: "WHAT WE OFFER",
    subheading:
      "We are a dedicated team of software professionals with expertise in delivering a wide range of services, including Software Solutions, IT Support, Web Development, Design and Digital Marketing. Our primary objective is to leverage state-of-the-art technologies to foster the growth and success of present and future business goals.",
    cards: [
      {
        content: {
          heading: "Full Stack Development",
          subheading:
            "We have amassed unmatched expertise dealing with both front-end and back-end technologies for full-stack development.",
          icon: <GiMeshBall />,
        },
        link: "/",
      },
      {
        content: {
          heading: "Mobile App Development",
          subheading:
            "We build superior mobile apps or revamp your existing mobile application with customizable project modifications.",
          icon: <GiMeshBall />,
        },
        link: "/",
      },
      {
        content: {
          heading: "Web Application Development",
          subheading:
            "Our web design and development company provides top-tier web design services aimed at enhancing our clients' online visibility.",
          icon: <GiMeshBall />,
        },
        link: "/",
      },
      {
        content: {
          heading: "Product Development",
          subheading:
            "Develop your custom digital product and unique business offering with our robust and reliable Product development services.",
          icon: <GiMeshBall />,
        },
        link: "/",
      },
      {
        content: {
          heading: "ERP Solution",
          subheading:
            "Enterprise Resource Planning (ERP) is a software system that integrates and manages core business processes, such as finance, supply chain, operations, reporting, manufacturing, CRM, and human resource activities, within a single unified platform.",
          icon: <GiMeshBall />,
        },
        link: "/",
      },
      {
        content: {
          heading: "SALESFORCE IMPLEMENTATION ",
          subheading:
            "The best-in-class Salesforce customization and implementation services can help businesses gain a tactical advantage.",
          icon: <GiMeshBall />,
        },
        link: "/",
      },
      {
        content: {
          heading: "Cloud ERP IMPLEMENTATION ",
          subheading:
            "Automate Sales, Manufacturing, and Inventory in One App.  The best-in-class CRM customization and implementation services can help businesses gain a tactical advantage. ",
          icon: <GiMeshBall />,
        },
        link: "/",
      },
      {
        content: {
          heading: "ERP Solution",
          subheading:
            "Enterprise Resource Planning (ERP) is a software system that integrates and manages core business processes, such as finance, supply chain, operations, reporting, manufacturing, CRM, and human resource activities, within a single unified platform.",
          icon: <GiMeshBall />,
        },
        link: "/",
      },
    ],
  };
  return (
    <div className={styles.ourOffers}>
      <div className={styles.ourOffers__heading}>
        <h2>{data?.heading}</h2>
        <p>{data?.subheading}</p>
      </div>
      <ul className={styles.ourOffers__cards}>
        {data?.cards?.map((item, index) => (
          <li key={index} className="shadow-md hover:shadow-2xl cursor-pointer " onClick={() => router.push(item?.link)}>
            <i className={styles.ourOffers__cards__icon}>{item?.content?.icon}</i>
            <h3 className={styles.ourOffers__cards__heading}>{item?.content?.heading}</h3>
            <p className={styles.ourOffers__cards__subheading}>{item?.content?.subheading.substring(0,150)+"..."}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export const CallToAction = () => {
  const data = {
    heading: "Call To Action",
    subheading: "Got a Software or App Development Project in Mind?",
    button: {
      content: "Get Started Now",
      link: "/",
    }
  };
  return (
    <div className={styles.callToActionContainer}>
    <div className={styles.callToAction}>
      <div className={styles.callToAction__heading}>
        <h2>{data?.heading}</h2>
        <p>{data?.subheading}</p>
      </div>
      <div className={styles.callToAction__button}>
        <Link href={data?.button?.link}>{data?.button?.content}</Link>
      </div>
    </div>
    </div>
  );
}
export default function Home() {
  const bannerData = [
    {
      title: "Better Solutions For Your Business",
      content:
        "Software Development Company, an Amazing Doorway to Rise Your Business.",
      button: {
        content: "Get In touch",
        link: "/",
      },
      sideImage: {
        url: "/image/Banner/homeBanner-2.png",
        alt: "BannerImg",
      },
    },
    {
      title: "Better Solutions For Your Business",
      content:
        "Software Development Company, an Amazing Doorway to Rise Your Business.",
      button: {
        content: "Get In touch",
        link: "/",
      },
      sideImage: {
        url: "/image/Banner/homeBanner-2.png",
        alt: "BannerImg",
      },
    },
    {
      title: "Better Solutions For Your Business",
      content:
        "Software Development Company, an Amazing Doorway to Rise Your Business.",
      button: {
        content: "Get In touch",
        link: "/",
      },
      sideImage: {
        url: "/image/Banner/homeBanner-2.png",
        alt: "BannerImg",
      },
    },
  ];
  return (
    <div className={`${styles.max_width_1280} ${styles.home__container}`}>
      <Banner
        bannerData={bannerData}
        options={[
          { title: true },
          { content: true },
          { button: true },
          { sideImage: true },
        ]}
      />
      <AboutUs />
      <TransformativePlatform />
      <CallToAction/>
    </div>
  );
}
