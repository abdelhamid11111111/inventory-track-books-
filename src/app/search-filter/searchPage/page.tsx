import SearchComponent from '@/app/components/Search';
import { SideBar } from '@/app/sideBar/page'
import { MdOutlineSearchOff } from "react-icons/md";





const SearchPage = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">

          {/* Search Header */}
          <SearchComponent/>
          {/* Empty State */}
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

        </div>
      </main>

    </div>
  )
}

export default SearchPage;
