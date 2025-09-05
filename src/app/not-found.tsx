import React from "react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <svg
            className="mx-auto h-48 w-48 text-gray-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
            <path d="m15 15-6-6"></path>
          </svg>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</p>
        <p className="text-gray-500 mb-8">
          Oops! The page you are looking for seems to have been misplaced. Do not worry, get back on track.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center rounded-md bg-[#1380ec] px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
