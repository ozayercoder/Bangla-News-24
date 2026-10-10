import { IMostRead } from "@/types/type";
import Link from "next/link";

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");

  const data = await res.json();
  const mostReadData: IMostRead[] = data.data;

  return (
    <aside className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm shadow-red-950/5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
        <div>
          <h2 className="text-lg font-extrabold tracking-tight text-gray-950">
            সর্বাধিক পঠিত
          </h2>
          <p className="mt-1 text-xs text-gray-500">পাঠকদের আগ্রহের শীর্ষে</p>
        </div>

        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
            />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </span>
      </div>

      {/* News List */}
      <div className="divide-y divide-gray-100 px-5">
        {mostReadData.map((item, index) => (
          <article key={item.id} className="group py-4">
            <Link href={`/news/${item.id}`} className="flex items-start gap-3">
              {/* Ranking Number */}
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold transition-colors ${
                  index < 3
                    ? "bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white"
                    : "bg-gray-50 text-gray-400 group-hover:bg-red-50 group-hover:text-red-600"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* News Title */}
              <h3 className="pt-0.5 text-sm font-semibold leading-6 text-gray-700 transition-colors group-hover:text-red-600">
                {item.title}
              </h3>
            </Link>
          </article>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 bg-gray-50/70 px-5 py-3">
        <p className="text-center text-xs font-medium text-gray-500">
          পাঠকদের পছন্দের খবর
        </p>
      </div>
    </aside>
  );
};

export default MostRead;
