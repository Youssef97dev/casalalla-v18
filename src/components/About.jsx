"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const About = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll);
    const imageElement = document.querySelector("#about-image");

    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);
  return (
    <div
      id="about"
      className="w-full h-full lg:h-screen flex md:flex-row-reverse flex-col py-2 px-8 gap-3"
    >
      <div className="relative w-full">
        <Image
          id="about-image"
          src="/images/about-large.jpg"
          height={1000}
          width={1000}
          alt="casa lalla takerkoust, agafay marrakech, agafay restaurant, lalla takerkoust restaurant"
          priority
          className={`object-cover w-full h-full rounded-md md:block hidden`}
        />
        <Image
          id="about-image"
          src="/images/about-small.jpg"
          height={1000}
          width={1000}
          alt="casa lalla takerkoust, agafay marrakech, agafay restaurant, lalla takerkoust restaurant"
          priority
          className={`object-cover w-full h-full rounded-md md:hidden block`}
        />
        {/* Filter */}
      </div>
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-start gap-1 lg:p-20 p-4 text-primary">
          <h1 className="text-[20px] lg:text-[26px] leading-[28px] tracking-[2px] font-light mb-5 text-secondary text-justify">
            {t("about.title")}
          </h1>
          <p className="text-[14px] lg:text-[16px] font-light italic tracking-wider leading-[28px]  text-justify py-1">
            {t("about.content_1")}
          </p>
          <p className="text-[14px] lg:text-[16px] font-light italic tracking-wider leading-[28px]  text-justify py-1">
            {t("about.content_2")}
          </p>
          <p className="text-[14px] lg:text-[16px] font-light italic tracking-wider leading-[28px]  text-justify py-1">
            {t("about.content_3")}
          </p>
          <p className="text-[14px] lg:text-[16px] font-light italic tracking-wider leading-[28px]  text-left py-1">
            {t("about.content_4")}
          </p>
          <Link
            href="/booking"
            className="w-full text-center mt-2 py-2 px-8 uppercase tracking-widest border border-primary text-primary rounded-lg text-[12px] leading-[34px] hover:bg-secondary hover:text-white duration-200 transition-all ease-out"
          >
            {t("about.button_book")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
