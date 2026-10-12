const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse rounded-md bg-gray-200 ${className}`} />
);

const ProfileDetailsSkeleton = () => (
  <div className="grid gap-3 md:grid-cols-2">
    {Array.from({ length: 4 }).map((_, index) => (
      <div
        key={index}
        className="flex min-w-0 items-start gap-4 rounded-2xl border border-gray-200 p-4"
      >
        <Skeleton className="h-11 w-11 shrink-0 rounded-xl bg-red-100" />

        <div className="min-w-0 flex-1 space-y-2 pt-1">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-4 w-40 max-w-full" />
        </div>
      </div>
    ))}
  </div>
);

const AccountSummarySkeleton = () => (
  <div className="mt-7 grid gap-3 md:grid-cols-3">
    <div className="rounded-2xl bg-gray-950 p-4">
      <Skeleton className="mb-3 h-6 w-6 bg-gray-700" />
      <Skeleton className="h-3 w-24 bg-gray-700" />
      <Skeleton className="mt-2 h-4 w-32 bg-gray-700" />
    </div>

    <div className="rounded-2xl border border-gray-200 p-4">
      <Skeleton className="mb-3 h-6 w-6 bg-red-100" />
      <Skeleton className="h-3 w-24" />
      <Skeleton className="mt-2 h-4 w-20" />
    </div>

    <div className="rounded-2xl border border-gray-200 p-4">
      <Skeleton className="mb-3 h-6 w-6 bg-red-100" />
      <Skeleton className="h-3 w-20" />
      <Skeleton className="mt-2 h-4 w-28" />
    </div>
  </div>
);

const ProfileOverviewSkeleton = () => (
  <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
    {/* Banner */}
    <div className="relative h-24 overflow-hidden bg-linear-to-r from-red-800 via-red-600 to-red-500 md:h-28">
      <div className="absolute -right-8 -top-16 h-48 w-48 rounded-full border-24 border-white/10" />
      <div className="absolute -bottom-20 right-36 h-36 w-36 rounded-full bg-white/10" />
      <Skeleton className="absolute bottom-4 right-5 h-3 w-32 bg-white/20 md:right-8" />
    </div>

    <div className="px-5 pb-7 md:px-8 md:pb-8">
      {/* Avatar and identity */}
      <div className="-mt-12 relative z-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex min-w-0 items-end gap-4">
          <Skeleton className="h-24 w-24 shrink-0 rounded-2xl border-4 border-white bg-red-100 shadow-md md:h-28 md:w-28" />

          <div className="min-w-0 flex-1 space-y-3 pb-1">
            <Skeleton className="h-6 w-40 md:h-7 md:w-48" />
            <Skeleton className="h-4 w-48 max-w-full" />
          </div>
        </div>

        <Skeleton className="h-9 w-36 rounded-full" />
      </div>

      {/* Account summary */}
      <AccountSummarySkeleton />

      {/* Personal information */}
      <div className="mt-8">
        <Skeleton className="h-6 w-52" />
        <Skeleton className="mt-2 h-4 w-64 max-w-full" />

        <div className="mt-4">
          <ProfileDetailsSkeleton />
        </div>
      </div>

      {/* Security notice */}
      <div className="mt-7 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 p-4">
        <Skeleton className="mt-0.5 h-5 w-5 shrink-0 bg-red-100" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-44 bg-red-100" />
          <Skeleton className="h-4 w-full bg-red-100" />
          <Skeleton className="h-4 w-3/4 bg-red-100" />
        </div>
      </div>
    </div>
  </section>
);

const UpdateProfileSkeleton = () => (
  <section className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
    {/* Form heading */}
    <div className="border-b border-gray-100 px-5 py-5 md:px-8">
      <Skeleton className="h-6 w-44" />
      <Skeleton className="mt-2 h-4 w-72 max-w-full" />
    </div>

    <div className="space-y-6 p-5 md:p-8">
      {/* Profile image */}
      <div>
        <Skeleton className="mb-3 h-4 w-32" />

        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <Skeleton className="h-24 w-24 shrink-0 rounded-2xl" />

          <div className="min-w-0 flex-1">
            <Skeleton className="mb-2 h-4 w-36" />
            <Skeleton className="h-12 w-full rounded-xl" />
            <Skeleton className="mt-2 h-3 w-64 max-w-full" />
          </div>
        </div>
      </div>

      {/* Full name */}
      <div>
        <Skeleton className="mb-2 h-4 w-24" />
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>

      {/* Email */}
      <div>
        <Skeleton className="mb-2 h-4 w-28" />
        <Skeleton className="h-12 w-full rounded-xl" />
        <Skeleton className="mt-2 h-3 w-56 max-w-full" />
      </div>

      {/* Form buttons */}
      <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 md:flex-row md:justify-end">
        <Skeleton className="h-12 w-full rounded-xl md:w-36" />
        <Skeleton className="h-12 w-full rounded-xl md:w-40" />
      </div>
    </div>
  </section>
);

export default function Loading() {
  return (
    <main
      className="px-4 py-8 md:px-6"
      aria-label="Loading profile"
      aria-busy="true"
    >
      <div className="mx-auto max-w-5xl">
        {/* Page heading */}
        <div className="mb-8">
          <Skeleton className="h-4 w-32 bg-red-100" />
          <Skeleton className="mt-3 h-9 w-48 md:h-10 md:w-56" />
          <Skeleton className="mt-3 h-4 w-72 max-w-full" />
        </div>

        <ProfileOverviewSkeleton />
        <UpdateProfileSkeleton />
      </div>
    </main>
  );
}