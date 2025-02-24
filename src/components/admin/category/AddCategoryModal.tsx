"use client";
import { useAddCategory } from "@/hooks";
import { Category } from "@/types/category";

export default function AddCategoryModal({
  closeCategoryModal,
  category,
}: {
  closeCategoryModal: () => void;
  category?: Category;
}) {
  const {
    addCategoryData,
    loading,
    categoryNameError,
    imageError,
    handleChange,
    handleSubmit,
    validateCategoryName,
    validateImage,
  } = useAddCategory({ closeCategoryModal, category });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[50]">
      <div className="bg-white shadow-lg w-full max-w-md p-8 rounded-lg transform transition-all duration-300 ease-in-out scale-105">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {category ? "Edit Category" : "Add New Category"}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="categoryName"
              className="block text-sm font-medium text-gray-700"
            >
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              value={addCategoryData.title}
              onChange={handleChange}
              onBlur={validateCategoryName}
              onFocus={validateCategoryName}
              placeholder="Enter category name"
              className={`mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                categoryNameError ? "border-red-600" : ""
              }`}
            />
            {categoryNameError && (
              <p className="text-red-500 text-xs mt-1 italic">
                {categoryNameError}
              </p>
            )}
          </div>

          {/* Image Upload Section */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              onBlur={validateImage}
              className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {imageError && (
              <p className="text-red-500 text-xs mt-1 italic">{imageError}</p>
            )}
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={closeCategoryModal}
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-secondary transition-colors duration-300"
            >
              {loading ? "Loading..." : "Confirm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
