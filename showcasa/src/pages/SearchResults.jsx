import React, { useState } from "react";
import profiles from "../data/profiles.json";
import ProfileCard from "../components/ProfileCard";

const SearchResults = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = profiles.filter((profile) =>
      profile.skills.some((skill) =>
        skill.toLowerCase().includes(query.toLowerCase())
      )
    );
    setResults(filtered);
  };

  return (
    <div className="py-20">
      <h1 className="text-center">Search Talent</h1>
      <div className="max-w-[1420px] mx-auto px-4">
        <div className="search-input-wrapper flex flex-wrap items-center justify-center mt-8 gap-x-4 gap-y-3">
          <input
            type="text"
            placeholder="Search by skill"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="max-w-[320px] text-[#646167] py-3 placeholder-[#D0CDD3] px-8 w-100 rounded-[30px] border-[#E2E0E4] focus:outline-none focus:shadow-none focus:ring-0"
          />
          <button className="btn-primary btn" onClick={handleSearch}>
            <span className="relative z-1">Search</span>
          </button>
        </div>

        <div className="results mt-14">
          <div className="profiles-grid flex flex-wrap -mx-4">
            {results.map((profile) => (
              <div className="xl:w-1/4 md:w-1/2 w-full px-4">
                <ProfileCard key={profile.slug} profile={profile} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
