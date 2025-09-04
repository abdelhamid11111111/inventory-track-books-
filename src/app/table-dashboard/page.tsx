import React from 'react'
import { SideBar } from '../sideBar/page'
import { IoMdAdd } from "react-icons/io";
import Link from 'next/link';
import { LiaEdit } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import { GoBook } from "react-icons/go";




const TableDashboard = () => {
  return (
<div className="relative flex size-full min-h-screen flex-row group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      {/* Sidebar */}
      <SideBar/>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Books</h1>
          <Link href='table-dashboard/createBook'>
          <button 
            className="flex cursor-pointer items-center gap-2 rounded-md h-10 px-4 bg-[#137fec] text-white text-sm font-medium shadow-sm hover:bg-blue-600 transition-colors"
          >
            <IoMdAdd size={20}/>
            <span className="truncate">Add Book</span>
          </button>
          </Link>
          
        </div>


  {/* THIS CODE OF EMTY DATA */}
      {/* <main className="flex-1 p-8">
        <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
          <div className="flex flex-col items-center justify-center text-center p-12">
            <div className="rounded-full bg-gray-100 p-4 mb-4">
              <span
                className="material-symbols-outlined text-gray-500"
                style={{ fontSize: "40px" }}
              >
                <GoBook />
              </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              No books added yet
            </h2>
            <p className="text-gray-500 mb-6">
              Get started by adding your first book to the inventory.
            </p>
            <button className="flex items-center gap-2 cursor-pointer rounded-md h-10 px-4 text-white text-sm font-medium shadow-sm bg-blue-600 transition-colors">
              <IoMdAdd size={20}/>
              <span>Add your first book</span>
            </button>
          </div>
        </div>
      </main> */}
      
      {/*THIS CODE ON LOADING */}
      {/* <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                ISBN
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {[1, 2, 3, 4, 5].map((row) => (
              <tr key={row} className="animate-pulse">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-6 bg-gray-200 rounded-full w-24"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <div className="h-4 bg-gray-200 rounded w-12 inline-block"></div>
                  <div className="h-4 bg-gray-200 rounded w-16 inline-block"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

        <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
          <table className="w-full table-auto">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ISBN</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">The Secret Garden</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Frances Bennett</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">978-0140620300</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">Fiction</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$9.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <Link href='table-dashboard/editBook'>
                        <div className="flex items-center gap-2">
                            <button className="inline-flex cursor-pointer text-sm items-center px-3 py-1.5 font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-150">
                                <LiaEdit size={20}/>
                                Edit
                            </button>
                            <button className="inline-flex cursor-pointer items-center text-sm px-3 py-1.5 font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition-all duration-150">
                                <MdDeleteOutline size={20}/>
                                Delete
                            </button>
                        </div>
                    </Link>
                </td>
              </tr>
              {/* <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pride and Prejudice</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jane Austen</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">978-0141439518</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Classic</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$7.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <div className="flex items-center gap-2">
                    <button className="inline-flex text-sm items-center px-3 py-1.5 font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-150">
                        <LiaEdit size={20}/>
                        Edit
                    </button>
                    <button className="inline-flex items-center text-sm px-3 py-1.5 font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition-all duration-150">
                        <MdDeleteOutline size={20}/>
                        Delete
                    </button>
                 </div>
                </td>
              </tr> */}
              {/* <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">To Kill a Mockingbird</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Harper Lee</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">978-0061120084</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Classic</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$12.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <div className="flex items-center gap-2">
                    <button className="inline-flex text-sm items-center px-3 py-1.5 font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-150">
                        <LiaEdit size={20}/>
                        Edit
                    </button>
                    <button className="inline-flex items-center text-sm px-3 py-1.5 font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition-all duration-150">
                        <MdDeleteOutline size={20}/>
                        Delete
                    </button>
                 </div>
                </td>
              </tr> */}
              {/* <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">The Great Gatsby</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">F. Scott Fitzgerald</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">978-0743273565</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Classic</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$10.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <div className="flex items-center gap-2">
                    <button className="inline-flex text-sm items-center px-3 py-1.5 font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-150">
                        <LiaEdit size={20}/>
                        Edit
                    </button>
                    <button className="inline-flex items-center text-sm px-3 py-1.5 font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition-all duration-150">
                        <MdDeleteOutline size={20}/>
                        Delete
                    </button>
                 </div>
                </td>
              </tr> */}
              {/* <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1984</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">George Orwell</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">978-0451524935</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">Dystopian</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$8.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <div className="flex items-center gap-2">
                    <button className="inline-flex text-sm items-center px-3 py-1.5 font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-150">
                        <LiaEdit size={20}/>
                        Edit
                    </button>
                    <button className="inline-flex items-center text-sm px-3 py-1.5 font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition-all duration-150">
                        <MdDeleteOutline size={20}/>
                        Delete
                    </button>
                 </div>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </main>
      
    </div>
    )
}

export default TableDashboard