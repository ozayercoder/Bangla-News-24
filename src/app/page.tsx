import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";
import { IMainNews, INewsSection } from "@/types/type";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");

  const data = await res.json();

  const sections: INewsSection[] = data.data;
  const mainNews = sections[0]?.articles ?? [];
  const otherSections = sections.slice(1);

  return (
    <main className="mt-10">
      <Marquee />

      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 md:px-6 md:py-10 lg:grid-cols-3">
        {/* News Sections */}
        <div className="min-w-0 space-y-10 lg:col-span-2">
          <MainNews news={mainNews} />

          {otherSections.map((section) => (
            <section key={section.curationId}>
              {/* Section Title */}
              <h2 className="mb-5 border-b-2 border-red-200 border-l-4 border-l-red-600 pb-3 pl-3 text-xl font-extrabold tracking-tight text-red-600 md:text-2xl">
                {section.title}
              </h2>

              {/* News Cards */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {section.articles.map((news: IMainNews) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Most Read Sidebar */}
        <aside className="min-w-0 lg:col-span-1">
          <MostRead />
        </aside>
      </div>
    </main>
  );
}