"use client";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);

  return (
    <nav
      className={`absolute z-50 w-full transition-colors duration-300 py-1 bg-transparent text-white`}
    >
      <div className="w-full flex justify-between items-center mx-auto px-5 lg:px-14">
        <div className="w-full flex justify-start items-center gap-10">
          <div
            className={`pb-1 cursor-pointer text-white`}
            onClick={() => setIsOpen(true)}
          >
            <IoIosMenu size={25} />
          </div>
          <div
            className="relative hidden lg:block"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <button
              className={`font-light tracking-widest flex justify-center items-center gap-2 pb-1 text-white`}
            >
              <span>{t("navbar.lang")}</span>
              <div className="">
                <RiArrowDownSLine size={18} />
              </div>
            </button>
            {isDropdownOpen && (
              <ul className="absolute rounded top-8 -left-20 bg-background mt-2 py-2 w-32 shadow-lg flex justify-center items-center">
                <li
                  className="px-4 py-2 rounded-lg cursor-pointer"
                  onClick={() => changeLanguage("en")}
                >
                  <Image
                    src="/english.png"
                    width={100}
                    height={100}
                    alt="casa lalla"
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                </li>
                <li
                  className="px-4 py-2 rounded-lg cursor-pointer"
                  onClick={() => changeLanguage("fr")}
                >
                  <Image
                    src="/france.png"
                    width={100}
                    height={100}
                    alt="casa lalla"
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            src={"/logo-2.png"}
            width={300}
            height={300}
            alt="Logo Casa lalla"
            className={`mt-2 w-28 lg:w-36 `}
          />
        </div>
        <div className="w-full lg:flex hidden justify-end items-center  text-white cursor-pointer">
          <Link
            href="#"
            className={`tracking-[0.2em] font-light text-[14px] leading-[34px] py-2 px-4  rounded text-background bg-transparent hover:bg-background hover:text-primary border border-background`}
          >
            Réservations
          </Link>
        </div>
        <div
          className="w-full flex justify-end items-center relative lg:hidden"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <button
            className={`font-light tracking-widest flex justify-center items-center gap-2 pb-1 text-[12px] text-white`}
          >
            <span>{t("navbar.lang")}</span>
            <div className="">
              <RiArrowDownSLine size={18} />
            </div>
          </button>
          {isDropdownOpen && (
            <ul className="absolute rounded top-8 -left-5 bg-background mt-2 py-2 w-32 shadow-lg flex justify-center items-center">
              <li
                className="px-4 py-2 rounded-lg cursor-pointer"
                onClick={() => changeLanguage("en")}
              >
                <Image
                  src="/english.png"
                  width={100}
                  height={100}
                  alt="casa lalla"
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </li>
              <li
                className="px-4 py-2 rounded-lg cursor-pointer"
                onClick={() => changeLanguage("fr")}
              >
                <Image
                  src="/france.png"
                  width={100}
                  height={100}
                  alt="casa lalla"
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </li>
            </ul>
          )}
        </div>

        {/* Full-screen mobile menu */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-700"
          enterFrom="transform -translate-x-full opacity-0"
          enterTo="transform -translate-x-0 opacity-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform -translate-x-0 opacity-100"
          leaveTo="transform -translate-x-full opacity-0"
        >
          <div className="fixed top-0 left-0 z-10 w-full lg:w-[25%] h-screen bg-white flex flex-col items-left justify-start lg:justify-center gap-16  py-14 px-20">
            <div className="text-secondary" onClick={() => setIsOpen(false)}>
              <IoMdClose size={14} />
            </div>
            <ul
              onClick={() => setIsOpen(false)}
              className="space-y-8 text-secondary leading-[25px] text-[14px] font-light"
            >
              <li className="pb-3 border-b border-bg_navbar">
                <Link href="/">{"Home"}</Link>
              </li>
              <li className="pb-3 border-b border-bg_navbar">
                <Link href="#about">{"About"}</Link>
              </li>

              <li className="pb-3 border-b border-bg_navbar">
                <Link href="#events">{"Events"}</Link>
              </li>
              <li className="pb-3 border-b border-bg_navbar">
                <Link href="#activities">{"Activities"}</Link>
              </li>
              <li className="pb-3 border-b border-bg_navbar">
                <Link href="#" target="_blank">
                  Menu
                </Link>
              </li>
              <li className="pb-3 border-b border-bg_navbar">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="pb-3 border-b border-bg_navbar">
                <Link href="/gallery">{`Gallery`}</Link>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
