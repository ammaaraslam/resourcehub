import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserAuthButton from "./UserAuthButton";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 60 ? setNavActive(true) : setNavActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      {navActive && (
        <header className="fixed z-50 py-3 px-0  w-full h-fit flex items-center justify-between bg-background dark:bg-darkBackground bg-opacity-80 dark:bg-opacity-100 backdrop-blur-lg backdrop-saturate-150 text-darkText dark:text-text border-b-2 border-black dark:border-white border-opacity-5 dark:border-opacity-5">
          <div className="p-0 ml-8 text-center inline-flex items-center justify-center">
            <span className="text-2xl font-bold">ResourceHub</span>
          </div>
          <div className="md:inline-flex hidden font-semibold text-xl font-sf tracking-wider">
            <li className="list-none mr-8 text-darkBackground dark:text-background opacity-80 hover:opacity-100 transition-all duration-200">
              <Link href="/explore">Explore</Link>
            </li>
            <li className="list-none mr-8 text-darkBackground dark:text-background opacity-80 hover:opacity-100 transition-all duration-200">
              <Link href="/about">About</Link>
            </li>
          </div>
          <div className="mr-8">
            <UserAuthButton />
          </div>
        </header>
      )}
      {!navActive && (
        <header className="fixed py-3 px-0 w-full h-fit flex items-center justify-between bg-background dark:bg-darkBackground  text-darkText dark:text-text">
          <div className="p-0 ml-8 text-center inline-flex items-center justify-center">
            <span className="text-2xl font-bold">ResourceHub</span>
          </div>
          <div className="md:inline-flex hidden font-semibold text-xl font-sf tracking-wider">
            <li className="list-none mr-8 text-darkBackground dark:text-background opacity-80 hover:opacity-100 transition-all duration-200">
              <Link href="/explore">Explore</Link>
            </li>
            <li className="list-none mr-8 text-darkBackground dark:text-background opacity-80 hover:opacity-100 transition-all duration-200">
              <Link href="/about">About</Link>
            </li>
          </div>
          <div className="mr-8 inline-flex">
            <UserAuthButton />
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
