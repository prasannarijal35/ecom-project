"use client";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import CategoryPagination from "./CategoryPagination";
import AddCategoryModal from "./AddCategoryModal";
import { GoAlertFill } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { Category as Catdata } from "@/types/category";
import { CategoryData } from "@/data/category";
import Image from "next/image";

export default function Categories() {
  const [categories, setCategories] = useState<Catdata[]>(CategoryData);
  const [openDelModal, setOpenDelModal] = useState<boolean>(false);
  const [categoryToDel, setCategoryToDel] = useState<any>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 4;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const currentCategories = categories.slice(firstIndex, lastIndex);
  const npage = Math.ceil(categories.length / recordPerPage);

  const prePage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage < npage) setCurrentPage(currentPage + 1);
  };
  const changePage = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const confirmDelete = (category: any) => {
    setOpenDelModal(true);
    setCategoryToDel(category);
  };

  const closeDelModal = () => {
    setOpenDelModal(false);
    setCategoryToDel(null);
  };

  const handleDeleteCategory = (id: any) => {
    setCategories(categories.filter((item) => item.id !== id));
    setOpenDelModal(false);
  };

  const [categoryModal, setCategoryModal] = useState<boolean>(false);

  const openCategoryModal = () => {
    setCategoryModal(true);
  };
  const closeCategoryModal = () => {
    setCategoryModal(false);
    setEditCategory(undefined);
  };

  const [editCategory, setEditCategory] = useState<Catdata | undefined>(
    undefined
  );

  const handleEdit = (category: Catdata) => {
    setEditCategory(category);
    openCategoryModal();
  };

  return (
    <section id="admin-category" className="w-full py-6">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[17px] font-medium text-gray-600">
            Admin Category Page
          </h1>
          <button
            className="bg-primary text-white py-1 px-4 rounded-md hover:bg-secondary transition-colors font-sm text-[14px]"
            onClick={openCategoryModal}
          >
            Add Category
          </button>
        </div>

        <div className=" bg-white rounded-lg shadow-md overflow-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                  Category Name
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                  Category Image
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentCategories.map((category) => (
                <tr key={category.id} className="border-b">
                  <td className="py-4 px-4 text-sm text-gray-700">
                    {category.title}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700">
                    <Image
                      src={category.image}
                      width={60}
                      height={60}
                      alt="image"
                      className="object-cover w-16 h-16 bg-gray-200 rounded-sm"
                    />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleEdit(category)}
                        className="text-white bg-blue-500 transition-colors p-1"
                      >
                        <CiEdit size={16} />
                      </button>
                      <button
                        onClick={() => confirmDelete(category)}
                        className="text-white bg-red-500 hover:text-red-800 transition-colors p-1"
                      >
                        <MdDeleteOutline size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {openDelModal && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[50]">
              <div className="bg-white shadow-lg max-w-sm w-full py-6 px-2 rounded-lg transform transition-all duration-300 ease-in-out scale-105">
                <div className="flex justify-center items-center">
                  <div className="bg-red-300 rounded-full text-red-500 flex justify-center items-center text-center p-4">
                    <GoAlertFill size={25} />
                  </div>
                </div>
                <h1 className="text-lg font-semibold text-gray-800 mb-4 text-center mt-2">
                  Delete Category
                </h1>
                <p className="text-gray-600 mb-6 text-center text-[14px]">
                  Are you sure you want to delete the category &nbsp;&quot;
                  {categoryToDel?.name} ?&quot;
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <button
                    className="px-3 py-1 bg-gray-300 text-[14px] text-gray-800 rounded-lg hover:bg-gray-400 transition duration-200"
                    onClick={closeDelModal}
                  >
                    No, Keep it.
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-[14px] text-white rounded-lg hover:bg-red-600 transition duration-200"
                    onClick={() => handleDeleteCategory(categoryToDel?.id)}
                  >
                    Yes, delete it.
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {categories.length > 0 && (
          <CategoryPagination
            prePage={prePage}
            currentPage={currentPage}
            nextPage={nextPage}
            npage={npage}
            changePage={changePage}
          />
        )}

        {categoryModal && (
          <AddCategoryModal
            closeCategoryModal={closeCategoryModal}
            category={editCategory}
          />
        )}
      </div>
    </section>
  );
}
