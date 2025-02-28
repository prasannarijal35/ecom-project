"use client";
import { Category } from "@/types/admin/category";
import Image from "next/image";
import React from "react";
import { BiPencil } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useCategory } from ".";

type Props = {
  closeModal: () => void;
  category?: Category;
  refresh?: () => void;
};

export default function AddCategoryModal({
  closeModal,
  category,
  refresh,
}: Props) {
  const {
    image,
    name,
    nameError,
    isLoading,
    handleChange,
    validateName,
    onSubmit,
    chooseImage,
    handleImageChangeClick,
    fileInputRef,
  } = useCategory({ closeModal, category, refresh });

  return (
    <>
      <div className="relative z-[50]   p-2 w-full max-w-5xl mt-100">
        <div className="bg-white dark:bg-dark rounded-lg shadow-3xl">
          <div className="flex items-center justify-between p-4 md:px-5 md:py-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {category ? "Update" : "Add"} Category
            </h3>
            <button
              title="close"
              type="button"
              className="text-gray-500 dark:text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={closeModal}
            >
              <IoClose />
            </button>
          </div>

          <div className="p-4 md:p-5 w-full">
            <form className="" onSubmit={onSubmit}>
              <div className="flex flex-col gap-3">
                <div className="flex justify-center items-center w-auto ">
                  <div className="relative">
                    <Image
                      src={image}
                      height={200}
                      width={200}
                      className="object-cover h-[175px] w-[175px] rounded-full border-[1px] border-solid border-[#eee] dark:border-gray-500"
                      alt="User Image"
                    />
                    <div
                      className="absolute bottom-0 right-7 bg-blue-300 text-white rounded-full p-2 cursor-pointer hover:bg-skin"
                      onClick={handleImageChangeClick}
                    >
                      <BiPencil />
                    </div>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={chooseImage}
                  />
                </div>

                <div className="flex flex-col gap-x-2">
                  <label className="text-sm text-hardgray dark:text-lightgray font-normal">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] ${
                      nameError
                        ? "border-danger"
                        : "border-[#eee] dark:border-gray-500"
                    }
                `}
                    placeholder="Type category name"
                    required
                    onBlur={validateName}
                  />
                  {nameError && (
                    <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                      {nameError}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-1.5 px-3 bg-primary text-[14px] font-normal text-white rounded-md my-4"
                >
                  {isLoading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
