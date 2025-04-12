import Link from "next/link";
import React from "react";
import { IoHome } from "react-icons/io5";
import "@/styles/globals.css";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-100 text-gray-800">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary/90 transition-all duration-300"
              >
                <IoHome size={20} />
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="py-2 px-4 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all duration-300"
              >
                Contact Support
              </Link>
            </div>
          </div>

          {/* Decorative Image */}
        </div>
        <Footer />
      </body>
    </html>
  );
}
