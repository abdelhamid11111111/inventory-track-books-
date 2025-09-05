"use client" 

import { Pie, PieChart, Cell } from "recharts"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useEffect, useState } from "react"



interface Book {
  id?: number        
  category: string   
  quantity: number   
  price: number
}

export function ChartPieLegend() {
  
  const [books, setBooks] = useState<Book[]>([])

  // State: transformed data for the chart (category, count of unique books, color)
  const [chartData, setChartData] = useState<
    { category: string; count: number; fill: string }[]
  >([])

  // Predefined colors for the pie chart slices (one per category)
  const chartColors = ["#6ee7b7", "#93c5fd", "#fde68a", "#d8b4fe"]

  // Effect: fetch data once on mount
  useEffect(() => {
    const fetchBooks = async () => {
      // Fetch all books from /api/books (your API route)
      const res = await fetch("/api/books")
      const data: Book[] = await res.json()
      setBooks(data)

      // Group books by category → we want *unique* book counts per category
      const grouped: Record<string, Set<number | undefined>> = {}

      data.forEach(book => {
        // Initialize a set for each category if it doesn't exist
        if (!grouped[book.category]) grouped[book.category] = new Set()

        // Add book.id into the set → ensures uniqueness (no duplicates)
        if (book.id !== undefined) grouped[book.category].add(book.id)
      })

      // Convert grouped data into chartData (category, unique count, color)
      const mapped = Object.entries(grouped).map(
        ([category, idSet], index) => ({
          category,                        // category name
          count: idSet.size,               // number of unique books in this category
          fill: chartColors[index % chartColors.length], // assign color cyclically
        })
      )

      // Update state with prepared chart data
      setChartData(mapped)
    }

    fetchBooks()
  }, []) // run only once when component mounts

  // Calculate total number of unique books across all categories
  const totalBooks = chartData.reduce((sum, item) => sum + item.count, 0)

  return (
    <Card className="flex flex-col">
      {/* Empty header (kept for styling consistency) */}
      <CardHeader className="pb-0"></CardHeader>

      <CardContent className="flex flex-col items-center pb-0">
        {/* Render Pie chart with width/height fixed */}
        <PieChart width={300} height={300}>
          <Pie
            data={chartData}       // input data for pie
            dataKey="count"        // what value determines slice size
            nameKey="category"     // what label to show for slices
            cx="50%"               // center X
            cy="50%"               // center Y
            outerRadius={120}      // radius (controls full/empty donut look)
            stroke="none"          // remove default borders around slices
          >
            {/* Render each slice with corresponding fill color */}
            {chartData.map((entry, index) => (
              <Cell key={index} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>

        {/* Bottom custom legend (shows category + percentage) */}
        <div className="flex flex-wrap gap-4 mt-4">
          {chartData.map((entry, index) => {
            // Calculate percentage of this category relative to total
            const percentage =
              totalBooks > 0 ? ((entry.count / totalBooks) * 100).toFixed(1) : "0"

            return (
              <div key={index} className="flex flex-col items-center gap-1">
                {/* Small color dot for category */}
                <span
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: entry.fill }}
                />
                {/* Category name */}
                <span className="text-black font-medium">{entry.category}</span>
                {/* Percentage value */}
                <span className="text-black font-semibold">{percentage}%</span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
