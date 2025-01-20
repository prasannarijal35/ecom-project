import { LuArrowBigLeft, LuArrowBigRight } from "react-icons/lu";

interface Props {
  prePage: () => void;
  nextPage: () => void;
  changePage: (pageNumber: number) => void;
  currentPage: number;
  npage: number;
}

export default function ProductPagination({
  prePage,
  nextPage,
  currentPage,
  changePage,
  npage,
}: Props) {
  return (
    <div className="flex justify-between px-3 items-start">
      <p className="text-[14px] mt-2">
        Showing page <span className="text-primary">{currentPage} </span>of{" "}
        {npage} pages
      </p>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={prePage}
          className="px-3 py-1 bg-gray-300 text-gray-700 rounded-l-lg hover:bg-gray-400 transition duration-200"
          disabled={currentPage === 1}
        >
          <LuArrowBigLeft size={20} />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-2 mx-4">
          {Array.from({ length: npage }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => changePage(index + 1)}
              className={`px-3 py-1 rounded-lg ${
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
          className="px-3 py-1 bg-gray-300 text-gray-700 rounded-r-lg hover:bg-gray-400 transition duration-200"
          disabled={currentPage === npage}
        >
          <LuArrowBigRight size={20} />
        </button>
      </div>
    </div>
  );
}
