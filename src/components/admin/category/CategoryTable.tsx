"use client";
import { Category } from "@/types/admin/category";
// import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
// import { Pagination } from "@/components/common";
import { Modal } from "@/components/modal";
import { getAllCategories } from "@/services/admin/addCategoryServices";
import {
  AddCategoryModal,
  SingleCategoryItem,
} from "@/components/admin/category";
import { DeleteModal } from "@/components/modal";
import { toast } from "react-hot-toast";
import myAxios from "@/services/apiServices";

const CategoryTableComponent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [singleItem, setSingleItem] = useState<Category | null>(null);

  const openModal = () => setShowModal(true);

  const setValueInModal = (category: Category) => {
    setSingleItem(category);
    openModal();
  };

  const closeModal = () => {
    setSingleItem(null);
    setShowModal(false);
  };

  const openDeleteModal = (category: Category) => {
    setSingleItem(category);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSingleItem(null);
    setShowDeleteModal(false);
  };

  const [items, setItems] = useState<Category[]>([]);
  // const currentpage = useSearchParams().get("page");
  // const [currentPage, setCurrentPage] = useState<number>(
  //   currentpage ? parseInt(currentpage!) : 1
  // );
  // const size = useSearchParams().get("size");
  // const itemsPerPage = size ? parseInt(size) : 10;
  // const [totalPages, setTotalPages] = useState<number>(0);
  // const searchValue = useSearchParams().get("search");
  const [refresh, setRefresh] = useState<boolean>(false);
  const refreshPage = () => {
    setRefresh(!refresh);
  };

  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const itemData = await getAllCategories({
          // page: currentPage,
          // size: itemsPerPage,
          // search: searchValue ? searchValue : "",
        });
        setItems(itemData.data);
        // setTotalPages(itemData.data.totalPages);
        // setCurrentPage(itemData.data.currentPage);
      } catch (error: any) {
        setErrorMessage(
          error.response?.data?.message || "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, [refresh]);
  // }, [searchValue, refresh, currentPage, itemsPerPage]);

  // const handlePageChange = async (pageNumber: number) => {
  //   setCurrentPage(pageNumber);
  // };

  const handleDeleteCategory = async () => {
    if (!singleItem) return;

    toast.promise(
      myAxios.delete(`/categories/${singleItem.id}`).then(() => {
        setItems((prevCategories) =>
          prevCategories.filter((categories) => categories.id !== singleItem.id)
        );
        refreshPage();
        closeDeleteModal();
      }),
      {
        loading: "Deleting category...",
        success: "Category deleted successfully!",
        error: "Failed to delete category.",
      },
      {
        id: "toast",
      }
    );
  };

  return (
    <>
      <div className="flex gap-3 flex-wrap justify-end my-4">
        <div>
          <button
            className="py-2 px-3 bg-primary text-[14px] font-normal text-white rounded-md"
            onClick={openModal}
          >
            Add Category
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto my-5">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs uppercase border-b border-dashed border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-normal">
            <tr>
              <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                S.N.
              </th>
              <th scope="col" className="py-3 whitespace-nowrap  pr-6">
                Image
              </th>
              <th scope="col" className="pr-6 py-3 whitespace-nowrap">
                Title
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  scope="row"
                  colSpan={5}
                  className="pr-6 py-4 font-normal whitespace-nowrap text-gray-700 dark:text-gray-300"
                >
                  <div className="min-h-[100px] flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-lg italic text-sm font-medium">
                    <div className="w-4 h-4 border-2 border-y-primary border-x-secondary  rounded-full animate-spin" />
                  </div>
                </td>
              </tr>
            ) : errorMessage ? (
              <tr>
                <td
                  scope="row"
                  colSpan={5}
                  className="pr-6 py-4 font-normal whitespace-nowrap text-gray-700 dark:text-gray-300"
                >
                  <div className="min-h-[100px] flex justify-center items-center bg-danger/30 rounded-lg italic text-sm">
                    <p className="text-center text-danger font-medium">
                      {errorMessage}
                    </p>
                  </div>
                </td>
              </tr>
            ) : items.length > 0 ? (
              items.map((item, index) => (
                <SingleCategoryItem
                  item={item}
                  index={index}
                  key={item.id}
                  openDeleteModal={openDeleteModal}
                  setValueInModal={setValueInModal}
                />
              ))
            ) : (
              <tr>
                <td
                  scope="row"
                  colSpan={5}
                  className="pr-6 py-4 font-normal whitespace-nowrap text-gray-700 dark:text-gray-300"
                >
                  <div className="min-h-[100px] flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-lg italic text-sm font-medium">
                    No data found!
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )} */}

      <Modal isOpen={showModal}>
        <AddCategoryModal
          closeModal={closeModal}
          refresh={refreshPage}
          category={singleItem ?? undefined}
        />
      </Modal>

      <DeleteModal
        isOpen={showDeleteModal}
        closeModal={closeDeleteModal}
        title="Delete category"
        description={`Are you sure you want to delete the category "${
          singleItem?.name || ""
        }"?`}
        initiateDelete={handleDeleteCategory}
      />
    </>
  );
};

export default function CategoryTable() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryTableComponent />
    </Suspense>
  );
}
