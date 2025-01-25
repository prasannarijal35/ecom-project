"use client";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { ProductData } from "@/data/products";
import Image from "next/image";
import ProductPagination from "./ProductPagination";
import AddProducts from "./AddProducts";
import { GoAlertFill } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { Product } from "@/types/product";

export default function Products() {
  const [products, setProducts] = useState<Product[]>(ProductData);
  const [openDelModal, setOpenDelModal] = useState<boolean>(false);
  const [productToDel, setProductToDel] = useState<any>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 4;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const currentProducts = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordPerPage);

  const prePage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage < npage) setCurrentPage(currentPage + 1);
  };
  const changePage = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const confirmDelete = (product: any) => {
    setOpenDelModal(true);
    setProductToDel(product);
  };

  const closeDelModal = () => {
    setOpenDelModal(false);
    setProductToDel(null);
  };

  const handleDeleteProduct = (id: any) => {
    setProducts(products.filter((item) => item.id !== id));
    setOpenDelModal(false);
  };

  const [openAddProduct, setOpenAddProduct] = useState<boolean>(false);
  const openAddModal = () => {
    setOpenAddProduct(true);
  };
  const closeAddModal = () => {
    setEditProduct(undefined);
    setOpenAddProduct(false);
  };

  const [editProduct, setEditProduct] = useState<Product | undefined>(
    undefined
  );

  const handleEdit = (product: Product) => {
    setEditProduct(product);
    setOpenAddProduct(true);
  };

  return (
    <section id="admin-product" className="w-full py-6">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[17px] font-medium text-gray-600">
            Admin Product Page
          </h1>
          <button
            className="bg-primary text-white py-1 px-4 rounded-md hover:bg-secondary transition-colors font-sm text-[14px]"
            onClick={openAddModal}
          >
            Add Product
          </button>
        </div>

        <div className=" bg-white rounded-lg shadow-md overflow-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                  Image
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                  Product Name
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                  Price
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                  Discount
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="py-4 px-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      height={100}
                      width={100}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700">
                    {product.title}
                  </td>

                  <td className="py-4 px-4 text-sm text-gray-700">
                    Rs.
                    {product.price - (product.price * product.discount) / 100}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-500">
                    {product.discount > 0
                      ? `${product.discount}%`
                      : "No Discount"}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleEdit(product)}
                        className="text-white bg-blue-500  transition-colors p-1"
                      >
                        <CiEdit size={16} />
                      </button>
                      <button
                        onClick={() => confirmDelete(product)}
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
                  Delete Service
                </h1>
                <p className="text-gray-600 mb-6 text-center text-[14px]">
                  Are you sure you want to delete the product &nbsp;&quot;
                  {productToDel?.title} ?&quot;
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
                    onClick={() => handleDeleteProduct(productToDel?.id)}
                  >
                    Yes, delete it.
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {products.length > 0 && (
          <ProductPagination
            prePage={prePage}
            currentPage={currentPage}
            nextPage={nextPage}
            npage={npage}
            changePage={changePage}
          />
        )}

        {openAddProduct && (
          <AddProducts closeAddModal={closeAddModal} product={editProduct} />
        )}
      </div>
    </section>
  );
}
