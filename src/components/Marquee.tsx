import { ILatestNews } from "@/types/type";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");

  const data = await res.json();
  const latestNewses: ILatestNews[] = data.data;

  return (
    <div className="container mx-auto mt-6 px-3 md:mt-8 md:px-4 lg:mt-10">
      <div className="flex w-full items-stretch overflow-hidden rounded-xl border border-red-100 bg-white shadow-md shadow-gray-900/5">
        {/* Breaking News Label */}
        <div className="relative z-10 flex shrink-0 items-center gap-1.5 bg-red-600 px-3 py-3 text-xs font-bold text-white shadow-md md:gap-2 md:px-5 md:text-sm lg:px-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
          </span>

          <span>সর্বশেষ</span>

          {/* Label Arrow */}
          <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 bg-red-600" />
        </div>

        {/* Scrolling Headlines */}
        <div className="flex min-w-0 flex-1 items-center overflow-hidden px-3 md:px-4 lg:px-5">
          <MarqueeText direction="right" duration={15}>
            {latestNewses.map((n, ind) => (
              <span key={ind} className="inline-flex items-center">
                <Link
                  href={`/news/${n.id}`}
                  className="whitespace-nowrap text-xs font-medium text-gray-700 transition-colors duration-200 hover:text-red-600 md:text-sm lg:text-base"
                >
                  {n.title}
                </Link>

                <span className="mx-3 text-red-500 md:mx-4 lg:mx-5">✦</span>
              </span>
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
