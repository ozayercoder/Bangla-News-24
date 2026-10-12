import { INavLink } from "@/types/type";
import Link from "next/link";

const Navlinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: INavLink[] = data.data;
  const filteredNavs = navs.filter((n) => n.scrapable);

  return (
    <div className="flex flex-wrap items-center justify-start gap-1 lg:gap-2 md:justify-center">
      <Link
        href="/"
        className="group relative rounded-xl px-2 py-2 text-xs font-semibold text-gray-600 transition-all duration-300 ease-in-out hover:bg-red-50 hover:text-red-600 active:scale-95 md:px-3 md:text-sm"
      >
        হোম
        <span className="absolute bottom-1 left-2 right-2 h-0.5 origin-left scale-x-0 rounded-full bg-red-600 transition-transform duration-300 ease-out group-hover:scale-x-100 md:left-3 md:right-3" />
      </Link>

      {filteredNavs.map((n) => (
        <Link
          key={n.slug}
          href={`/category/${n.slug}`}
          className="group relative rounded-xl px-2 py-2 text-xs font-semibold text-gray-600 transition-all duration-300 hover:bg-red-50 hover:text-red-600 active:scale-95 md:px-3 md:text-sm"
        >
          {n.title}
          <span className="absolute bottom-1 left-2 right-2 h-0.5 origin-left scale-x-0 rounded-full bg-red-600 transition-transform duration-300 md:left-3 md:right-3 group-hover:scale-x-100" />
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
