"use client";
import { Product } from "@/types/admin/product";
import { useEffect, useState } from "react";
import { DeleteModal, Modal } from "@/components/modal";
import { toast } from "react-hot-toast";
import { getAllProducts } from "@/services/admin/addProductServices";
import myAxios from "@/services/apiServices";
import SingleProductItem from "./SingleProductItem";
import AddProductModal from "./AddProducts";

const ProductTable = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [singleItem, setSingleItem] = useState<Product | null>(null);

  const openModal = () => setShowModal(true);

  const setValueInModal = (product: Product) => {
    setSingleItem(product);
    openModal();
  };

  const closeModal = () => {
    setSingleItem(null);
    setShowModal(false);
  };

  const openDeleteModal = (product: Product) => {
    setSingleItem(product);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSingleItem(null);
    setShowDeleteModal(false);
  };

  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [refresh, setRefresh] = useState<boolean>(false);
  const refreshPage = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const itemData = await getAllProducts({
          //page:currentPage,
          //sixe: itemsPerPage;
          //search: searchValue? searchValue: "",
        });
        setItems(itemData.data);
      } catch (error: any) {
        setErrorMessage(
          error.response?.data?.message || "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [refresh]);

  const handleDeleteProduct = async () => {
    if (!singleItem) return;

    toast.promise(
      myAxios.delete(`/products/${singleItem.id}`).then(() => {
        setItems((prevProducts) =>
          prevProducts.filter((product) => product.id !== singleItem.id)
        );
        refreshPage();
        closeDeleteModal();
      }),
      {
        loading: "Deleting product...",
        success: "Product deleted successfully!",
        error: "Failed to delete product.",
      },
      {
        id: "toast",
      }
    );
  };

  return (
    <>
      <div className="flex gap-3 flex-wrap justify-end my-4">
        <button
          className="py-2 px-3 bg-primary text-[14px] font-normal text-white rounded-md"
          onClick={openModal}
        >
          Add Product
        </button>
      </div>

      <div className="relative overflow-x-auto my-5">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs uppercase border-b border-solid border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-normal">
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
                    <div className="w-4 h-4 border-2 border-y-primary border-x-secondary rounded-full animate-spin" />
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
                <SingleProductItem
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

      <Modal isOpen={showModal}>
        <AddProductModal
          closeModal={closeModal}
          product={singleItem ?? undefined}
          refresh={refreshPage}
        />
      </Modal>

      <DeleteModal
        isOpen={showDeleteModal}
        closeModal={closeDeleteModal}
        title="Delete product"
        description={`Are you sure you want to delete the product "${
          singleItem?.name || ""
        }"?`}
        initiateDelete={handleDeleteProduct}
      />
    </>
  );
};

export default ProductTable;
