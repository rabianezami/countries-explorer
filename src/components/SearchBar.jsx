import { Search, X } from "lucide-react"

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const hasText = searchTerm?.trim().length > 0

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative flex items-center rounded-xl bg-white/10 border border-gray-200 hover:border-gray-300 px-3 py-2 mt-5">

        <Search
          size={18}
          className="text-gray-300 mr-2"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Country..."
          className="flex-1 bg-transparent outline-none text-gray-500 placeholder-gray-300 p-1"
        />

        {hasText && (
          <button
            onClick={() => setSearchTerm("")}
            type="button"
            className="ml-2 text-gray-300 hover:text-gray-400"
          >
            <X size={16} />
          </button>
        )}
      </div>

    </div>
  )
}