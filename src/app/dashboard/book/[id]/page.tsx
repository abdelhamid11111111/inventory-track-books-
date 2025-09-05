'use client'
import { SideBar } from '@/src/app/components/SideBar';
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';




interface Book {
  id?: number;
  title: string;
  author: string;
  ISBN: string;
  category: string;
  quantity: string | number;
  price: string | number;
  image: string;
}

const UpdateBook = () => {

  const [book, setBook] = useState<Book>({
        title: '',
        author: '',
        ISBN: '',
        category: '',
        quantity: '',
        price: '',
        image: ''
    })
  const params = useParams()
  const id = params.id
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()


  useEffect(() => {
    const fetchData = async () => {
      try{
          const res = await fetch(`/api/books/${id}`)
          if (!res.ok) {
            throw new Error('Failed to fetch book');
          }
          const data = await res.json()
          setBook({
            title: data.title || '',
            author: data.author || '',
            ISBN: data.ISBN || '',
            category: data.category || '',
            quantity: data.quantity?.toString() || '',
            price: data.price?.toString() || '',
            image: data.image?.toString() || ''
          })
      } catch(error){
        console.error('Error fetching book:', error)
        setError(error instanceof Error ? error.message : 'Failed to fetch book')
      }

    }    
    if(id){
      fetchData()
    }
  }, [id])


  const handleUpdate = async (e: React.MouseEvent) => {
    e.preventDefault(); 
        if (!book.title?.trim() || 
        !book.author?.trim() || 
        !book.ISBN?.trim() || 
        !book.category?.trim() || 
        !book.quantity || 
        !book.price
    ) {
        setError('All fields are required');
        return; // Stop execution if validation fails
    }
    try{
      const res = await fetch(`/api/books/${id}`,{
        method: 'PUT',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({ book })
      })

      if(!res.ok){
        throw new Error('Failed to update book')
      }

      toast.success('Book Updated Successfully!'); 
      router.push('/dashboard')
    } catch (error) {
    console.error('Error updating book:', error);
    setError(error instanceof Error ? error.message : 'Failed to update book');
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
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Update Book</h2>
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
                  onClick={handleUpdate}
                  className="rounded-lg cursor-pointer bg-[var(--primary-color)] px-8 py-3 text-lg font-semibold text-white shadow-md transition-colors duration-200 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
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
</>

  );
}

export default UpdateBook
