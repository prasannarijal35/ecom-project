import Link from "next/link";
import React from "react";

export default function AdminFooter() {
  return (
    <footer className="bg-white shadow-custom text-slate- py-2 ">
      <div className="flex justify-between items-center px-6">
        <div className="text-[12px]">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>

        <div className="text-[12px] space-x-4">
          <Link href="/privacy" className="hover:text-blue-400">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-blue-400">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
