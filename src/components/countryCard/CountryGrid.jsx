import CountryCard from "./CountryCard"
import CountryCardContent from "./CountryCardContent"

export default function CountryGrid({ countries }) {
    if (!countries || countries.length == 0) return null

    return (
        <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {countries.map((c) => (
                <CountryCard key={c.alpha3Code}>
                    <CountryCardContent
                        flag={c.flags?.png}
                        name={c.name?.common}
                        region={c.region || "N/A"}
                        population={c.population?.toLocaleString() || "N/A"}
                    />
                </CountryCard>
            ))}
        </div>
    )
}