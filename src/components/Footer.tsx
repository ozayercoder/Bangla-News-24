const Footer = () => {
  return (
    <footer className="mt-10 border-t border-red-100 bg-white md:mt-12 lg:mt-16">
      <div className="container mx-auto px-4 py-7 md:px-6 md:py-8 lg:py-10">
        {/* Brand */}
        <div className="text-center">
          <h2 className="text-xl font-black tracking-tight text-gray-950 md:text-2xl">
            Bangla News<span className="text-red-600"> 24</span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
            সত্য ও নির্ভরযোগ্য সংবাদে, প্রতিদিন আপনার পাশে।
          </p>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-red-600" />
        </div>

        {/* Bottom Bar */}
        <div className="mt-7 flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-5 text-center text-xs text-gray-500 md:mt-8 md:flex-row md:text-left">
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
