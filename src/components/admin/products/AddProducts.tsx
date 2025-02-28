"use client";
import { useProduct } from "@/components/admin/products";
import { getAllCategories } from "@/services/admin/addCategoryServices";
import { Category } from "@/types/admin/category";
import { Product } from "@/types/admin/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiPencil } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

type Props = {
  closeModal: () => void;
  product?: Product;
  refresh?: () => void;
};

export default function AddProductModal({
  closeModal,
  product,
  refresh,
}: Props) {
  const {
    image,
    name,
    description,
    price,
    stockCount,
    discountPercent,
    categoryId,
    nameError,
    descriptionError,
    priceError,
    stockCountError,
    discountPercentError,
    categoryIdError,
    imageError,
    isLoading,
    handleChange,
    validateName,
    validateDescription,
    validatePrice,
    validateStockCount,
    validateDiscountPercent,
    validateCategoryId,
    onSubmit,
    chooseImage,
    handleImageChangeClick,
    fileInputRef,
  } = useProduct({ closeModal, product, refresh });

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const itemData = await getAllCategories({
          // page: currentPage,
          // size: itemsPerPage,
          // search: searchValue ? searchValue : "",
        });
        setCategories(itemData.data);
        console.log(itemData.data);
        // setTotalPages(itemData.data.totalPages);
        // setCurrentPage(itemData.data.currentPage);
      } catch (error: any) {
        toast.error(
          error.response?.data?.message || "Categories could not be fetched"
        );
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, [refresh]);

  return (
    <>
      <div className="relative z-[50]   p-2 w-full max-w-5xl mt-100">
        <div className="bg-white dark:bg-dark rounded-lg shadow-3xl">
          <div className="flex items-center justify-between p-4 md:px-5 md:py-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {product ? "Update" : "Add"} Product
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
          {/* Modal body */}
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
                      className="absolute bottom-0 right-7 bg-primary/70 text-white rounded-full p-2 cursor-pointer hover:bg-primary"
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

                  {imageError && (
                    <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                      {imageError}
                    </span>
                  )}
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
                    placeholder="Enter product name..."
                    required
                    onBlur={validateName}
                  />
                  {nameError && (
                    <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                      {nameError}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-x-2">
                    <label className="text-sm text-hardgray dark:text-lightgray font-normal">
                      Price *
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      value={price}
                      onChange={handleChange}
                      className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] ${
                        priceError
                          ? "border-danger"
                          : "border-[#eee] dark:border-gray-500"
                      }
                      `}
                      placeholder="Enter product price..."
                      required
                      onBlur={validatePrice}
                    />
                    {priceError && (
                      <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                        {priceError}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-x-2">
                    <label className="text-sm text-hardgray dark:text-lightgray font-normal">
                      Stock Count *
                    </label>
                    <input
                      type="number"
                      name="stockCount"
                      id="stockCount"
                      value={stockCount}
                      onChange={handleChange}
                      className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] ${
                        stockCountError
                          ? "border-danger"
                          : "border-[#eee] dark:border-gray-500"
                      }
                      `}
                      placeholder="Enter product stock count..."
                      required
                      onBlur={validateStockCount}
                    />
                    {stockCountError && (
                      <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                        {stockCountError}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-x-2">
                    <label className="text-sm text-hardgray dark:text-lightgray font-normal">
                      Discount Percent
                    </label>
                    <input
                      type="number"
                      name="discountPercent"
                      id="discountPercent"
                      value={discountPercent}
                      onChange={handleChange}
                      className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] ${
                        discountPercentError
                          ? "border-danger"
                          : "border-[#eee] dark:border-gray-500"
                      }
                      `}
                      placeholder="Enter product discount percent..."
                      onBlur={validateDiscountPercent}
                    />
                    {discountPercentError && (
                      <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                        {discountPercentError}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-x-2">
                    <label className="text-sm text-hardgray dark:text-lightgray font-normal">
                      Category *
                    </label>
                    <select
                      name="categoryId"
                      id="categoryId"
                      value={categoryId}
                      onChange={handleChange}
                      className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] ${
                        categoryIdError
                          ? "border-danger"
                          : "border-[#eee] dark:border-gray-500"
                      }
                      `}
                      required
                      onBlur={validateCategoryId}
                    >
                      <option value="">Select category</option>
                      {!loading &&
                        categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                    {categoryIdError && (
                      <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                        {categoryIdError}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-x-2">
                  <label className="text-sm text-hardgray dark:text-lightgray font-normal">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    value={description}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full py-[10px] px-5 items-center rounded-lg bg-form-background dark:bg-dark-form-background focus:bg-form-background-focus focus:dark:bg-dark-form-background-focus text-form-color dark:text-dark-form-color focus:outline-none border-[1px] ${
                      descriptionError
                        ? "border-danger"
                        : "border-[#eee] dark:border-gray-500"
                    }
                      `}
                    placeholder="Enter product description..."
                    required
                    onBlur={validateDescription}
                  />
                  {descriptionError && (
                    <span className="text-danger text-[12px] font-normal tracking-[0] mt-1 italic leading-[1] w-full">
                      {descriptionError}
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
