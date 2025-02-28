"use client";
import { Product } from "@/types/admin/product";
import Image from "next/image";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useState } from "react";
import { toast } from "react-hot-toast";
import logo from "@/assets/images/logos/logo2.png";

const SingleProductItem = ({
  item,
  index,
  openDeleteModal,
  setValueInModal,
}: {
  item: Product;
  index: number;
  openDeleteModal: (product: Product) => void;
  setValueInModal: (product: Product) => void;
}) => {
  const [loading, setLoading] = useState(false);

  const openModal = async () => {
    try {
      setLoading(true);
      setValueInModal(item);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Item could not be fetched");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <tr
        key={item.id}
        className="border-b border-dashed border-gray-300 dark:border-gray-700 "
      >
        <td
          scope="row"
          className="pr-6 py-4 font-normal whitespace-nowrap text-gray-700 dark:text-gray-300 "
        >
          {index + 1}
        </td>
        <th scope="row" className="py-4 pr-6 font-normal whitespace-nowrap">
          <div className="h-[75px] w-[75px] border-[1px] border-gray-200 dark:border-gray-600">
            <Image
              width={100}
              height={100}
              alt={item.name}
              src={item.url ? item.url : logo}
              className={`h-[75px] w-[75px] rounded-sm ${
                item.url ? "object-cover cursor-pointer" : "object-cover"
              } rounded-md`}
            />
          </div>
        </th>
        <td
          scope="row"
          className="pr-6 py-4 font-normal text-gray-700 dark:text-gray-300"
        >
          <p className="w-full max-w-[300px]">{item.name}</p>
        </td>
        <td className="px-6 py-4 font-normal whitespace-nowrap text-gray-700 dark:text-gray-300">
          {new Date(item.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </td>
        <td className="px-6 py-4 font-normal whitespace-nowrap text-gray-700 dark:text-gray-300 ">
          <div className="flex gap-2 items-center">
            <button
              title="Edit"
              type="button"
              className="bg-primary p-2 text-white rounded-sm"
              onClick={openModal}
            >
              {loading ? (
                <div className="w-4 h-4 border-t-2 border-b-2 border-primary rounded-full animate-spin" />
              ) : (
                <BiEdit />
              )}
            </button>
            <button
              type="button"
              title="Delete"
              onClick={() => openDeleteModal(item)}
              className="bg-red-400 dark:bg-red-500 p-2 text-white rounded-sm"
            >
              <BiTrash />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default SingleProductItem;
