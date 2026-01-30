import CountrySkeletonCard from "./CountrySkeletonCard";

export default function CountrySkeletonGrid({ count = 6 }) {
   return (
     <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {Array.from({ length: count }).map((_, i) => (
            <CountrySkeletonCard key={i} />
        ))}
     </div>
   )
}