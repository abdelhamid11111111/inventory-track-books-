'use client'
import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { useRouter } from 'next/navigation';




const SearchComponent = () => {

    const [search, setSearch] = useState("")
    const router = useRouter()

    const handleSearch = () => {
        if(!search.trim()) return;
        const encoded = encodeURIComponent(search.trim())
        router.push(`/search?query=${encoded}`)
    }

  return (
    <header className="mb-8">
        <div className="relative">
            <div className="relative w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                    className="w-full py-3 pl-5 pr-16 rounded-full outline-none focus:outline-none focus:ring-0 bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 shadow-sm transition-all" placeholder="Search for books by title, author, or ISBN..." type="text" 
                />
                <button
                    onClick={handleSearch}
                    className="absolute cursor-pointer top-1/2 right-2 -translate-y-1/2 bg-[var(--primary-color)] text-black p-2 rounded-full shadow-md hover:bg-opacity-90 transition"
                    aria-label="Search"
                >
                    <FiSearch size={20}/>
                </button>
            </div>
        </div>
    </header>
  )
}

export default SearchComponent