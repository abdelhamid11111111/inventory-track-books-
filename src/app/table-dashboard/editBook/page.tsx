import { SideBar } from '@/app/sideBar/page';
import React from 'react'

const UpdateBook = () => {


  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden" style={{ fontFamily: "Inter, 'Noto Sans', sans-serif", "--primary-color": "#137fec" } as React.CSSProperties}>
      <div className="flex h-full w-full">
        {/* Sidebar */}
        <SideBar/>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="px-10 py-8">
            <h2 className="text-3xl font-bold text-gray-800">Update New Book</h2>
            <div className="mt-8 rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="block">
                    <span className="text-base font-medium text-gray-700">Title</span>
                    <input
                      type="text"
                      placeholder="Enter book title"
                      className="form-input mt-1 p-2.5 border-1 outline-none block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring focus:ring-[var(--primary-color)] focus:ring-opacity-50"
                    />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="text-base font-medium text-gray-700">Author</span>
                    <input
                      type="text"
                      placeholder="Enter author's name"
                      className="form-input mt-1 p-2.5 outline-none border-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring focus:ring-[var(--primary-color)] focus:ring-opacity-50"
                    />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="text-base font-medium text-gray-700">ISBN</span>
                    <input
                      type="text"
                      placeholder="Enter ISBN"
                      className="form-input p-2.5 outline-none border-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring focus:ring-[var(--primary-color)] focus:ring-opacity-50"
                    />
                  </label>
                </div>
                <div>
                <label className="block">
                    <span className="text-base font-medium text-gray-700">Category</span>
                    <div className="relative">
                      <select className="mt-1 block w-full rounded-md outline-none p-2.5 border border-gray-300 shadow-sm focus:border-[#137fec] focus:outline-none focus:ring-1 focus:ring-[#137fec] bg-white appearance-none cursor-pointer">
                        <option value="">Select category</option>
                        <option value="fiction">Fiction</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="science">Science</option>
                        <option value="history">History</option>
                      </select>
                    </div>
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="text-base font-medium text-gray-700">Quantity</span>
                    <input
                      type="number"
                      placeholder="Enter quantity"
                      className="form-input mt-1 p-2.5 outline-none border-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring focus:ring-[var(--primary-color)] focus:ring-opacity-50"
                    />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <span className="text-base font-medium text-gray-700">Price</span>
                    <input
                      type="number"
                      placeholder="Enter price"
                      className="form-input mt-1 p-2.5 outline-none border-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring focus:ring-[var(--primary-color)] focus:ring-opacity-50"
                    />
                  </label>
                </div>
                <div className="flex justify-end md:col-span-2">
                  <button
                    type="submit"
                    className="rounded-md bg-[var(--primary-color)] px-6 py-2 text-base font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UpdateBook
