"use client";
import HeaderLinks from "@/components/header/HeaderLinks";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { ThemedButton } from "../ThemedButton";

interface Link {
  label: string;
  href: string;
}

const Header = ({
  locale,
  links = [],
  langName,
}: {
  locale: any;
  links?: Link[];
  langName: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="absolute w-full top-0 md:py-2  px-4 sm:px-6 lg:px-8">
      <nav className="relative z-50 flex justify-between">
        <div className="flex items-center md:gap-x-12">
          <Link
            href={`/${langName}`}
            aria-label={locale.title}
            title={locale.title}
            className="flex items-center space-x-1 font-bold"
          >
            <span className="text-gray-400 hidden md:block">
              {locale.title}
            </span>
          </Link>
          <p className="text-gray-500">tips: {locale.tips}</p>
        </div>
        <div></div>
        <div className="hidden md:flex items-center gap-x-6">
          <HeaderLinks />
          <LangSwitcher />
        </div>

        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-background border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label={locale.title}
                      title={locale.title}
                      className="inline-flex items-center"
                    >
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-950 dark:text-gray-300">
                        {locale.title}
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="tracking-wide transition-colors duration-200 font-norma"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <CgClose />
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  {/* <div className="py-2 font-bold">Links</div> */}
                  <div className="flex items-center gap-x-5 justify-between">
                    <HeaderLinks />
                    <div className="flex items-center justify-end gap-x-5">
                      <ThemedButton />
                      <LangSwitcher />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
