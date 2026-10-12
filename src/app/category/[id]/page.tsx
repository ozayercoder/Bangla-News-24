import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";
import { ICategoryResponse } from "@/types/type";
import { notFound } from "next/navigation";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${id}`,
  );

  const data: ICategoryResponse = await res.json();
  const categoryWisedNews = data.data;

  if (!categoryWisedNews) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <Marquee />

      <div className="mb-6 mt-8 border-b border-gray-200 pb-5 md:mb-8 md:mt-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-600 md:text-sm">
          Latest News
        </p>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="h-8 w-1.5 shrink-0 rounded-full bg-red-600 md:h-10" />

          <h2 className="text-2xl font-black tracking-tight text-gray-950 md:text-3xl lg:text-4xl">
            {data.title}
          </h2>
        </div>

        <p className="mt-3 pl-4 text-xs text-gray-500 md:pl-5 md:text-sm">
          সর্বশেষ খবর ও আপডেট পড়ুন
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-5 lg:gap-6">
        {categoryWisedNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;