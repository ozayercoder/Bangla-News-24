import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";
import { ICategoryResponse } from "@/types/type";
import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`);
  const data: ICategoryResponse = await res.json();
  const categoryWisedNews = data.data;
  console.log(id);
  return (
    <div className="container mx-auto px-4">
      <Marquee />

      <div className="mb-8 border-b border-gray-200 pb-5  mt-10">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
          Latest News
        </p>

        <div className="flex items-center gap-4">
          <div className="h-10 w-1.5 rounded-full bg-red-600" />
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            {data.title}
          </h2>
        </div>

        <p className="mt-3 pl-5 text-sm text-gray-500">
          সর্বশেষ খবর ও আপডেট পড়ুন
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {categoryWisedNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
