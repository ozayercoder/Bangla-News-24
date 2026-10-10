import Link from "next/link";
import Image from "next/image";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiExternalLink,
  FiFileText,
} from "react-icons/fi";
import BackToTop from "@/components/BackToTop";

// ---------- Types ----------

interface DescriptionModel {
  text?: string;
  blocks?: DescriptionBlock[];
}

interface DescriptionBlock {
  model?: DescriptionModel;
}

interface ArticleByline {
  name?: string;
  role?: string;
}

interface ArticleTopic {
  name?: string;
}

interface TextBlock {
  type: "text";
  text: string;
}

interface SubheadingBlock {
  type: "subheading";
  text: string;
}

interface ImageBlock {
  type: "image";
  url: string;
  title?: string;
  caption?: string;
}

type ArticleBodyBlock = TextBlock | SubheadingBlock | ImageBlock;

interface NewsArticle {
  title: string;
  description?: {
    blocks?: DescriptionBlock[];
  };
  firstPublished?: string;
  lastPublished?: string;
  byline?: ArticleByline[];
  topics?: ArticleTopic[];
  tags?: string[];
  imageUrl?: string;
  body?: ArticleBodyBlock[];
  wordCount?: number;
  source?: string;
  sourceUrl?: string;
  link?: string;
}

interface ArticleApiResponse {
  data: NewsArticle | null;
}

// ---------- Component ----------

const NewsDetailsPage = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    { next: { revalidate: 300 } },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  const result: ArticleApiResponse = await res.json();
  const article = result.data;

  if (!article) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-32 text-center">
        <FiFileText className="mx-auto mb-4 h-12 w-12 text-red-600" />
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link href="/" className="mt-5 inline-block text-red-600">
          Return home
        </Link>
      </main>
    );
  }

  const publishedDate = article.firstPublished
    ? new Date(article.firstPublished)
    : null;

  const lastPublishedDate = article.lastPublished
    ? new Date(article.lastPublished)
    : null;

  const readTime = Math.max(1, Math.ceil((article.wordCount ?? 0) / 200));

  const description =
    article.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text;

  const author = article.byline?.[0];
  const sourceUrl = article.sourceUrl || article.link;

  return (
    <main id="top" className="min-h-screen bg-white text-zinc-900">
      <div className="h-1 w-full bg-red-600" />

      {/* Article header */}
      <section className="mx-auto max-w-5xl px-5 pb-10 pt-8 sm:px-8 sm:pt-12">
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-red-600"
        >
          <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to news
        </Link>

        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="h-5 w-1 rounded-full bg-red-600" />

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
            {article.source || "News"}
          </span>

          {article.topics?.[0]?.name && (
            <>
              <span className="text-zinc-300">/</span>
              <span className="text-sm text-zinc-500">
                {article.topics[0].name}
              </span>
            </>
          )}
        </div>

        <h1 className="max-w-4xl text-3xl font-black leading-[1.35] tracking-tight sm:text-4xl md:text-5xl md:leading-[1.3]">
          {article.title}
        </h1>

        {description && (
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-600 sm:text-lg sm:leading-9">
            {description}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-y border-zinc-200 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600">
              <FiFileText className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-bold">
                {author?.name || article.source || "Editorial Desk"}
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                {author?.role || article.source || "News"}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <FiCalendar className="h-4 w-4 text-red-600" />
              {publishedDate && !Number.isNaN(publishedDate.getTime())
                ? publishedDate.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "Date unavailable"}
            </span>

            <span className="flex items-center gap-1.5">
              <FiClock className="h-4 w-4 text-red-600" />
              {readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      {article.imageUrl && (
        <section className="mx-auto max-w-6xl px-0 sm:px-8">
          <figure className="group relative overflow-hidden bg-zinc-100 sm:rounded-2xl">
            <Image
              src={article.imageUrl}
              alt={article.title}
              width={1200}
              height={675}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1152px"
              className="h-auto w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

            <span className="absolute bottom-5 left-5 rounded-md bg-red-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:bottom-7 sm:left-7">
              Featured Story
            </span>
          </figure>
        </section>
      )}

      {/* Article content */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16 lg:py-16">
        <article className="min-w-0">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-8 w-1 rounded-full bg-red-600" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
              Inside the story
            </p>
          </div>

          <div className="space-y-7">
            {article.body?.map((block, index) => {
              // Avoid showing the first body image twice.
              if (block.type === "image" && index === 0) {
                return null;
              }

              if (block.type === "image") {
                return (
                  <figure key={`image-${index}`} className="my-10">
                    <div className="overflow-hidden rounded-xl bg-zinc-100">
                      <Image
                        src={block.url}
                        alt={block.title || article.title}
                        width={1200}
                        height={675}
                        sizes="(max-width: 1024px) 100vw, 700px"
                        className="h-auto w-full object-cover"
                      />
                    </div>

                    {block.caption && (
                      <figcaption className="mt-3 border-l-2 border-red-600 pl-3 text-xs leading-6 text-zinc-500">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              if (block.type === "subheading") {
                return (
                  <h2
                    key={`subheading-${index}`}
                    className="border-l-[3px] border-red-600 pl-4 pt-2 text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }

              return (
                <p
                  key={`text-${index}`}
                  className="whitespace-pre-line text-[16px] leading-loose text-zinc-700 sm:text-[17px] sm:leading-[2.05]"
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Article tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-14 border-t border-zinc-200 pt-8">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                Topics
              </h3>

              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium text-zinc-600 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Source attribution */}
          <div className="mt-10 flex flex-col gap-4 rounded-xl bg-zinc-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                Original reporting
              </p>
              <h3 className="mt-2 text-xl font-bold">
                Read the original article
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Published by {article.source || "the original publisher"}.
              </p>
            </div>

            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold transition hover:bg-red-700"
              >
                Read source
                <FiExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-xl border border-zinc-200 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              Article info
            </p>

            <div className="mt-5 space-y-5">
              <div>
                <p className="text-xs text-zinc-500">Published by</p>
                <p className="mt-1 font-bold">{article.source || "News"}</p>
              </div>

              <div>
                <p className="text-xs text-zinc-500">Reading time</p>
                <p className="mt-1 font-bold">{readTime} minutes</p>
              </div>

              <div>
                <p className="text-xs text-zinc-500">Word count</p>
                <p className="mt-1 font-bold">
                  {article.wordCount?.toLocaleString() ?? "—"} words
                </p>
              </div>

              <div>
                <p className="text-xs text-zinc-500">Last updated</p>
                <p className="mt-1 font-bold">
                  {lastPublishedDate &&
                  !Number.isNaN(lastPublishedDate.getTime())
                    ? lastPublishedDate.toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                    : "Not available"}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Link href="/" className="font-black tracking-tight text-zinc-950">
            NEWS<span className="text-red-600">.</span>
          </Link>

          <p>Stay informed. Stay curious.</p>
        </div>
      </footer>
    </main>
  );
};

export default NewsDetailsPage;
