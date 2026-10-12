import Link from "next/link";
import { FiHome } from "react-icons/fi";

const NotFound = () => {
  return (
    <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-12 text-black md:min-h-[75vh] md:px-6 md:py-16 lg:min-h-[80vh]">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-red-500/10 blur-[80px] md:h-72 md:w-72 md:blur-[100px]" />

        <div className="absolute -left-20 top-20 h-48 w-48 animate-[float_8s_ease-in-out_infinite] rounded-full border border-red-500/20 md:h-64 md:w-64" />

        <div className="absolute -bottom-24 -right-16 h-60 w-60 animate-[float_10s_ease-in-out_infinite] rounded-full border border-red-500/20 md:h-80 md:w-80" />

        <div className="absolute inset-0 bg-[radial-gradient(#ef444415_1px,transparent_1px)] bg-size-[28px_28px]" />
      </div>

      {/* Content */}
      <section className="relative z-10 mx-auto w-full max-w-xl text-center lg:max-w-2xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2 text-xs font-medium text-red-500 md:text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          ERROR 404
        </div>

        <h1 className="select-none text-[clamp(6rem,25vw,13rem)] font-black leading-none tracking-tighter text-red-500 drop-shadow-[0_0_35px_rgba(239,68,68,0.18)]">
          404
        </h1>

        <div className="mx-auto my-6 h-1 w-16 rounded-full bg-red-500 md:my-8" />

        <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl lg:text-4xl">
          Oops! Lost in space?
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600 md:text-base dark:text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 md:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/20 transition duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-red-500/30"
          >
            <FiHome size={18} />
            Back to Home
          </Link>
        </div>

        <p className="mt-10 text-[10px] tracking-widest text-gray-400 md:mt-12 md:text-xs">
          LOST YOUR WAY? <span className="text-red-500">IT HAPPENS.</span>
        </p>
      </section>

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(8deg);
          }
        }
      `}</style>
    </main>
  );
};

export default NotFound;
