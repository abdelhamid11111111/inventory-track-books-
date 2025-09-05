'use client'
import { SideBar } from '@/src/app/components/SideBar';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const AddBook = () => {

    const [book, setBook] = useState({
        title: '',
        author: '',
        ISBN: '',
        category: '',
        quantity: '',
        price: '',
        image: ''
    })
    const route = useRouter()
    const [error, setError] = useState<string | null>(null)



    const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try{
            const response = await fetch('/api/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        })

            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error || 'Failed to add book');
            }

        toast.success('Book Added Successfully!');
        // Add a small delay before navigation to allow toast to show
        setTimeout(() => {
            route.push('/dashboard');
        }, 1000);
        } catch(error){
          console.error('server error:', error);
          setError(error instanceof Error ? error.message : 'Failed to add book')
        }
    }


  return (
    <>
  {/* <Toaster position="top-center" /> */}
  <div
    className="relative flex min-h-screen flex-col overflow-x-hidden bg-gray-50"
    style={{ fontFamily: "Inter, 'Noto Sans', sans-serif", "--primary-color": "#137fec" } as React.CSSProperties}
  >
    <div className="flex h-full w-full">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="px-12 py-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Add New Book</h2>
          <div className="rounded-xl border border-gray-300 bg-white p-10 shadow-lg transition-shadow hover:shadow-xl">
            {error && (
              <div className="mb-6 rounded-md border border-red-300 bg-red-50 px-5 py-3 text-center text-sm font-medium text-red-700">
                {error}
              </div>
            )}
            <form className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="block">
                  <span className="mb-2 block text-lg font-semibold text-gray-700">Title</span>
                  <input
                    onChange={(e) => setBook({ ...book, title: e.target.value })}
                    value={book.title}
                    type="text"
                    placeholder="Enter book title"
                    className="form-input w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-base shadow-sm transition duration-150 ease-in-out focus:border-[var(--primary-color)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    autoComplete="off"
                    style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
                  />
                </label>
              </div>

              <div>
                <label className="block">
                  <span className="mb-2 block text-lg font-semibold text-gray-700">Author</span>
                  <input
                    onChange={(e) => setBook({ ...book, author: e.target.value })}
                    value={book.author}
                    type="text"
                    placeholder="Enter author's name"
                    className="form-input w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-base shadow-sm transition duration-150 ease-in-out focus:border-[var(--primary-color)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    autoComplete="off"
                    style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
                  />
                </label>
              </div>

              <div>
                <label className="block">
                  <span className="mb-2 block text-lg font-semibold text-gray-700">ISBN</span>
                  <input
                    onChange={(e) => setBook({ ...book, ISBN: e.target.value })}
                    value={book.ISBN}
                    type="text"
                    placeholder="Enter ISBN"
                    className="form-input w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-base shadow-sm transition duration-150 ease-in-out focus:border-[var(--primary-color)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    autoComplete="off"
                    style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
                  />
                </label>
              </div>

              <div>
                <label className="block">
                  <span className="mb-2 block text-lg font-semibold text-gray-700">Category</span>
                  <select
                    onChange={(e) => setBook({ ...book, category: e.target.value })}
                    value={book.category}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-base shadow-sm appearance-none cursor-pointer transition duration-150 ease-in-out focus:border-[var(--primary-color)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    <option value="fiction">Fiction</option>
                    <option value="nonfiction">Non-Fiction</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                  </select>
                </label>
              </div>

              <div>
                <label className="block">
                  <span className="mb-2 block text-lg font-semibold text-gray-700">Quantity</span>
                  <input
                    onChange={(e) => setBook({ ...book, quantity: e.target.value })}
                    value={book.quantity}
                    type="number"
                    placeholder="Enter quantity"
                    min="0"
                    className="form-input w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-base shadow-sm transition duration-150 ease-in-out focus:border-[var(--primary-color)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
                  />
                </label>
              </div>

              <div>
                <label className="block">
                  <span className="mb-2 block text-lg font-semibold text-gray-700">Price</span>
                  <input
                    onChange={(e) => setBook({ ...book, price: e.target.value })}
                    value={book.price}
                    type="number"
                    placeholder="Enter price"
                    min="0"
                    step="0.01"
                    className="form-input w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-base shadow-sm transition duration-150 ease-in-out focus:border-[var(--primary-color)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
                  />
                </label>
              </div>

              <div className="md:col-span-2">
                <label className="block">
                  <span className="mb-2 block text-lg font-semibold text-gray-700">Image URL</span>
                  <input
                    onChange={(e) => setBook({ ...book, image: e.target.value })}
                    value={book.image || ""}
                    type="url"
                    placeholder="Enter image URL"
                    className="form-input w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-base shadow-sm transition duration-150 ease-in-out focus:border-[var(--primary-color)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    autoComplete="off"
                    style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
                  />
                </label>
              </div>

              <div className="flex justify-end md:col-span-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="rounded-lg cursor-pointer bg-[var(--primary-color)] px-8 py-3 text-lg font-semibold text-white shadow-md transition-colors duration-200 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</>

  );
}

export default AddBook