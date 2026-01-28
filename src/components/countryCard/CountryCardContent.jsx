export default function CountryCardContent({ flag, name, region, population }) {
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="flex justify-center sm:justify-start">
                <img
                    src={flag}
                    alt={name}
                    className="w-50 h-30 object-cover mx-auto mb-2 rounded"
                />
            </div>
            <div className="text-center sm:text-left mb-4">
                <h2 className="font-bold text-lg mb-1">{name}</h2>
                <p className="text-gray-600 text-sm">Region: {region}</p>
                <p className="text-gray-600 text-sm">
                    Population: {population?.toLocaleString()}
                </p>
            </div>
        </div>
    )
}