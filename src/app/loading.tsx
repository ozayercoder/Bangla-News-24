import { Fragment } from "react";

const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse rounded-md bg-gray-200 ${className}`} />
);

const MarqueeSkeleton = () => (
  <div className="container mx-auto mt-10 px-4">
    <div className="flex h-12 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <Skeleton className="h-full w-32 shrink-0 rounded-none bg-red-100" />
      <div className="flex flex-1 items-center gap-8 overflow-hidden px-5">
        <Skeleton className="h-4 w-48 shrink-0" />
        <Skeleton className="h-4 w-64 shrink-0" />
        <Skeleton className="h-4 w-40 shrink-0" />
      </div>
    </div>
  </div>
);

const FeaturedNewsSkeleton = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    {/* Featured article */}
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <Skeleton className="h-48 w-full rounded-none md:h-52" />

      <div className="space-y-3 p-4">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-4/5" />
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="border-t border-gray-100 pt-3">
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>

    {/* Latest news list */}
    <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-5">
      <div className="mb-2 flex items-center justify-between border-b border-gray-100 pb-3">
        <Skeleton className="h-6 w-28" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>

      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="flex gap-3 border-b border-gray-100 py-4 last:border-0"
        >
          <Skeleton className="mt-2 h-2 w-2 shrink-0 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const NewsSectionSkeleton = () => (
  <section>
    {/* Section heading */}
    <div className="mb-5 border-b-2 border-red-100 border-l-4 border-l-red-200 pb-3 pl-3">
      <Skeleton className="h-7 w-40 bg-red-100" />
    </div>

    {/* News cards */}
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <article
          key={index}
          className="overflow-hidden rounded-xl border border-gray-200 bg-white"
        >
          <Skeleton className="h-40 w-full rounded-none md:h-44" />

          <div className="space-y-3 p-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="border-t border-gray-100 pt-3">
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const MostReadSkeleton = () => (
  <aside className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
    <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
      <div className="space-y-2">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-3 w-40" />
      </div>
      <Skeleton className="h-9 w-9 rounded-xl" />
    </div>

    <div className="divide-y divide-gray-100 px-5">
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className="flex gap-3 py-4">
          <Skeleton className="h-8 w-8 shrink-0 rounded-lg" />
          <div className="flex-1 space-y-2 pt-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      ))}
    </div>

    <div className="border-t border-gray-100 bg-gray-50/70 px-5 py-4">
      <Skeleton className="mx-auto h-3 w-36" />
    </div>
  </aside>
);

export default function Loading() {
  return (
    <main className="mt-10" aria-label="Loading homepage" aria-busy="true">
      <MarqueeSkeleton />

      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-3">
        <div className="space-y-10 lg:col-span-2">
          <FeaturedNewsSkeleton />

          {Array.from({ length: 3 }).map((_, index) => (
            <Fragment key={index}>
              <NewsSectionSkeleton />
            </Fragment>
          ))}
        </div>

        <div className="lg:col-span-1">
          <MostReadSkeleton />
        </div>
      </div>
    </main>
  );
}