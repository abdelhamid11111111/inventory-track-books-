'use client'
import React, { useEffect, useState } from 'react'
import { SideBar } from '../components/SideBar'
import { FaChartPie } from "react-icons/fa6";


interface Book {
  id?: number;
  category: string;
  quantity: number;
  price: number;
}

const Statistics = () => {

  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    const fetchedData = async () => {
      const res = await fetch('/api/books')
      const data = await res.json()
      setBooks(data)
    }
    fetchedData()
  }, [])

  const totalCopies = books.reduce((acc, book) => acc + book.quantity, 0)

  const totalValue = books.reduce((acc, book) => acc + book.quantity * book.price, 0)

  return (
        <div className="flex min-h-screen bg-gray-50 text-gray-800" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      {/* Sidebar */}
      <SideBar/>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h2 className="text-4xl font-bold tracking-tight">Statistics</h2>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500 mb-2">Total unique books</h3>
            <p className="text-3xl font-bold">{books.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500 mb-2">Total copies</h3>
            <p className="text-3xl font-bold">{totalCopies}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500 mb-2">Total inventory value</h3>
            <p className="text-3xl font-bold">{totalValue}$</p>
          </div>
        </section>

        {/* Category Distribution */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Category Distribution</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center border-2 border-dashed border-gray-200">
            <div className="inline-flex items-center justify-center pb-5 h-24 w-24 rounded-full ">
              <FaChartPie size={120}/>
            </div>
            <h3 className="text-xl font-semibold mb-2">Pie Chart Placeholder</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              This section will display a pie chart showing the distribution of books across different categories.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Statistics