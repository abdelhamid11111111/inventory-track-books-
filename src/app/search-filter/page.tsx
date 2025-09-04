import { SideBar } from '@/app/sideBar/page';
import React from 'react'
import SearchComponent from '../components/Search';



const SearchFilterPage = () => {
    
 return (
  <div className="flex h-screen">
    <SideBar/>
    <main className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
            
                {/* <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span> */}
                <SearchComponent/>
        <section className="mb-8">
            <div className="flex items-center gap-4">
                <div className="flex gap-2">
                    <button className="px-4 cursor-pointer py-2 text-sm font-medium text-white rounded-full shadow-sm bg-blue-600 transition-colors">All</button>
                    <button className="px-4 cursor-pointer py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full shadow-sm hover:bg-slate-50 transition-colors">Fiction</button>
                    <button className="px-4 cursor-pointer py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full shadow-sm hover:bg-slate-50 transition-colors">Non-Fiction</button>
                    <button className="px-4 cursor-pointer py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full shadow-sm hover:bg-slate-50 transition-colors">Science</button>
                    <button className="px-4 cursor-pointer py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full shadow-sm hover:bg-slate-50 transition-colors">History</button>
                </div>
            </div>
        </section>

        
        {/* THIS CODE OF LOADIN */}
        {/* <div className="max-w-7xl mx-auto">
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
              >
                <div className="w-full bg-slate-200 aspect-[3/4]"></div>
                <div className="p-4">
                  <div className="h-6 bg-slate-200 rounded w-3/4 mb-2"></div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div></div> */}
      
      
   <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl ">
          <div
            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACP4PBaXcAwMI7YSBLYzMiG95B4I_1jcB3mxGmVJ_MTAtr-fjzqMC1iCtottblnXYnljMU9GAGmlNvnV5ydjBuPoBP2-e29t2zp7Ad1X1PlU7v7Y256kIxxYTEyoELk5S7_Ve8rbrhW2MabnoEB4zftjjExhA-du3gEWzR9dR1Nm6MpSzMxa_hzeqtQYKVh_3Npjr-CzoWHmg8vgwK1g-SYViNSRGP7SeKNC9plOLynOU3g4CPQefLatZ0qXnH9iRXfd2uYxV5cMMf")' }}
          ></div>
           <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate" title="The Silent Observer">
      The Silent Observer
    </h3>
    <div className="flex items-center justify-between mb-4 text-gray-600 text-sm font-medium">
      <span>Quantity: 15</span>
      <span>Price: $15</span>
    </div>
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
      In Stock
    </span>
  </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl ">
          <div
            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDj-9KbclgOq9-zwttTCzmaaDKrYNdutv8ySKHhq5M2zWgSwHZHtQS1H6EbY4gdJSSpwoV7p1yuORW7UNxKuTabdPvp7oBC-KNC9vyINUkyYm1AA2WR49Sapxv1nek17x4BbcCQILJIwCM9QAoXar3ypXUJC6L47NoeclnUn1eMMoKWdF3VIWTXT8s0mXTufdAAmQjx75bnuyeWsXJKU8PPPkOVwHK6N6qWG7gPlg2ahNVHknEvr6P5jwTMaasKLF1qH9NK_IXEIUAh")' }}
          ></div>
          <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate" title="The Silent Observer">
      The Silent Observer
    </h3>
    <div className="flex items-center justify-between mb-4 text-gray-600 text-sm font-medium">
      <span>Quantity: 15</span>
      <span>Price: $15</span>
    </div>
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
      In Stock
    </span>
  </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl ">
          <div
            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIn1AgVB-XrfSZxn5nUhpuufnH1A_tLu9XHOLXFOz6Ohl-AK9I4LRIXXCw7qDNM1xOwL8H4j_nqt09tYwFlVejS1bPjwRibhyUQGcywn61ZULW71uVnRG8aUkm7gqt9hCNua0rgP73HCWhoPv6yWD0ri-QbpynLe-cbnr15LlPBSOBGD1PkKWKB3ufkmgxYi1nKMwbB1BHKvMhZIztQyV6yun-dmGMAKYN649TMhg7PxFrer9dozGzinX-_RpZExNfb7QNVnECOhOw")' }}
          ></div>
          <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate" title="The Silent Observer">
      The Silent Observer
    </h3>
    <div className="flex items-center justify-between mb-4 text-gray-600 text-sm font-medium">
      <span>Quantity: 15</span>
      <span>Price: $15</span>
    </div>
        <span className="px-2 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">Out of Stock</span>

  </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl ">
          <div
            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxQ46kYYhM6TZO8R8LAp3IrFDM0mej_lpB476P9y-BG_Bdv0mbpnSdroHtIqX8BTeZtt5V1DSPYNPautfBhtV8ySrglajCBlfdSwurFHMKRHfVFwOwN6Hgp3I7c3wa-W-wy7NV_Ju6yYx0IDIfT4CFI6aAdue7fG2YCYwR4nzchdYxoKeReTgsWJ6LBRm2TEG7eI-E8LNfRJfuf_nj5ihcKkX63TA_5maAzWfVzzv89k9of5m5yicSMBnt8yJra7owSevSWdsZn1xK")' }}
          ></div>
          <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate" title="The Silent Observer">
      The Silent Observer
    </h3>
    <div className="flex items-center justify-between mb-4 text-gray-600 text-sm font-medium">
      <span>Quantity: 15</span>
      <span>Price: $15</span>
    </div>
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
      In Stock
    </span>
  </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl ">
          <div
            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlv7bcVOcDcIzsPm8iaXtwu3avE3asT02UEm7PNyet_16JIqDl77-i0N4mLNM8o8c0cI6Y4SQ6K9Tg1cmymxIPLwCUzTu0ZNnBlKgkpfL_IQ-gTjy8mA8QwWn7iDcJZXHZUYWdb758hGgFs4lHMweiT9A9YmEVfdp8zrUQOK9QvQT73ZnrM1HcykedITCWlU3E8gmTcDsnHuh_BeVn6c7tG7gUf6Ccsy8cEG5xVUr85MPayOsAPZIX-apEu6tV8su-b_0EbZGap8Pl")' }}
          ></div>
         <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate" title="The Silent Observer">
      The Silent Observer
    </h3>
    <div className="flex items-center justify-between mb-4 text-gray-600 text-sm font-medium">
      <span>Quantity: 15</span>
      <span>Price: $15</span>
    </div>
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
      In Stock
    </span>
  </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl ">
          <div
            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArfRTMw6Jb3Ejkdx9qXC-CKE80xpF_fKFaEjy1H3JO2Wt9N_p7GOQ8s3Fgbp-MykM3TsJCQkicYq2hbXBw96ej7uOiv07gEzqAWOH0Ih8njThPPRB5Iqg848lqZz9jXfd62amuT5_zWchItWI4ZEt9m6MKCdWlrr8gDkRF1OB1ED-Du-ZU4-MzfHobKrPdyPmBXnblIjS_YtZ_LhIRqzJhQ748OmjGshzKRo_mnkzrDd5QiQ8bV1qiXEIRZiwgbOfo3h98p-JOJoaH")' }}
          ></div>
          <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate" title="The Silent Observer">
      The Silent Observer
    </h3>
    <div className="flex items-center justify-between mb-4 text-gray-600 text-sm font-medium">
      <span>Quantity: 15</span>
      <span>Price: $15</span>
    </div>
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
      In Stock
    </span>
  </div>
        </div>

      </div>
    </div>
    </div>
       


    </main>
  </div>
);

}

export default SearchFilterPage 
