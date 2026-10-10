import { IMainNews } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ news }: { news: IMainNews }) => {
  return (
    <div>
      <article className="group overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm shadow-red-950/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md hover:shadow-red-950/10">
        {/* Image */}
        <Link href="#" className="relative block overflow-hidden">
          <Image
            src={news.imageUrl}
            alt={news.imageAlt}
            width={400}
            height={240}
            priority
            className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-44"
          />
        </Link>

        {/* Content */}
        <div className="p-3 sm:p-4">
          <h2 className="text-base font-extrabold leading-snug text-gray-950 transition-colors duration-300 group-hover:text-red-600 sm:text-lg">
            <Link href="#">{news.title}</Link>
          </h2>
          <p className="mt-2 text-xs text-gray-500">
            Published:{" "}
            {new Date(news.firstPublished).toLocaleDateString("bd-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
            {news.description}
          </p>

          <div className="mt-3 border-t border-gray-100 pt-3">
            <Link
              href={`/news/${news.id}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-red-600 transition-all duration-300 hover:gap-3 sm:text-sm"
            >
              বিস্তারিত পড়ুন
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsCard;
