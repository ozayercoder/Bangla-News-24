import { INavLink } from "@/types/type";
import Link from "next/link";
import React from "react";

const Navlinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: INavLink[] = data.data;
  const filteredNavs = navs.filter((n) => n.scrapable);

  return (
    <div className="flex flex-wrap items-center gap-1">
      <Link
        href="/"
        className="group relative rounded-xl px-3 py-2 text-sm font-semibold text-gray-600 transition-all duration-300 ease-in-out hover:bg-red-50 hover:text-red-600 active:scale-95"
      >
        হোম
        <span className="absolute bottom-1 left-3 right-3 h-0.5 origin-left scale-x-0 rounded-full bg-red-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </Link>

      {filteredNavs.map((n) => (
        <Link
          key={n.slug}
          href={`/category/${n.slug}`}
          className="group relative rounded-xl px-3 py-2 text-sm font-semibold text-gray-600 transition-all duration-300 hover:bg-red-50 hover:text-red-600 active:scale-95"
        >
          {n.title}
          <span className="absolute bottom-1 left-3 right-3 h-0.5 origin-left scale-x-0 rounded-full bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
