const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse rounded-md bg-zinc-200 ${className}`} />
);

const ArticleHeaderSkeleton = () => (
  <section className="mx-auto max-w-5xl px-4 pb-8 pt-6 md:px-8 md:pb-10 md:pt-10">
    {/* Back link */}
    <Skeleton className="mb-8 h-4 w-28 md:mb-10" />

    {/* Source and category */}
    <div className="mb-5 flex flex-wrap items-center gap-3">
      <Skeleton className="h-5 w-1 rounded-full bg-red-200" />
      <Skeleton className="h-3 w-24 bg-red-100" />
      <Skeleton className="h-4 w-20" />
    </div>

    {/* Article title */}
    <div className="max-w-4xl space-y-3">
      <Skeleton className="h-8 w-full md:h-10 lg:h-12" />
      <Skeleton className="h-8 w-11/12 md:h-10 lg:h-12" />
      <Skeleton className="h-8 w-3/4 md:h-10 lg:h-12" />
    </div>

    {/* Description */}
    <div className="mt-5 max-w-3xl space-y-3 md:mt-6">
      <Skeleton className="h-4 w-full md:h-5" />
      <Skeleton className="h-4 w-full md:h-5" />
      <Skeleton className="h-4 w-4/5 md:h-5" />
    </div>

    {/* Author and metadata */}
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-zinc-200 py-5 md:mt-8 md:gap-5">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 shrink-0 rounded-full bg-red-100 md:h-11 md:w-11" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  </section>
);

const HeroImageSkeleton = () => (
  <section className="mx-auto max-w-6xl px-0 md:px-8">
    <Skeleton className="aspect-video w-full rounded-none md:rounded-2xl" />
  </section>
);

const ArticleBodySkeleton = () => (
  <article className="min-w-0">
    {/* Section heading */}
    <div className="mb-6 flex items-center gap-3 md:mb-8">
      <Skeleton className="h-8 w-1 rounded-full bg-red-200" />
      <Skeleton className="h-4 w-32" />
    </div>

    {/* Article paragraphs and subheadings */}
    <div className="space-y-6 md:space-y-7">
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>

      <div className="space-y-3 pt-2">
        <Skeleton className="h-6 w-3/4 md:h-7 lg:h-8" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-10/12" />
      </div>

      {/* Article image */}
      <Skeleton className="aspect-video w-full rounded-xl" />

      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      <div className="space-y-3 pt-2">
        <Skeleton className="h-6 w-2/3 md:h-7 lg:h-8" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
      </div>

      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>

    {/* Tags */}
    <div className="mt-10 border-t border-zinc-200 pt-6 md:mt-14 md:pt-8">
      <Skeleton className="mb-4 h-3 w-20" />
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-9 w-24 rounded-full" />
        <Skeleton className="h-9 w-32 rounded-full" />
        <Skeleton className="h-9 w-20 rounded-full" />
        <Skeleton className="h-9 w-28 rounded-full" />
      </div>
    </div>

    {/* Original source */}
    <div className="mt-8 flex flex-col gap-4 rounded-xl bg-zinc-900 p-4 md:mt-10 md:flex-row md:items-center md:justify-between md:p-8">
      <div className="min-w-0 flex-1 space-y-3">
        <Skeleton className="h-3 w-32 bg-zinc-700" />
        <Skeleton className="h-6 w-56 max-w-full bg-zinc-700" />
        <Skeleton className="h-4 w-64 max-w-full bg-zinc-700" />
      </div>
      <Skeleton className="h-12 w-32 shrink-0 rounded-lg bg-zinc-700" />
    </div>
  </article>
);

const ArticleSidebarSkeleton = () => (
  <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
    <div className="rounded-xl border border-zinc-200 p-4 md:p-6">
      <Skeleton className="h-3 w-24 bg-red-100" />

      <div className="mt-5 space-y-5">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-4 w-36" />
          </div>
        ))}
      </div>
    </div>
  </aside>
);

export default function Loading() {
  return (
    <main
      className="min-h-screen bg-white text-zinc-900"
      aria-label="Loading article"
      aria-busy="true"
    >
      {/* Top accent */}
      <Skeleton className="h-1 w-full rounded-none bg-red-200" />

      {/* Article header */}
      <ArticleHeaderSkeleton />

      {/* Hero image */}
      <HeroImageSkeleton />

      {/* Article body and sidebar */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 md:gap-12 md:px-8 md:py-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16 lg:py-16">
        <ArticleBodySkeleton />
        <ArticleSidebarSkeleton />
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-8">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-4 w-44" />
        </div>
      </footer>
    </main>
  );
}