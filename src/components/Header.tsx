import Image from "next/image";
import Navlinks from "./Navlinks";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="sticky top-3 z-50 mx-auto mb-5 w-full max-w-7xl px-3 md:px-4">
      <div className="rounded-2xl border border-gray-100 bg-white/95 px-3 py-3 shadow-lg shadow-gray-900/10 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10 md:px-5 md:py-4 lg:px-6">
        {/* Main Header Row */}
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Logo & Brand */}
          <div className="group flex min-w-0 shrink items-center gap-2 md:gap-3">
            <div className="shrink-0 rounded-xl bg-red-50 p-1 transition-all duration-300 group-hover:bg-red-100 group-hover:shadow-md group-hover:shadow-red-500/20">
              <Image
                src="/logo.webp"
                alt="Bangla News 24 logo"
                width={42}
                height={42}
                priority
                className="h-9 w-9 rounded-lg transition-transform duration-300 group-hover:scale-105 md:h-10.5 md:w-10.5"
              />
            </div>

            <div className="min-w-0">
              <h1 className="whitespace-nowrap text-base font-extrabold tracking-tight text-gray-950 md:text-xl lg:text-2xl">
                Bangla News{" "}
                <span className="inline-block text-red-600 transition-colors duration-300 hover:text-red-800">
                  24
                </span>
              </h1>

              <p className="mt-1 truncate text-[10px] text-gray-500 md:text-xs">
                {date}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <Navlinks />
          </nav>

          {/* User Info & Mobile Menu */}
          <div className="flex shrink-0 items-center gap-2 md:ml-auto">
            <UserInfo />

            {/* Mobile Hamburger Menu */}
            <details className="group relative md:hidden">
              <summary
                aria-label="Toggle navigation menu"
                className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 [&::-webkit-details-marker]:hidden"
              >
                {/* Hamburger Icon */}
                <svg
                  className="h-5 w-5 group-open:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                {/* Close Icon */}
                <svg
                  className="hidden h-5 w-5 group-open:block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M18 6L6 18"
                  />
                </svg>
              </summary>

              {/* Mobile Dropdown Navigation */}
              <div className="absolute right-0 top-full z-50 mt-3 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-gray-100 bg-white p-3 shadow-xl shadow-gray-900/10">
                <p className="mb-2 border-b border-gray-100 px-2 pb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                  নেভিগেশন
                </p>

                <Navlinks />
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
