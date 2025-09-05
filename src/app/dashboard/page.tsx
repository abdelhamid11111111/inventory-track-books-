'use client'
import React, { useState, useEffect } from 'react';
import { SideBar } from '../components/SideBar';
import { IoMdAdd } from "react-icons/io";
import Link from 'next/link';
import { LiaEdit } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';


interface Book {
  id?: number;
  title: string;
  author: string;
  ISBN: string;
  category: string;
  quantity: number;
  price: number;
}

const TableDashboard = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRouter()

  // FUNCTION FOR READ DATA
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch('/api/books');
        if (!res.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

    // Define a map of category → color classes
    const categoryColors: Record<string, string> = {
      FICTION: "bg-blue-100 text-blue-800",
      NONFICTION: "bg-green-100 text-green-800",
      HISTORY: "bg-yellow-100 text-yellow-800",
      SCIENCE: "bg-purple-100 text-purple-800",
      default: "bg-gray-100 text-gray-800", // fallback if no match
    };    
    
  // FUNCTION FOR DELETE DATA
  const handleDelete = async (id: number | undefined) => {
    try{
      const res = await fetch(`/api/books/${id}`,{
        method: 'DELETE'
      })

      if (!res.ok) {
        throw new Error('Failed to delete task');
      }

      toast.success('Book deleted successfully!');
      setBooks(books.filter(prev => prev.id !== id))
    } catch(error){
      console.error('Delete error:', error);
      
    }
  }

  return (
      <>
      <Toaster position="top-center" />
    <div
      className="relative flex size-full min-h-screen flex-row group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Books</h1>
          <Link href="dashboard/book">
            <button className="flex cursor-pointer items-center gap-2 rounded-md h-10 px-4 bg-[#137fec] text-white text-sm font-medium shadow-sm hover:bg-blue-600 transition-colors">
              <IoMdAdd size={20} />
              <span className="truncate">Add Book</span>
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
          {isLoading ? (
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
            </div>
          ) : books.length === 0 ? (
            <main className="flex-1 p-8">
              {/* <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200"> */}
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
                    <IoMdAdd size={20} />
                    <Link href="dashboard/book">
                      <span>Add your first book</span>
                    </Link>
                  </button>
                </div>
              {/* </div> */}
            </main>
          ) : (
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
                  {books.map((book) => (
                    <tr key={book.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {book.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {book.author}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {book.ISBN}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${categoryColors[book.category] || categoryColors.default}`}>
                          {book.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {book.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {book.price}$
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <div className="flex items-center gap-2">
                          <Link href={`dashboard/book/${book.id}`}>
                            <button 
                              className="inline-flex cursor-pointer text-sm items-center px-3 py-1.5 font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 hover:border-blue-300 outline-none  transition-all duration-150">
                              <LiaEdit size={20} />
                              Edit
                            </button>
                          </Link>
                            <button 
                              onClick={() => handleDelete(book.id)}
                              className="inline-flex cursor-pointer items-center text-sm px-3 py-1.5 font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 hover:border-red-300 outline-none  transition-all duration-150">
                                <MdDeleteOutline size={20} />
                                Delete
                            </button>
                          </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
    </>
  );
};

export default TableDashboard;
