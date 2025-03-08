import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import profiles from "../data/profiles.json";

const Home = () => {
  const [talentProfiles, setTalentProfiles] = useState([]);

  useEffect(() => {
    // Simulate an API call
    setTalentProfiles(profiles);
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Talent Showcase</h1>
      <div className="profiles">
        {talentProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Home;
