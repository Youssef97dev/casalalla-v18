import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Buttons = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-between gap-3 items-center px-5">
      <Link
        href="https://casalalla-carte.vercel.app/"
        target="_blank"
        className="w-full rounded-lg bg-white hover:bg-secondary hover:text-white py-2 text-center shadow-md text-[12px]"
      >
        {t("navbar.cart")}
      </Link>
      <Link
        href="/booking"
        className="w-full rounded-lg bg-secondary hover:bg-primary text-white py-2 text-center shadow-md text-[12px]"
      >
        {t("navbar.reservation")}
      </Link>
    </div>
  );
};

export default Buttons;
