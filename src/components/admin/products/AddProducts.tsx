export default function AddProducts({
  closeAddModal,
  openAddProduct,
}: {
  closeAddModal: () => void;
  openAddProduct: boolean;
}) {
  return (
    <>
      {openAddProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[50]">
          <div className="bg-white shadow-lg max-w-md w-full p-8 rounded-lg transform transition-all duration-300 ease-in-out scale-105">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Add New Product
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="productTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Title
                </label>
                <input
                  type="text"
                  id="productName"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price (Rs)
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter price"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="discount"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Discount (%)
                  </label>
                  <input
                    type="number"
                    id="discount"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter discount"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Image
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={closeAddModal}
                  className="px-6 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-secondary transition-colors duration-300 "
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
