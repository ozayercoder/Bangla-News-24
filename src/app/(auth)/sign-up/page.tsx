"use client";

import { useState, type FormEvent } from "react";
import { signIn, signUp } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
};

const SignUpPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const user: SignUpFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const { error } = await signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Signup failed.");
      setLoading(false);
      return;
    }

    toast.success("Account created successfully!");
    router.replace("/");
    router.refresh();
  };

  const handleGoogleSignUp = async (): Promise<void> => {
    setLoading(true);

    const { error } = await signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Google sign-up failed.");
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center px-4 py-6 text-black md:px-8 md:py-10 lg:px-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-xl shadow-black/5 md:p-8 lg:max-w-lg lg:p-10">
        {/* Heading */}
        <div className="mb-6 md:mb-8">
          <p className="mb-2 text-sm font-semibold text-red-600">
            GET STARTED
          </p>

          <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
            Create your account
            <span className="text-red-600">.</span>
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500 md:text-base">
            Join us and stay connected with the stories that matter.
          </p>
        </div>

        {/* Signup Form */}
        <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold">
              Full name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              required
              disabled={loading}
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 md:h-12"
            />
          </div>

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
              disabled={loading}
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 md:h-12"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Create a strong password"
              required
              minLength={8}
              disabled={loading}
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 md:h-12"
            />

            <p className="mt-2 text-xs text-gray-400">
              Use at least 8 characters.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-red-600 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 md:text-base"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        {/* Divider */}
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

        {/* Google Signup */}
        <button
          type="button"
          onClick={handleGoogleSignUp}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 md:py-3.5"
        >
          <FcGoogle size={20} />
          {loading ? "Connecting..." : "Continue with Google"}
        </button>

        {/* Footer */}
        <div className="mt-6 border-t border-gray-100 pt-5 text-center md:mt-7 md:pt-6">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-bold text-red-600 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>

        <p className="mt-5 text-center text-xs text-gray-400">
          By joining, you agree to our Terms of Service.
        </p>
      </div>
    </main>
  );
};

export default SignUpPage;