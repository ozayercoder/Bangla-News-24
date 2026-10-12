"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSignIn = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      toast.error("Please enter your email and password.");
      setLoading(false);
      return;
    }

    const { error } = await signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Sign in failed.");
      setLoading(false);
      return;
    }

    toast.success("Signed in successfully!");
    router.replace("/");
    router.refresh();
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);

    const { error } = await signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Google sign-in failed.");
      setLoading(false);
    }
  };

  return (
    <main className="flex  items-center justify-center px-4 py-6 text-black md:px-8 md:py-10 lg:px-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-xl shadow-black/5 md:p-8 lg:max-w-lg lg:p-10">
        <div className="mb-6 md:mb-8">
          <p className="mb-2 text-sm font-semibold text-red-600">
            WELCOME BACK
          </p>

          <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
            Sign in to your account
            <span className="text-red-600">.</span>
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500 md:text-base">
            Sign in to catch up on the latest stories.
          </p>
        </div>

        <form className="space-y-4 md:space-y-5" onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold">
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 md:h-12"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <label htmlFor="password" className="text-sm font-semibold">
                Password
              </label>

              <Link
                href="#"
                className="text-xs font-semibold text-red-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                required
                className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 pr-12 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 md:h-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-red-600 py-3 text-sm font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 md:text-base"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-xs font-medium text-gray-400">
              OR CONTINUE WITH
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 md:py-3.5"
        >
          <FcGoogle size={20} />
          {loading ? "Connecting..." : "Continue with Google"}
        </button>

        <div className="mt-6 border-t border-gray-100 pt-5 text-center md:mt-7 md:pt-6">
          <p className="text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="font-bold text-red-600 hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Stay informed. Stay ahead.
        </p>
      </div>
    </main>
  );
};

export default SignInPage;
