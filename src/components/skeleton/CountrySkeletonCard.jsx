export default function CountrySkeletonCard() {
    return (
        <div className="bg-white rounded-xl shadow p-10 animate-pulse">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">

                <div className="flex justify-center sm:justify-start">
                    <div className="w-40 h-28 bg-gray-200 rounded"></div>
                </div>

                <div className="space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>

            </div>
        </div>
    )
}
