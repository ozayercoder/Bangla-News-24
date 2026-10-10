import Image from "next/image";
import React from "react";
import Navlinks from "./Navlinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="sticky top-3 z-50 mx-auto w-full max-w-7xl px-4 mb-5">
      <div className="flex  items-center justify-between rounded-2xl border border-gray-100 bg-white/95 px-4 py-4 shadow-lg shadow-gray-900/10 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10 sm:px-6">
        {/* Logo & Brand */}
        <div className="group flex shrink-0 items-center gap-3">
          <div className="rounded-xl bg-red-50 p-1 transition-all duration-300 group-hover:bg-red-100 group-hover:shadow-md group-hover:shadow-red-500/20">
            <Image
              src="/logo.webp"
              alt="Bangla News 24 logo"
              width={42}
              height={42}
              priority
              className="rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-gray-950 sm:text-2xl">
              Bangla News{" "}
              <span className="inline-block text-red-600 transition-colors duration-300 hover:text-red-800">
                24
              </span>
            </h1>
            <p className="mt-1 text-xs text-gray-500">{date}</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <Navlinks />
        </nav>

        {/* Authentication */}
        <div className="flex shrink-0 items-center gap-2">
          <button className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-700 active:scale-95">
            Sign In
          </button>

          <button className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 active:translate-y-0 active:scale-95">
            Sign Up
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="w-full border-t border-gray-100 pt-3 md:hidden">
          <Navlinks />
        </nav>
      </div>
    </header>
  );
};

export default Header;
