import { IMainNews } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

const MainNews = ({ news }: { news: IMainNews[] }) => {
  const [firstNews, ...otherNews] = news;

  if (!firstNews) return null;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
      {/* Featured News Card */}
      <article className="group overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm shadow-red-950/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md hover:shadow-red-950/10">
        {/* Image */}
        <Link href="#" className="relative block overflow-hidden">
          <Image
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
            width={400}
            height={240}
            priority
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-44 lg:h-48"
          />

          <span className="absolute left-3 top-3 rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
            প্রধান সংবাদ
          </span>
        </Link>

        {/* Content */}
        <div className="p-3 md:p-4">
          <h2 className="text-base font-extrabold leading-snug text-gray-950 transition-colors duration-300 group-hover:text-red-600 md:text-lg">
            <Link href="#">{firstNews.title}</Link>
          </h2>

          <p className="mt-2 text-xs text-gray-500">
            Published:{" "}
            {new Date(firstNews.firstPublished).toLocaleDateString("bd-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
            {firstNews.description}
          </p>

          <div className="mt-3 border-t border-gray-100 pt-3">
            <Link
              href={`/news/${firstNews.id}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-red-600 transition-all duration-300 hover:gap-3 md:text-sm"
            >
              বিস্তারিত পড়ুন
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>

      {/* Other News List */}
      <section className="min-w-0 rounded-2xl border border-gray-200/80 bg-white p-3 shadow-sm shadow-red-950/5 md:p-4 lg:p-5">
        <div className="mb-2 flex items-center justify-between gap-2 border-b border-gray-100 pb-3">
          <h2 className="text-base font-extrabold text-gray-950 md:text-lg">
            আরও খবর
          </h2>

          <span className="shrink-0 rounded-full bg-red-50 px-2 py-1 text-xs font-bold text-red-600 ring-1 ring-inset ring-red-100 md:px-3">
            সর্বশেষ
          </span>
        </div>

        <div className="divide-y divide-gray-100">
          {otherNews.map((item) => (
            <article key={item.id} className="group py-3 first:pt-2 last:pb-0">
              <Link
                href={`/news/${item.id}`}
                className="flex items-start gap-3 text-sm font-semibold leading-6 text-gray-700 transition-colors duration-200 hover:text-red-600"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500 transition-transform duration-200 group-hover:scale-125" />

                <span className="line-clamp-3">{item.title}</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainNews;
