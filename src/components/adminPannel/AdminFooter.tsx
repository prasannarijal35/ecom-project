import React from "react";

export default function AdminFooter() {
  return (
    <footer className="bg-white shadow-md py-2 flex flex-col justify-between items-center px-8 text-center md:flex-row gap-1 ">
      <div className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>

      <div className="text-xs text-gray-500">
        Powered by <span className="font-semibold"> Teloiv Fashion</span>
      </div>
    </footer>
  );
}
