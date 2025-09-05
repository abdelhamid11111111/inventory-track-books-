'use client'
import { SideBar } from '@/src/app/components/SideBar';
import React, { useEffect, useState } from 'react'
import SearchComponent from '../components/Search';




interface Book {
  id?: number;
  title: string;
  quantity: number;
  price: number;
  image: string;
  category: string
}

const SearchFilterPage = () => {

  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeGenre, setActiveGenre] = useState("All");
  const genres = ['All', 'Fiction', 'NonFiction', 'Science', 'History']
  const [filteredBook, setFilteredBook] = useState<Book[]>([])


  // FUNCTION FOR DISPLAY DATA
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch('/api/books');
        if (!res.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await res.json();
        setBooks(data);
        setFilteredBook(data)
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

  // FUNCTION FOR FILTRING
  const handleFilter = async(genre: string) => {
    setActiveGenre(genre)
    if(genre === 'All'){
      setFilteredBook(books)
    } else{
      setFilteredBook(books.filter(book => book.category.toLocaleLowerCase() === genre.toLocaleLowerCase()))
    }
  }

    
 return (
  <div className="flex h-screen">
  <SideBar />
  <main className="flex-1 p-8 overflow-y-auto">
    <div className="max-w-7xl mx-auto">
      <SearchComponent />
      
      <section className="mb-8">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
          {
            genres.map((genre) => (
                <button key={genre} 
                onClick={() => handleFilter(genre)}
                className={
                  // CHECK activeGenre HAS VALUE TO CUSTOMIZE bg AND text-color
                  activeGenre === genre 
                  ? "px-4 cursor-pointer py-2 text-sm font-medium text-white rounded-full shadow-sm bg-blue-600 transition-colors"
                  : "px-4 cursor-pointer py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full shadow-sm hover:bg-slate-50 transition-colors"}>
                  {genre}
                </button>
              
            ))
          }
          </div>
        </div>
      </section>

      {/* Books Grid Section */}
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
            filteredBook.map((book) => (
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

        {/* Empty State */}
        {!isLoading && books.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📚</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No books found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </section>
    </div>
  </main>
</div>
);

}

export default SearchFilterPage 
