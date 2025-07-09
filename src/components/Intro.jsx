"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-center items-center py-8 lg:py-20 font-light lg:font-thin italic tracking-widest px-8 lg:px-[300px] lg:text-[30px] text-[16px] text-center text-secondary">
      <h1>{t("navbar.experience")}</h1>
    </div>
  );
};

export default Intro;
