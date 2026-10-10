import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-red-100 bg-white">
      <div className="container mx-auto px-4 py-10">
        {/* Brand */}
        <div className="text-center">
          <h2 className="text-2xl font-black tracking-tight text-gray-950">
            Bangla News<span className="text-red-600"> 24</span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
            সত্য ও নির্ভরযোগ্য সংবাদে, প্রতিদিন আপনার পাশে।
          </p>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-red-600" />
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-5 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Bangla News 24। সর্বস্বত্ব সংরক্ষিত।
          </p>

          <p>
            সংবাদ হোক সত্যের পক্ষে।
            <span className="ml-1 font-semibold text-red-600">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
