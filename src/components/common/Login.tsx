export default function Login({
  closeLoginModal,
}: {
  closeLoginModal: () => void;
}) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center p-4 overflow-auto z-[1]">
      {/* Backdrop */}
      <div
        className="fixed top-0 w-screen h-screen left-0 bg-black bg-opacity-40 backdrop-blur-sm z-[0]"
        onClick={closeLoginModal}
      ></div>

      {/* Modal */}
      <div className="relative bg-white shadow-lg w-full max-w-md p-8 z-[1] rounded-lg">
        {/* Modal header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Login</h2>
          <button className="text-gray-500" onClick={closeLoginModal}>
            &times;
          </button>
        </div>

        {/* Login form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white bg-opacity-40 text-white"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white bg-opacity-40 text-white"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
