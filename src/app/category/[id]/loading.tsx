const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse rounded-md bg-gray-200 ${className}`} />
);

const MarqueeSkeleton = () => (
  <div className="mt-6 flex h-12 overflow-hidden rounded-xl border border-gray-200 bg-white md:mt-10">
    <Skeleton className="h-full w-24 shrink-0 rounded-none bg-red-100 md:w-32" />

    <div className="flex flex-1 items-center gap-6 overflow-hidden px-4 md:gap-8 md:px-5">
      <Skeleton className="h-4 w-36 shrink-0 md:w-48" />
      <Skeleton className="h-4 w-48 shrink-0 md:w-64" />
      <Skeleton className="h-4 w-32 shrink-0 md:w-40" />
    </div>
  </div>
);

const NewsCardSkeleton = () => (
  <article className="overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm shadow-red-950/5">
    {/* Image */}
    <Skeleton className="h-40 w-full rounded-none md:h-44" />

    {/* Content */}
    <div className="space-y-3 p-3 md:p-4">
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-4/5" />

      <Skeleton className="h-3 w-28" />

      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      <div className="border-t border-gray-100 pt-3">
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  </article>
);

export default function Loading() {
  return (
    <main
      className="container mx-auto px-4 md:px-6 lg:px-8"
      aria-label="Loading category news"
      aria-busy="true"
    >
      {/* Breaking News */}
      <MarqueeSkeleton />

      {/* Category Heading */}
      <div className="mb-6 mt-8 border-b border-gray-200 pb-5 md:mb-8 md:mt-10">
        <Skeleton className="mb-3 h-4 w-28 bg-red-100" />

        <div className="flex items-center gap-3 md:gap-4">
          <Skeleton className="h-8 w-1.5 shrink-0 rounded-full bg-red-200 md:h-10" />
          <Skeleton className="h-8 w-40 md:h-9 md:w-48 lg:h-10 lg:w-64" />
        </div>

        <Skeleton className="ml-4 mt-3 h-4 w-48 md:ml-5 md:w-56" />
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6">
        {Array.from({ length: 8 }, (_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    </main>
  );
}