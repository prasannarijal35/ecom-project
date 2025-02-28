import Link from "next/link";
import ProductTable from "./ProductTable";

const Products = () => {
  return (
    <div className="w-full">
      <div className="my-5">
        <h3 className="font-normal text-[17.5px] leading-5">Products</h3>
        <Link
          href="/admin/dashboard"
          className="text-[14px] text-gray-700 dark:text-gray-300"
        >
          Home
        </Link>
        <span className="text-[14px] text-gray-700 dark:text-gray-300"> -</span>{" "}
        <span className="text-[14px] text-gray-700 dark:text-gray-300">
          Products
        </span>
      </div>
      <div className="mb-4 w-full overflow-x-auto">
        <div className="py-6 px-4 sm:px-6 md:px-8 bg-white dark:bg-dark border-[1px] border-gray-200 dark:border-gray-700 rounded-md w-full flex flex-col justify-between shadow-card">
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default Products;
