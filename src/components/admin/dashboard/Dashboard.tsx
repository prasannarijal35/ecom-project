import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="w-full px-6">
      <div className="w-full flex justify-between items-center">
        <div className="my-5">
          <h3 className="font-normal text-[17.5px] leading-5">Dashboard</h3>
          <Link
            href="/dashboard"
            className="text-[14px] text-gray-700 dark:text-gray-300"
          >
            Home
          </Link>{" "}
          <span className="text-[14px] text-gray-700 dark:text-gray-300">
            -
          </span>{" "}
          <span className="text-[14px] text-gray-700 dark:text-gray-300">
            Dashboard
          </span>
        </div>
      </div>
      <div className="mb-4 w-full overflow-x-auto">
        <div className="py-6 px-4 sm:pr-6 md:px-8 bg-white dark:bg-dark border-[1px] border-gray-200 dark:border-gray-700 rounded-md w-full flex flex-col justify-between shadow-card">
          This is the dashboard
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
