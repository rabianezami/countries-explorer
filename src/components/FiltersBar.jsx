import SearchBar from "./SearchBar"
import RegionFilter from "./RegionFilter"

export default function FiltersBar({ searchTerm, setSearchTerm, region, setRegion }) {
    return (
        <div
            className="
       max-w-4xl
       mx-auto
       mt-6
       px-4
       flex
       flex flex-row
       gap-4
       items-center
       justify-center
       "
        >
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <RegionFilter
                value={region}
                onChange={setRegion}
            />
        </div>
    )
}