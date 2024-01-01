import Link from "next/link";
import { FiCloud, FiGrid, FiList, FiSettings } from "react-icons/fi";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <div className="page_banner h-40 relative grid place-content-end bg-cover bg-center bg-no-repeat">
        <p className=" text-white text-2xl font-semibold pt-5 blur-none">
          Dashboard
        </p>
      </div>
      <div className=" flex">
        <div className=" w-48 bg-white border-r-[1px] rounded-md">
          <ul className="menu w-full rounded-box pb-60">
            <li className=" border rounded-md shadow-md mt-2 mb-2 hover:bg-gradient-to-r from-green-300 to-lime-300">
              <Link href="/dashboard">
                <FiGrid/>
                Dashboard
              </Link>
            </li>
            <li className=" border rounded-md shadow-md mt-2 mb-2 hover:bg-gradient-to-r from-green-300 to-lime-300">
              <Link href="/dashboard/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Profile
              </Link>
            </li>
            <li className=" border rounded-md shadow-md mt-2 mb-2 hover:bg-gradient-to-r from-green-300 to-lime-300">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                History
              </a>
            </li>
            <li className=" border rounded-md shadow-md mt-2 mb-2 hover:bg-gradient-to-r from-green-300 to-lime-300">
              <Link href="/dashboard/orderList">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Order List
              </Link>
            </li>
            <li className=" border rounded-md shadow-md mt-2 mb-2 hover:bg-gradient-to-r from-green-300 to-lime-300">
                <Link href="/dashboard/projectList" >
                  <FiList/>
                  Project List
                </Link>
            </li>
            <li className=" border rounded-md shadow-md mt-2 mb-2 hover:bg-gradient-to-r from-green-300 to-lime-300">
                <Link href="/dashboard/productList" >
                  <FiList/>
                  Product List
                </Link>
            </li>
            <li className=" border rounded-md shadow-md mt-2 mb-2 hover:bg-gradient-to-r from-green-300 to-lime-300">
                <Link href="/dashboard/eventList" >
                  <FiList/>
                  Event List
                </Link>
            </li>
          </ul>
        </div>
        <main className="w-full my-5 mx-10"> {children}</main>
      </div>
    </section>
  );
}
