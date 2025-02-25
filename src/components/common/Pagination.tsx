"use client";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const generatePages = (
  currentPage: number,
  totalPages: number
): (number | string)[] => {
  const pages: (number | string)[] = [];
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("...");

    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage <= 3) end = 4;
    else if (currentPage >= totalPages - 2) start = totalPages - 3;

    for (let i = start; i <= end; i++) pages.push(i);

    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }
  return pages;
};

export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
}: PaginationProps) {
  const pages = generatePages(currentPage, totalPages);

  return (
    <div className="flex w-full items-center justify-end pt-[15px] max-[575px]:flex-col">
      <ul>
        {currentPage > 1 && (
          <li
            className="float-left mr-[5px] inline-block cursor-pointer"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <p
              className={`flex h-[32px] items-center justify-center rounded-[5px] bg-[#eee] p-[2px] px-[5px] text-center align-top text-[16px] font-light leading-[32px] text-gray-500 hover:bg-primary hover:text-[#fff] dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary dark:hover:text-white`}
            >
              <FaChevronLeft className="ml-[3px] size-[12px]" /> Prev
            </p>
          </li>
        )}

        {pages.map((page, index) =>
          page === "..." ? (
            <li
              key={index}
              className="float-left mr-[5px] inline-block cursor-default"
            >
              <span className="block w-[20px] text-center text-gray-500 dark:text-gray-400">
                ...
              </span>
            </li>
          ) : (
            <li
              key={index}
              className="float-left mr-[5px] inline-block cursor-pointer"
              onClick={() => handlePageChange(page as number)}
            >
              <p
                className={`flex h-[32px] w-[32px] items-center justify-center rounded-[5px] p-[0] text-center align-top text-[16px] font-light leading-[32px] hover:bg-primary hover:text-[#fff] dark:hover:bg-primary dark:hover:text-white ${
                  currentPage === page
                    ? "bg-primary text-[#fff] dark:bg-primary dark:text-white"
                    : "bg-[#eee] text-gray-500 dark:bg-gray-700 dark:text-gray-300"
                }`}
              >
                {page}
              </p>
            </li>
          )
        )}

        {currentPage < totalPages && (
          <li
            className="float-left inline-block cursor-pointer"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <p
              className={`flex h-[32px] items-center justify-center rounded-[5px] bg-[#eee] p-[2px] px-[5px] text-center align-top text-[16px] font-light leading-[32px] text-gray-500 hover:bg-primary hover:text-[#fff] dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary dark:hover:text-white`}
            >
              Next <FaChevronRight className="ml-[3px] size-[12px]" />
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
