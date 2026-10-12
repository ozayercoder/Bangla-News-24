"use client";

import { useState } from "react";
import { useSession, signOut } from "@/lib/auth-client";
import Link from "next/link";
import {
  FiUser,
  FiLogIn,
  FiUserPlus,
  FiChevronDown,
  FiLogOut,
} from "react-icons/fi";
import Image from "next/image";

const UserInfo = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const [isOpen, setIsOpen] = useState(false);

  const handleSignout = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {user ? (
        <div className="relative">
          {/* User Profile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Open user menu"
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2 py-2 shadow-sm transition hover:border-red-200 hover:bg-red-50/50 md:gap-3 md:rounded-2xl md:px-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-red-100 text-red-600 md:h-10 md:w-10">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt="Profile image"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              ) : (
                <FiUser size={21} />
              )}
            </div>

            <div className="hidden text-left md:block">
              <p className="text-xs text-gray-500">Welcome,</p>
              <p className="max-w-32 truncate text-sm font-bold text-gray-900">
                {user.name || "User"}
              </p>
            </div>

            <FiChevronDown
              size={16}
              className={`shrink-0 text-gray-500 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <>
              <button
                aria-label="Close user menu"
                className="fixed inset-0 z-10 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />

              <div className="absolute right-0 top-full z-20 mt-3 w-[min(16rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-xl shadow-gray-900/10">
                <div className="border-b border-gray-100 px-3 py-3">
                  <p className="truncate text-sm font-bold text-gray-900">
                    {user.name || "User"}
                  </p>
                  <p className="truncate text-xs text-gray-500">{user.email}</p>
                </div>

                <div className="py-2">
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                  >
                    <FiUser size={17} />
                    My Account
                  </Link>

                  <button
                    onClick={handleSignout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    <FiLogOut size={17} />
                    Sign Out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="flex shrink-0 items-center gap-1.5 md:gap-2 lg:gap-3">
          <Link
            href="/sign-in"
            className="group flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-2 py-2 text-xs font-semibold text-gray-700 transition duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 md:gap-2 md:px-3 md:py-2.5 md:text-sm lg:px-4"
          >
            <FiLogIn size={16} />
            <span>Sign In</span>
          </Link>

          <Link
            href="/sign-up"
            className="group flex items-center gap-1.5 rounded-xl bg-red-600 px-2 py-2 text-xs font-semibold text-white shadow-md shadow-red-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25 active:translate-y-0 md:gap-2 md:px-3 md:py-2.5 md:text-sm lg:px-4"
          >
            <FiUserPlus size={16} />
            <span>Sign Up</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
