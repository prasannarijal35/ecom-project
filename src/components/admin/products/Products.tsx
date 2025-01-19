"use client";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ProductData } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

export default function Products() {
  const [products, setProducts] = useState(ProductData);
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

  const handleEditProduct = (id: number) => {
    alert(`Edit product ${id}`);
  };

  return (
    <section id="admin-product" className="w-full py-10">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Admin Product Page
          </h1>
          <Link
            href="/admin/add-product"
            className="bg-primary text-white py-2 px-6 rounded-md hover:bg-secondary transition-colors"
          >
            Add Product
          </Link>
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
                        onClick={() => handleEditProduct(product.id)}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <FaEdit size={20} />
                      </button>
                      <button
                        onClick={() => confirmDelete(product)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <MdDeleteOutline size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {openDelModal && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[50]">
              <div className="bg-white shadow-lg max-w-sm w-full p-8 rounded-lg transform transition-all duration-300 ease-in-out scale-105">
                <h1 className="text-xl font-semibold text-gray-800 mb-4">
                  Are you sure you want to delete this product?
                </h1>
                <p className="text-gray-600 mb-6">{productToDel?.title}</p>
                <div className="flex justify-end space-x-4">
                  <button
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-200"
                    onClick={closeDelModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                    onClick={() => handleDeleteProduct(productToDel?.id)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-between px-3 items-start">
          <p className="mt-4">
            {" "}
            Showing page {currentPage} of {npage} pages
          </p>
          <div className="flex justify-center items-center mt-6">
            <button
              onClick={prePage}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l-lg hover:bg-gray-400 transition duration-200"
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center space-x-2 mx-4">
              {Array.from({ length: npage }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => changePage(index + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:bg-gray-300 transition duration-200`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r-lg hover:bg-gray-400 transition duration-200"
              disabled={currentPage === npage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
