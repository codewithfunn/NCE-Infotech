import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay,Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import styles from './styles.module.scss'
import { Typewriter } from "react-simple-typewriter";
export const BannerWithoutSwiper = ({ data }) => {

    const handleType = (count) => {
      // access word count number
      console.log(count);
    };
  
    const handleDone = () => {
      console.log(`Done after 5 loops!`);
    };
    return (
      <div
        className={styles.__bannerWithoutSwiperConatainer}
        style={{ flexDirection: data?.bannerImage?.reverse ? "row-reverse" : "row" }}
      >
        <div className={styles.contentContainer}>
          {data?.title?.enableTypewriter ? (
            <h1>
              <Typewriter
                words={data?.title?.typewriter?.words}
                loop={data?.title?.typewriter?.loop}
                cursor
                cursorStyle={data?.title?.typewriter?.cursorStyle}
                typeSpeed={data?.title?.typewriter?.typeSpeed}
                deleteSpeed={data?.title?.typewriter?.deleteSpeed}
                delaySpeed={data?.title?.typewriter?.delaySpeed}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </h1>
          ) : (
            <h1>{data?.title?.content}</h1>
          )}
          {data.content.heading && <h2>{data?.content?.heading}</h2>}
          {data?.content?.paragraph.map((item, index) => {
            return item.p ? (
              <p key={index}>
                {" "}
                {item.p} <Link href={item.link.href}>{item.link.content}</Link>
              </p>
            ) : (
              <p key={index}>{item}</p>
            );
          })}
  
          <span className={`${styles.__btn} flex flex-row items-center`}>
            <Link href={data?.button?.link} className="border-2 shadow-sm text-gray-500 border-gray-400 rounded-md ">
              <button>{data?.button?.content}</button>
            </Link>
          </span>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data?.bannerImage?.url} alt={data?.bannerImage?.alt} width={600} height={600} />
        </div>
      </div>
    );
  };
const Index = ({bannerData1, options}) => {
    const bannerData =[
        {
          title: "Better Solutions For Your Business",
          content: "Software Development Company, an Amazing Doorway to Rise Your Business.",
          button:{
            content: "Get In touch",
            link: "/",
          },
          sideImage:{
            url: "/image/Banner/homeBanner-2.png",
            alt: "BannerImg",
          }
        },
        {
          title: "Better Solutions For Your Business",
          content: "Software Development Company, an Amazing Doorway to Rise Your Business.",
          button:{
            content: "Get In touch",
            link: "/",
          },
          sideImage:{
            url: "/image/Banner/homeBanner-2.png",
            alt: "BannerImg",
          }
        },
        {
          title: "Better Solutions For Your Business",
          content: "Software Development Company, an Amazing Doorway to Rise Your Business.",
          button:{
            content: "Get In touch",
            link: "/",
          },
          sideImage:{
            url: "/image/Banner/homeBanner-2.png",
            alt: "BannerImg",
          }
        },
      ]
  return (
    <div className={styles.__bannerContainer}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className={`mySwiper ${styles.__bannerSwiper}`}
      >
        {
          bannerData.map((item,index)=>{
            return (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <div className={styles.__bannerContent}>
               <div>
                    <h2>{item?.title}</h2>
                    <p>{item?.content}</p>
                    <button>
                        <Link href={item?.button?.link}>{item?.button?.content}</Link>
                    </button>
               </div>
               <div>
                <Image src={item?.sideImage?.url} alt={item?.sideImage?.alt} width={500} height={500} />
               </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
};

export default Index;
