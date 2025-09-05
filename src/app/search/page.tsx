'use client'
import SearchComponent from '@/app/components/Search';
import { SideBar } from '@/src/app/components/SideBar'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdOutlineSearchOff } from "react-icons/md";



interface Book {
  id?: number;
  title: string;
  quantity: number;
  price: number;
  image: string;
  category: string
}


const SearchPage = () => {

  const router = useRouter()

  // State to hold search results
  const [books, setBooks] = useState<Book[]>([])

  // Use Next.js router for navigation
  const searchParams = useSearchParams()
  
  const [isLoading, setIsLoading] = useState(true)

  // EXTRACT QUERY PARAMETER FROM URL
  const query = searchParams.get('query') || ''

  useEffect(() => {
    const fetchSearchResults = async () => {
      if(!query) return;
      try{
        const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`)
        const data = await res.json()
        setBooks(data)
      } catch(error){
        console.error('Failed to fetch search results:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSearchResults()
  }, [query])

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Header */}
          <SearchComponent/>
          {/* NOT FOUND CASE */}
          {
            books.length === 0 &&
            <section>
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="bg-slate-100 p-6 rounded-full text-slate-500 mb-4">
                  <MdOutlineSearchOff size={70}/>
                </div>
                <h2 className="text-2xl font-semibold text-slate-800 mb-2">No Books Found</h2>
                <p className="text-slate-600">
                  Your search did not match any books. Please try a different search term.
                </p>
              </div>
            </section>
          }


      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {isLoading ? (
            // Loading Skeleton
            [...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
              >
                <div className="w-full bg-slate-200 w-48 h-[345px]"></div>
                <div className="p-4">
                  <div className="h-6 bg-slate-200 rounded w-3/4 mb-2"></div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                  </div>
                  <div className="h-6 bg-slate-200 rounded w-1/2 mt-2"></div>
                </div>
              </div>
            ))
          ) : (
            // Actual Books Data
            books.map((book) => (
              <div 
                key={book.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className="w-full bg-center bg-no-repeat w-48 h-[345px] bg-cover"
                  style={{ 
                    backgroundImage: book.image 
                      ? `url("${book.image}")` 
                      : 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACP4PBaXcAwMI7YSBLYzMiG95B4I_1jcB3mxGmVJ_MTAtr-fjzqMC1iCtottblnXYnljMU9GAGmlNvnV5ydjBuPoBP2-e29t2zp7Ad1X1PlU7v7Y256kIxxYTEyoELk5S7_Ve8rbrhW2MabnoEB4zftjjExhA-du3gEWzR9dR1Nm6MpSzMxa_hzeqtQYKVh_3Npjr-CzoWHmg8vgwK1g-SYViNSRGP7SeKNC9plOLynOU3g4CPQefLatZ0qXnH9iRXfd2uYxV5cMMf")' 
                  }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate" title={book.title}>
                    {book.title}
                  </h3>
                  <div className="flex items-center justify-between mb-4 text-gray-600 text-sm font-medium">
                    <span>Quantity: {book.quantity}</span>
                    <span>Price: ${book.price}</span>
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                    book.quantity === 0 
                    ? 'bg-red-100 text-red-800' 
                    : book.quantity < 10 
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                    }`}>
                      {book.quantity === 0 ? 'Out of Stock' : book.quantity < 10 ? 'Low Stock' : 'In Stock'}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

      </section>

        </div>
      </main>

    </div>
  )
}

export default SearchPage;
