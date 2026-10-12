"use client";

import Image from "next/image";
import { updateUser, useSession } from "@/lib/auth-client";
import {
  FiUser,
  FiMail,
  FiCalendar,
  FiShield,
  FiHash,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

const ProfilePage = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-9 w-9 animate-spin rounded-full border-4 border-red-100 border-t-red-600" />
      </div>
    );
  }

  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Not available";

  const details = [
    {
      label: "Full Name",
      value: user?.name || "Not provided",
      icon: FiUser,
    },
    {
      label: "Email Address",
      value: user?.email || "Not provided",
      icon: FiMail,
    },
    {
      label: "User ID",
      value: user?.id || "Not available",
      icon: FiHash,
    },
    {
      label: "Member Since",
      value: joinedDate,
      icon: FiCalendar,
    },
  ];

  const handleUpdateProfile = async (
    e: React.SubmitEvent<HTMLElement>,
  ) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await updateUser({
      ...newUserData,
    });
    console.log(newUserData);
  };

  return (
    <main className="px-4 py-8 md:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Page heading */}
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Account Center
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-950 md:text-4xl">
            My Profile
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            View your personal information and account details.
          </p>
        </div>

        {/* Profile overview */}
        <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          {/* Compact banner */}
          <div className="relative h-24 overflow-hidden bg-linear-to-r from-red-800 via-red-600 to-red-500 md:h-28">
            <div className="absolute -right-8 -top-16 h-48 w-48 rounded-full border-24 border-white/10" />
            <div className="absolute -bottom-20 right-36 h-36 w-36 rounded-full bg-white/10" />

            <p className="absolute bottom-4 right-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 md:right-8">
              Personal Account
            </p>
          </div>

          <div className="px-5 pb-7 md:px-8 md:pb-8">
            {/* Profile identity */}
            <div className="-mt-12 relative z-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="flex min-w-0 items-end gap-4">
                {/* Profile image */}
                <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-red-50 text-red-600 shadow-md md:h-28 md:w-28">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={`${user.name || "User"}'s profile picture`}
                      width={112}
                      height={112}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <FiUser size={42} />
                  )}
                </div>

                {/* Name and email */}
                <div className="min-w-0 flex-1 pb-1">
                  <h2 className="wrap-break-word text-xl font-extrabold text-gray-950 md:text-2xl">
                    {user?.name || "User"}
                  </h2>
                  <p className="mt-1 break-all text-sm text-gray-500">
                    {user?.email}
                  </p>
                </div>
              </div>

              {/* Email verification */}
              <div
                className={`flex w-fit shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-bold ${
                  user?.emailVerified
                    ? "bg-green-50 text-green-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                {user?.emailVerified ? (
                  <FiCheckCircle size={15} />
                ) : (
                  <FiXCircle size={15} />
                )}
                {user?.emailVerified ? "Email Verified" : "Email Not Verified"}
              </div>
            </div>

            {/* Account summary */}
            <div className="mt-7 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-gray-950 p-4 text-white">
                <FiUser className="mb-3 text-xl text-red-400" />
                <p className="text-xs font-medium text-gray-400">
                  Account Type
                </p>
                <p className="mt-1 font-bold">Registered User</p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-4">
                <FiShield className="mb-3 text-xl text-red-600" />
                <p className="text-xs font-medium text-gray-500">
                  Account Status
                </p>
                <p className="mt-1 font-bold text-gray-950">Active</p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-4">
                <FiCalendar className="mb-3 text-xl text-red-600" />
                <p className="text-xs font-medium text-gray-500">Joined On</p>
                <p className="mt-1 font-bold text-gray-950">{joinedDate}</p>
              </div>
            </div>

            {/* Personal information */}
            <div className="mt-8">
              <div className="mb-4">
                <h3 className="text-lg font-extrabold text-gray-950">
                  Personal Information
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Information associated with your account.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {details.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex min-w-0 items-start gap-4 rounded-2xl border border-gray-200 p-4 transition hover:border-red-200 hover:bg-red-50/30"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-gray-500">
                        {label}
                      </p>
                      <p className="mt-1 wrap-break-word text-sm font-bold text-gray-900">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security notice */}
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 p-4">
              <FiShield className="mt-0.5 shrink-0 text-red-600" size={19} />
              <div>
                <h3 className="text-sm font-bold text-gray-950">
                  Keep your account secure
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Never share your password or sign-in credentials with anyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Update Profile Form */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-5 py-5 md:px-8">
            <h2 className="text-xl font-extrabold text-gray-950">
              Update Profile
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Update your profile picture and personal information.
            </p>
          </div>

          <form
            className="space-y-6 p-5 md:p-8"
            onSubmit={handleUpdateProfile}
          >
            {/* Profile Image */}
            <div>
              <label className="mb-3 block text-sm font-bold text-gray-900">
                Profile Picture
              </label>

              <div className="flex flex-col gap-5 md:flex-row md:items-center">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-red-50 text-red-600">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt="Current profile picture"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <FiUser size={36} />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <label
                    htmlFor="profileImage"
                    className="mb-2 block text-sm font-bold text-gray-900"
                  >
                    Profile Image URL
                  </label>

                  <input
                    id="profileImage"
                    name="image"
                    type="url"
                    defaultValue={user?.image || ""}
                    placeholder="https://example.com/profile.jpg"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                  />

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    Paste a direct image URL ending in JPG, PNG, or WebP.
                  </p>
                </div>
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label
                htmlFor="profileName"
                className="mb-2 block text-sm font-bold text-gray-900"
              >
                Full Name
              </label>

              <div className="relative">
                <FiUser
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="profileName"
                  name="name"
                  type="text"
                  defaultValue={user?.name || ""}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                />
              </div>
            </div>

            {/* Email - Read Only */}
            <div>
              <label
                htmlFor="profileEmail"
                className="mb-2 block text-sm font-bold text-gray-900"
              >
                Email Address
              </label>

              <div className="relative">
                <FiMail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="profileEmail"
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-500 outline-none"
                />
              </div>

              <p className="mt-2 text-xs text-gray-500">
                Your email address cannot be changed here.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 md:flex-row md:justify-end">
              <button
                type="reset"
                className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
              >
                Reset Changes
              </button>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-red-700 active:scale-[0.98]"
              >
                <FiCheckCircle size={17} />
                Save Changes
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;