'use client'
import React, { useState } from 'react'
import { FaBook } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { RiBarChart2Fill } from "react-icons/ri";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SideBar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/',
      icon: FaBook,
      label: 'Books Table'
    },
    {
      href: '/books',
      icon: IoSearch,
      label: 'Search'
    },
    {
      href: '/statistics',
      icon: RiBarChart2Fill,
      label: 'Statistics'
    }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <div>
      <aside className="flex flex-col w-64 bg-white border-r h-full border-gray-200 p-6 shrink-0">
        <div className="flex items-center gap-2 mb-8">
          <div className="text-[#137fec]">
            <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
              <path d="M240,64V192a16,16,0,0,1-16,16H160a24,24,0,0,0-24,24,8,8,0,0,1-16,0,24,24,0,0,0-24-24H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H88a32,32,0,0,1,32,32v88a8,8,0,0,0,16,0V80a32,32,0,0,1,32-32h56A16,16,0,0,1,240,64Z"></path>
            </svg>
          </div>
          <h1 className="text-gray-900 text-lg font-semibold">Book Tracker</h1>
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors ${
                isActive(href)
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  )
}