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
    <div>
      <h1>Search Talent</h1>
      <input
        type="text"
        placeholder="Search by skill"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="results">
        {results.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
