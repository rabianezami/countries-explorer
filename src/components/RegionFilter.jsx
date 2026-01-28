const regions = ["Afghanistn", "Americas", "Iran", "Pakistan", "Europe", "Oceania"]

export default function RegionFilter({ value, onChange }) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
        h-11
        px-3 
        rounded-xl 
        border border-gray-200 
        bg-white 
        text-gray-600 
        focus:outline-none 
        focus:ring-2 
        focus:ring-gray-200
        hover:border-gray-300
        w-40 md:w-40
      "
        >
            <option value="all">Filter by Region</option>

            {regions.map((region) => (
                <option key={region} value={region}>
                    {region}
                </option>
            ))}
        </select>
    )
}