import Link from "next/link";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";

export default function PaymentFailed() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-100 text-gray-800">
      <div className="text-center">
        <IoCloseCircleOutline className="text-red-500 text-[100px] mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-red-600 mb-3">Payment Failed</h1>
        <p className="text-gray-600 mb-6">
          Oops! Something went wrong with your payment. Please try again or
          contact support.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary/90 
            transition-all duration-300"
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
    </div>
  );
}
