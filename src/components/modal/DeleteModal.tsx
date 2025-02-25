"use client";
import React from "react";
import { IoIosWarning } from "react-icons/io";

interface Props {
  isOpen: boolean;
  initiateDelete: () => void;
  closeModal: () => void;
  title: string;
  description: string;
}

export default function DeleteModal({
  isOpen,
  initiateDelete,
  closeModal,
  title,
  description,
}: Props) {
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  // }, [isOpen]);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] mx-auto flex h-screen w-full items-center justify-center p-[10px]">
          <div className="pointer-events-none fixed inset-0 top-0 bg-gray-800 bg-opacity-50 transition-opacity"></div>
          <div className="z-[999] max-w-[300px] rounded-md bg-white dark:bg-dark dark:border-[1px] dark:border-gray-600">
            <div className="flex w-full flex-col items-center justify-center p-6 text-center">
              <div className="icon mb-3 flex w-full items-center justify-center">
                <button
                  title="warning"
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-red-100 p-2"
                >
                  <IoIosWarning className="text-[24px] text-danger" />
                </button>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-gray-100">
                {title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {description}
              </p>
              <div className="mt-4 flex w-full items-center justify-center gap-3 capitalize">
                <button
                  className="rounded-lg bg-gray-200 dark:bg-gray-700 text-sm dark:text-gray-200 p-2 px-3 text-gray-500 transition-colors duration-300 ease-in-out hover:bg-gray-300"
                  onClick={closeModal}
                >
                  No, Keep it.
                </button>
                <button
                  className="rounded-lg bg-red-400 p-2 px-3 text-white text-sm transition-colors duration-300 ease-in-out hover:bg-danger/80"
                  onClick={() => {
                    closeModal();
                    initiateDelete();
                  }}
                >
                  Yes, delete it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
